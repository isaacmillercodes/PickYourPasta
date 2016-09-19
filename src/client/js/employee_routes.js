$(document).on('click', '#employee_delete', function() {
  const answer = confirm('Are you sure?');
  if (answer) {
    const $this = $(this);
    const employeeId = $this.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: `/delete/${employeeId}`
    })
    .done((data) => {
      location.reload();
      console.log(data);
    })
    .fail((err) => {
      console.log(err);
    });
  }
});

// $(document).on('click', '#employee_edit', function() {
//
//
//
// });
