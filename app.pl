#!/usr/bin/env perl
use Mojolicious::Lite -signatures;

use lib qw(lib);
use App::Model::Clients;

helper clients => sub { state $clients = App::Model::Clients->new };

post '/clients' => sub ($c) {
  my $client_data = $c->req->json;

  my $client = {
    client => $c->clients->create($client_data)
  };

  $c->render(json => $client, status => 201);
};

get '/clients/<id:num>' => sub ($c) {
  my $id = $c->param('id');

  my $client = {
    client => $c->clients->read($id)
  };

  $c->render(json => $client);
};

get '/clients' => sub ($c) {
  my $clients = {
    clients => $c->clients->read_all
  };

  $c->render(json => $clients);
};

put '/clients/<id:num>' => sub ($c) {
  my $id = $c->param('id');
  my $options = $c->req->json->{'client'};

  my $client = {
    client => $c->clients->update($id, $options)
  };

  $c->render(json => $client);
};

del '/clients/<id:num>' => sub ($c) {
  my $id = $c->param('id');

  $c->clients->delete($id);

  $c->render('tables', status => 204);
};

get '/' => 'clients';

get 'appeals';

get 'clients';

app->start;