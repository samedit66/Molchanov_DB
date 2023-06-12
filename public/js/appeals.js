$(document).ready(function () {
  const appeal_data = [
    {
      appeal_id: 1,
      client_full_name: 'Иванов Иван Иванович',
      operator_full_name: 'Петров Петр Петрович',
      appeal_reason: 'Проблема с интернетом',
      appeal_result: 'Решено',
      client_comment: 'Быстро и качественно',
      appeal_status: 'success'
    },
    {
      appeal_id: 2,
      client_full_name: 'Смирнов Алексей Викторович',
      operator_full_name: 'Сидоров Сергей Сергеевич',
      appeal_reason: 'Не работает телевидение',
      appeal_result: 'Решено',
      client_comment: 'Спасибо за помощь',
      appeal_status: 'success'
    },
    {
      appeal_id: 3,
      client_full_name: 'Кузнецов Андрей Михайлович',
      operator_full_name: 'Морозов Владимир Владимирович',
      appeal_reason: 'Нет связи',
      appeal_result: 'Решено',
      client_comment: 'Отличный сервис',
      appeal_status: 'success'
    },
    {
      appeal_id: 4,
      client_full_name: 'Соколова Елена Васильевна',
      operator_full_name: 'Зайцева Анна Александровна',
      appeal_reason: 'Сбой в платежной системе',
      appeal_result: 'Решено',
      client_comment: 'Благодарю за оперативность',
      appeal_status: 'success'
    },
    {
      appeal_id: 5,
      client_full_name: 'Попова Ольга Сергеевна',
      operator_full_name: 'Никитина Мария Игоревна',
      appeal_reason: 'Проблемы с роутером',
      appeal_result: 'Решено',
      client_comment: 'Все работает, спасибо',
      appeal_status: 'success'
    },
    {
      appeal_id: 11,
      client_full_name: 'Макаров Дмрий Алексеевич',
      operator_full_name: 'Беляева Екатерина Викторовна',
      appeal_reason: 'Замена оборудования',
      appeal_result: 'Решено',
      client_comment: 'Быстро заменили, спасибо',
      appeal_status: 'success'
    },
    {
      appeal_id: 12,
      client_full_name: 'Андреева Анастасия Игоревна',
      operator_full_name: 'Григорьева Вероника Сергеевна',
      appeal_reason: 'Вопросы по тарифам',
      appeal_result: 'Решено',
      client_comment: 'Подробно все объяснили',
      appeal_status: 'success'
    },
    {
      appeal_id: 13,
      client_full_name: 'Федорова Валентина Владимировна',
      operator_full_name: 'Козлова Алина Андреевна',
      appeal_reason: 'Не работает Wi-Fi',
      appeal_result: 'Решено',
      client_comment: 'Помогли настроить, спасибо',
      appeal_status: 'success'
    },
    {
      appeal_id: 14,
      client_full_name: 'Михайлова Виктория Александровна',
      operator_full_name: 'Лебедева Анжелика Михайловна',
      appeal_reason: 'Проблемы оплатой',
      appeal_result: 'Решено',
      client_comment: 'Все разобрались, благодарю',
      appeal_status: 'success'
    },
    {
      appeal_id: 15,
      client_full_name: 'еменова Александра Владимировна',
      operator_full_name: 'Егорова Дарья Алексеевна',
      appeal_reason: 'Нет доступа к сайту',
      appeal_result: 'Решено',
      client_comment: 'Сайт снова работает, спасибо',
      appeal_status: 'success'
    },
    {
      appeal_id: 16,
      client_full_name: 'Романова Елена Андреевна',
      operator_full_name: 'Головина Ксения Васильевна',
      appeal_reason: 'Не могу подключиться к сети',
      appeal_result: 'Решено',
      _comment: 'Подключение восстановлено',
      appeal_status: 'success'
    },
    {
      appeal_id: 17,
      client_full_name: 'Кириллова Анна Михайловна',
      operator_full_name: 'Савельева Маргарита Александровна',
      appeal_reason: 'Не работает телефон',
      appeal_result: 'Решено',
      client_comment: 'Телефон снова работает спасибо',
      appeal_status: 'success'
    },
    {
      appeal_id: 18,
      client_full_name: 'Шестакова Ирина Викторовна',
      operator_full_name: 'Логинова Ольга Сергеевна',
      appeal_reason: 'Вопросы по счету',
      appeal_result: 'Решено',
      client_comment: 'Разъяснили все непонятные моменты',
      appeal_status: 'success'
    },
    {
      appeal_id: 19,
      client_full_name: 'Яковлева Татьяна Владимировна',
      operator_full_name: 'Кудрявцева Юлия Игоревна',
      appeal_reason: 'Не могу зарегистрироваться на сайте',
      appeal_result: 'Решено',
      client_comment: 'Помогли с регистрацией, спасибо',
      _status: 'success'
    },
    {
      appeal_id: 20,
      client_full_name: 'Сазонова Вера Александровна',
      operator_full_name: 'Самойова Анастасия Викторовна',
      appeal_reason: 'Не могу войти в личный кабинет',
      appeal_result: 'Решено',
      client_comment: 'Восстановили доступ, благодарю',
      appeal_status: 'success'
    },
    {
      appeal_id: 21,
      client_full_name: 'Борисова Мария Ивановна',
      operator_full_name: 'Калинина Анна Петровна',
      appeal_reason: 'Не могу изменить тариф',
      appeal_result: 'В процессе',
      client_comment: '',
      appeal_status: 'not-processed'
    },
    {
      appeal_id: 22,
      client_full_name: 'Волкова Екатерина Сергеевна',
      operator_full_name: 'Миронова Вероника Алексеевна',
      appeal_reason: 'Проблемы с интернет-скоростью',
      appeal_result: 'Не решено',
      client_comment: 'Скорость все еще низкая',
      appeal_status: 'unsuccessful'
    },
    {
      appeal_id: 23,
      client_full_name: 'Гусева Алена Владимировна',
      operator_full_name: 'Фролова Ольга Викторовна',
      appeal_reason: 'Не могу оплатить услуги',
      appeal_result: 'В процессе',
      client_comment: '',
      appeal_status: 'not-processed'
    },
    {
      appeal_id: 24,
      client_full_name: 'Дмитриева Ирина Андреевна',
      operator_full_name: 'Кузьмина Мария Васильевна',
      appeal_reason: 'Не могу подключиться к Wi-Fi',
      appeal_result: 'Не решено',
      client_comment: 'Проблема не устранена',
      appeal_status: 'unsuccessful'
    },
    {
      appeal_id: 25,
      client_full_name: 'Егорова Анастасия Михайловна',
      operator_full_name: 'Новикова Елена Александровна',
      appeal_reason: 'Не работает телевидение',
      appeal_result: 'В процессе',
      client_comment: '',
      appeal_status: 'not-processed'
    },
    {
      appeal_id: 26,
      client_full_name: 'Жукова Ольга Викторовна',
      operator_full_name: 'Петрова Анна Сергеевна',
      appeal_reason: 'Не могу восстановить пароль',
      appeal_result: 'Не решено',
      client_comment: 'Пароль так и не был восстановлен',
      appeal_status: 'unsuccessful'
    }
  ];

  const appeal_table = new Tabulator('#appeals-table', {
    index: 'appeal_id',
    data: appeal_data,
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
      { title: 'Идентификатор', field: 'appeal_id', visible: false },
      { title: 'ФИО клиента', field: 'client_full_name' },
      { title: 'ФИО оператора', field: 'operator_full_name' },
      { title: 'Причина обращения', field: 'appeal_reason' },
      { title: 'Результат обращения', field: 'appeal_result' },
      { title: 'Комментарий от клиента', field: 'client_comment' },
      {
        title: 'Статус обращения', field: 'appeal_status', formatter: function (cell) {
          const status = cell.getValue();
          switch (status) {
            case 'success':
              return 'Успешно';
            case 'unsuccessful':
              return 'Неуспешно';
            case 'not-processed':
              return 'Не обработано';
            default:
              return '';
          }
        }
      },
    ]
  });

  appeal_table.on("rowSelectionChanged", function (data, rows) {
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

  $('#add-row-btn').click(function () {
    $('#save-appeal-btn').removeClass('d-none');
    $('#change-appeal-btn').addClass('d-none');
  });

  $('#del-row-btn').click(function () {
    for (let row of appeal_table.getSelectedRows()) {
      row.delete();
    }

    $(this).addClass('disabled');
    $('#edit-row-btn').addClass('disabled');
  });

  // Получаем элементы формы и кнопки
  const saveAppealBtn = document.getElementById('save-appeal-btn');
  const appealId = document.getElementById('appeal-id');
  const clientFullNameInput = document.getElementById('client-full-name');
  const operatorFullNameInput = document.getElementById('operator-full-name');
  const appealReasonInput = document.getElementById('appeal-reason');
  const appealResultInput = document.getElementById('appeal-result');
  const clientCommentInput = document.getElementById('client-comment');
  const appealStatusInput = document.getElementById('appeal-status');

  // Функция для создания нового объекта обращения
  function createAppealObject() {
    const uniqueAppealId = new Date().getTime();
    return {
      appeal_id: uniqueAppealId,
      client_full_name: clientFullNameInput.value,
      operator_full_name: operatorFullNameInput.value,
      appeal_reason: appealReasonInput.value,
      appeal_result: appealResultInput.value,
      client_comment: clientCommentInput.value,
      appeal_status: appealStatusInput.value
    };
  }

  // Обработчик нажатия на кнопку "Сохранить обращение"
  saveAppealBtn.addEventListener('click', () => {
    $('#add-appeal-modal').modal('hide');

    const newAppeal = createAppealObject();
    appeal_table.addRow(newAppeal, true);
  });

  // Функция для установки значений полей формы обращения
  function set_data_to_appeal_form(row_data) {
    appealId.value = row_data.appeal_id;
    clientFullNameInput.value = row_data.client_full_name;
    operatorFullNameInput.value = row_data.operator_full_name;
    appealReasonInput.value = row_data.appeal_reason;
    appealResultInput.value = row_data.appeal_result;
    clientCommentInput.value = row_data.client_comment;
    appealStatusInput.value = row_data.appeal_status;
  }

  $('#edit-row-btn').click(function () {
    $('#save-appeal-btn').addClass('d-none');
    $('#change-appeal-btn').removeClass('d-none');

    const row = appeal_table.getSelectedRows()[0];
    const row_data = row.getData();

    set_data_to_appeal_form(row_data);

    $('#add-appeal-modal').modal('show');
  });

  // Функция для получения данных из формы обращения
  function get_data_from_appeal_form() {
    return {
      appeal_id: parseInt($('#appeal-id').val()),
      client_full_name: clientFullNameInput.value,
      operator_full_name: operatorFullNameInput.value,
      appeal_reason: appealReasonInput.value,
      appeal_result: appealResultInput.value,
      client_comment: clientCommentInput.value,
      appeal_status: appealStatusInput.value
    };
  }

  function clear_new_appeal_form() {
    clientFullNameInput.value = '';
    operatorFullNameInput.value = '';
    appealReasonInput.value = '';
    appealResultInput.value = '';
    clientCommentInput.value = '';
    appealStatusInput.value = '';
  }

  $('#change-appeal-btn').click(function () {
    $('#add-appeal-modal').modal('hide');

    const row = appeal_table.getSelectedRows()[0];
    row.deselect();

    const updatedAppeal = get_data_from_appeal_form();

    console.log(updatedAppeal);
    appeal_table.updateData([updatedAppeal]);

    clear_new_appeal_form();
  });

});