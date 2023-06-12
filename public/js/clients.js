$(document).ready(function () {
  function clear_client_form() {
    $('#client-id').val('');
    $('#client-last-name').val('');
    $('#client-first-name').val('');
    $('#client-patronymic').val('');
    $('#client-birth-date').val('');
    $('#client-phone-number').val('');
  }

  function get_data_from_client_form() {
    const last_name = $('#client-last-name').val();
    const first_name = $('#client-first-name').val();
    const patronymic = $('#client-patronymic').val();
    const birth_date = $('#client-birth-date').val();
    const phone_number = $('#client-phone-number').val();

    return {
      first_name: first_name,
      last_name: last_name,
      patronymic: patronymic,
      phone_number: phone_number,
      birth_date: birth_date,
    };
  }

  function set_data_to_client_from(client_data) {
    $('#client-id').val(client_data.client_id);
    $('#client-last-name').val(client_data.last_name);
    $('#client-first-name').val(client_data.first_name);
    $('#client-patronymic').val(client_data.patronymic);
    $('#client-birth-date').val(client_data.birth_date);
    $('#client-phone-number').val(client_data.phone_number);
  }

  const client_table = new Tabulator('#client-table', {
    index: 'client_id',
    selectable: true,
    placeholder: 'Нет данных',
    layout: 'fitColumns',
    pagination: true,
    paginationSize: 6,
    paginationInitialPage: 1,
    paginationSizeSelector: [3, 6, 8, 10, true],
    columns: [
      {
        formatter: "rowSelection", titleFormatter: "rowSelection", headerHozAlign: 'center', hozAlign: "center", headerSort: false, cellClick: function (e, cell) {
          cell.getRow().toggleSelect();
        },
        width: 40,
      },
      { title: 'Идентификатор', field: 'client_id', visible: false },
      { title: 'Фамилия', field: 'last_name' },
      { title: 'Имя', field: 'first_name' },
      { title: 'Отчество', field: 'patronymic' },
      { title: 'Дата рождения', field: 'birth_date' },
      { title: 'Номер телефона', field: 'phone_number', headerSort: false },
    ]
  });

  client_table.on("rowSelectionChanged", function (data, rows) {
    if (data.length > 0) {
      $('#del-row-btn').removeClass('disabled');

      if (data.length == 1) {
        $('#edit-row-btn').removeClass('disabled');
      } else {
        $('#edit-row-btn').addClass('disabled');
      }
    } else {
      $('#del-row-btn').addClass('disabled');
      $('#edit-row-btn').addClass('disabled');
    }
  });

  $('#save-client-btn').click(function () {
    $('#add-client-modal').modal('hide');

    const client = { client: get_data_from_client_form() };

    fetch('/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(client),
    })
      .then(response => response.json())
      .then(data => client_table.addRow(data.client, true));

    clear_new_client_form();
  });

  $('#change-client-btn').click(function () {
    $('#add-client-modal').modal('hide');

    const row = client_table.getSelectedRows()[0];
    row.deselect();

    const client_id = $('#client-id').val();
    const client = { client: get_data_from_client_form() };

    fetch(`/clients/${client_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(client),
    })
      .then(response => response.json())
      .then(data => client_table.updateData([data.client]));

    clear_new_client_form();
  });

  $('#discard-client-btn').click(function () {
    clear_new_client_form();
  });

  $('#add-row-btn').click(function () {
    $('#save-client-btn').removeClass('d-none');
    $('#change-client-btn').addClass('d-none');
  });

  $('#del-row-btn').click(function () {
    for (let row of client_table.getSelectedRows()) {
      const row_data = row.getData();

      const client_id = row_data.client_id;
      fetch(`/clients/${client_id}`, {
        method: 'DELETE'
      });

      row.delete();

      $(this).addClass('disabled');
      $('#edit-row-btn').addClass('disabled');
    }
  });

  $('#edit-row-btn').click(function () {
    $('#save-client-btn').addClass('d-none');
    $('#change-client-btn').removeClass('d-none');

    const row = client_table.getSelectedRows()[0];
    const row_data = row.getData();

    set_data_to_client_from(row_data);

    $('#add-client-modal').modal('show');
  });

  $('#search-client-btn').click(function () {
    const needed = $('#search-client-value').val();

    client_table.setFilter(function (data, filterParams) {
      // Iterate through all properties of the data object
      for (var property in data) {
        if (data.hasOwnProperty(property)) {
          // Check if the property value contains the search string
          if (String(data[property]).toLowerCase().indexOf(filterParams.searchString.toLowerCase()) > -1) {
            return true;
          }
        }
      }
      return false;
    }, { searchString: needed });
  });

  const data = [
    {
      "client": {
        "first_name": "Александр",
        "last_name": "Иванов",
        "patronymic": "Сергеевич",
        "birth_date": "1990-05-12",
        "phone_number": "+79001234567"
      }
    },
    {
      "client": {
        "first_name": "Екатерина",
        "last_name": "Петрова",
        "patronymic": "Александровна",
        "birth_date": "1985-11-23",
        "phone_number": "+79011234567"
      }
    },
    {
      "client": {
        "first_name": "Дмитрий",
        "last_name": "Смирнов",
        "patronymic": "Андреевич",
        "birth_date": "1992-02-08",
        "phone_number": "+79021234567"
      }
    },
    {
      "client": {
        "first_name": "Анна",
        "last_name": "Кузнецова",
        "patronymic": "Игоревна",
        "birth_date": "1988-07-31",
        "phone_number": "+79031234567"
      }
    },
    {
      "client": {
        "first_name": "Иван",
        "last_name": "Соколов",
        "patronymic": "Максимович",
        "birth_date": "1995-09-17",
        "phone_number": "+79041234567"
      }
    },
    {
      "client": {
        "first_name": "Мария",
        "last_name": "Попова",
        "patronymic": "Дмитриевна",
        "birth_date": "1991-04-02",
        "phone_number": "+79051234567"
      }
    },
    {
      "client": {
        "first_name": "Алексей",
        "last_name": "Лебедев",
        "patronymic": "Александрович",
        "birth_date": "1987-12-19",
        "phone_number": "+79061234567"
      }
    },
    {
      "client": {
        "first_name": "Ольга",
        "last_name": "Козлова",
        "patronymic": "Владимировна",
        "birth_date": "1993-03-27",
        "phone_number": "+79071234567"
      }
    },
    {
      "client": {
        "first_name": "Cергей",
        "last_name": "Новиков",
        "patronymic": "Николаевич",
        "birth_date": "1989-08-10",
        "phone_number": "+79081234567"
      }
    },
    {
      "client": {
        "first_name": "Татьяна",
        "last_name": "Морозова",
        "patronymic": "Ивановна",
        "birth_date": "1996-01-25",
        "phone_number": "+79091234567"
      }
    },
    {
      "client": {
        "first_name": "Артем",
        "last_name": "Вол",
        "patronymic": "Артемович",
        "birth_date": "1994-06-09",
        "phone_number": "+79101234567"
      }
    },
    {
      "client": {
        "first_name": "Елена",
        "last_name": "Андреева",
        "patronymic": "Петровна",
        "birth_date": "1990-11-22",
        "phone_number": "+79111234567"
      }
    },
    {
      "client": {
        "first_name": "Владимир",
        "last_name": "Крылов",
        "patronymic": "Сергеевич",
        "birth_date": "1986-0205",
        "phone_number": "+79121234567"
      }
    },
    {
      "client": {
        "first_name": "Наталья",
        "last_name": "Максимова",
        "patronymic": "Александровна",
        "birth_date": "1992-07-28",
        "phone_number": "+79131234567"
      }
    },
    {
      "client": {
        "first_name": "Андрей",
        "last_name": "Сидоров",
        "patronymic": "Дмитриевич",
        "birth_date": "1988-12-13",
        "phone_number": "+79141234567"
      }
    },
    {
      "client": {
        "first_name": "Оксана",
        "last_name": "Николаева",
        "patronymic": "Игоревна",
        "birth_date": "1995-05-28",
        "phone_number": "+79151234567"
      }
    },
    {
      "client": {
        "first_name": "Михаил",
        "last_name": "Зайцев",
        "patronymic": "Андреевич",
        "birth_date": "1991-10-11",
        "phone_number": "+79161234567"
      }
    },
    {
      "client": {
        "first_name": "Юлия",
        "last_name": "Федорова",
        "patronymic": "Владимировна",
        "birth_date": "1987-05-24",
        "phone_number": "+79171234567"
      }
    },
    {
      "client": {
        "first_name": "Павел",
        "last_name": "Матвеев",
        "patronymic": "Николаевич",
        "birth_date": "1993-09-06",
        "phone_number": "+79181234567"
      }
    },
    {
      "client": {
        "first_name": "Виктор",
        "last_name": "Белов",
        "patronymic": "Анатольевич",
        "birth_date": "1990-06-15",
        "phone_number": "+79171234568"
      }
    },
    {
      "client": {
        "first_name": "Людмила",
        "last_name": "Савельева",
        "patronymic": "Викторовна",
        "birth_date": "1986-11-30",
        "phone_number": "+79181234569"
      }
    },
    {
      "client": {
        "first_name": "Григорий",
        "last_name": "Орлов",
        "patronymic": "Петрович",
        "birth_date": "1992-02-20",
        "phone_number": "+79191234560"
      }
    },
    {
      "client": {
        "first_name": "Светлана",
        "last_name": "Алексеева",
        "patronymic": "Игоревна",
        "birth_date": "1989-08-05",
        "phone_number": "+79201234561"
      }
    },
    {
      "client": {
        "first_name": "Роман",
        "last_name": "Тихонов",
        "patronymic": "Максимович",
        "birth_date": "1995-10-25",
        "phone_number": "+79211234562"
      }
    },
    {
      "client": {
        "first_name": "Ирина",
        "last_name": "Кудрявцева",
        "patronymic": "Дмитриевна",
        "birth_date": "1991-05-10",
        "phone_number": "+79221234563"
      }
    },
    {
      "client": {
        "first_name": "Степан",
        "last_name": "Баранов",
        "patronymic": "Александрович",
        "birth_date": "1988-12-29",
        "phone_number": "+79231234564"
      }
    },
    {
      "client": {
        "first_name": "Маргарита",
        "last_name": "Куликова",
        "patronymic": "Владимировна",
        "birth_date": "1994-04-15",
        "phone_number": "+79241234565"
      }
    },
    {
      "client": {
        "first_name": "Тимофей",
        "last_name": "Антонов",
        "patronymic": "Николаевич",
        "birth_date": "1990-09-08",
        "phone_number": "+79251234566"
      }
    },
    {
      "client": {
        "first_name": "Вера",
        "last_name": "Виноградова",
        "patronymic": "Ивановна",
        "birth_date": "1996-02-14",
        "phone_number": "+79261234567"
      }
    },
    {
      "client": {
        "first_name": "Денис",
        "last_name": "Борисов",
        "patronymic": "Артемович",
        "birth_date": "1994-07-03",
        "phone_number": "+79271234568"
      }
    },
    {
      "client": {
        "first_name": "Галина",
        "last_name": "Беляева",
        "patronymic": "Петровна",
        "birth_date": "1991-11-18",
        "phone_number": "+79281234569"
      }
    },
    {
      "client": {
        "first_name": "Кирилл",
        "last_name": "Горбунов",
        "patronymic": "Сергеевич",
        "birth_date": "1987-03-07",
        "phone_number": "+79291234560"
      }
    },
    {
      "client": {
        "first_name": "Алла",
        "last_name": "Данилова",
        "patronymic": "Александровна",
        "birth_date": "1993-08-01",
        "phone_number": "+79301234561"
      }
    },
    {
      "client": {
        "first_name": "Федор",
        "last_name": "Семенов",
        "patronymic": "Дмитриевич",
        "birth_date": "1989-01-20",
        "phone_number": "+79311234562"
      }
    },
    {
      "client": {
        "first_name": "Зоя",
        "last_name": "Фролова",
        "patronymic": "Игоревна",
        "birth_date": "1995-06-12",
        "phone_number": "+79321234563"
      }
    },
    {
      "client": {
        "first_name": "Анатолий",
        "last_name": "Игнатьев",
        "patronymic": "Андреевич",
        "birth_date": "1992-10-27",
        "phone_number": "+79331234564"
      }
    },
    {
      "client": {
        "first_name": "Ксения",
        "last_name": "Лаврентьева",
        "patronymic": "Владимировна",
        "birth_date": "1988-05-18",
        "phone_number": "+79341234565"
      }
    },
    {
      "client": {
        "first_name": "Арсений",
        "last_name": "Гусев",
        "patronymic": "Николаевич",
        "birth_date": "1994-09-30",
        "phone_number": "+79351234566"
      }
    },
    {
      "client": {
        "first_name": "Олеся",
        "last_name": "Титова",
        "patronymic": "Андреевна",
        "birth_date": "1990-04-21",
        "phone_number": "+79361234567"
      }
    }
  ];

  for (let client of data) {
    fetch('/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(client),
    });
  }

  fetch('/clients')
    .then(response => response.json())
    .then(data => client_table.setData(data.clients));
});