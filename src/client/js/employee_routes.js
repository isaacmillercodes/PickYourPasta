$(document).on('click', '#employee_delete', function() {
  const answer = confirm('Are you sure?');
  if (answer) {
    const $this = $(this);
    const employeeId = $this.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: `/employees/delete/${employeeId}`,
      success: function(result) {
        window.location = result;
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
});

$('.editEmployee').on('submit', e => {
  e.preventDefault();
  const restID = parseInt($('.hiddenRestId').val());
  const empID = parseInt($('.hiddenEmpId').val());
  const firstName = $('.first_name').val();
  const lastName = $('.last_name').val();
  const title = $('.emp_title').val();

  const updatedEmployee = {
    first_name: firstName,
    last_name: lastName,
    title: title
  };

  $.ajax({
    url: '/restaurants/' + restID + '/employees/' + empID + '/edit',
    type: 'PUT',
    data: JSON.stringify(updatedEmployee),
    contentType: 'application/json',
    success: function(result) {
      window.location = result;
    },
    error: function(error) {
      console.log(error);
    }
  });
});
