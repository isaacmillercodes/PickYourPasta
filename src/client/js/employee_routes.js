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


$(document).on('click', '#employee_edit', function() {
  window.location.replace('./employees/edit/' + this.id);


});
