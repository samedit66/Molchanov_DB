package App::Model::Clients;

use strict;
use warnings;
use experimental qw(signatures);
no warnings "experimental::signatures";
use feature 'state';

my @clients;

sub new ($class) { bless {}, $class }

sub __index_of ($self, $id) {
  return undef if @clients == 0;

  for (0..$#clients) {
    return $_ if $clients[$_]{client_id} == $id;
  }

  undef;
}

sub create ($self, $options) {
  state $id = 42;

  my $r = { client_id => $id, %{ $options->{client} } };
  push @clients, $r;

  $id++;

  return $r;
}

sub update ($self, $id, $options) {
  my $i = $self->__index_of($id);

  if (defined $i) {
    my $r = $clients[$i];

    for my $prop_name (keys %$options) {
      $r->{$prop_name} = $options->{$prop_name} if exists $r->{$prop_name};
    }

    return $r;
  }

  undef;
}

sub read_all ($self) { [ @clients ] }

sub read ($self, $id) {
  my $i = $self->__index_of($id);

  return $clients[$id] if defined $i;

  undef;
}

sub delete ($self, $id) {
  my $i = $self->__index_of($id);

  if (defined $i) {
    my $deleted = splice @clients, $i, 1;
    return $deleted;
  }

  undef;
}

1;