(function () {

  console.log('sanity check!');

  $(document).on('click', '.restaurant_delete-btn', function() {
    const answer = confirm('Are you sure?');
    if (answer) {
      const $this = $(this);
      const restaurantId = $this.attr('data-id');
      $.ajax({
        type: 'DELETE',
        url: `/delete/${restaurantId}`
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

  //pre-check the users original rating on edit-review page

  $(document).ready(function() {
    const oldRating = $('.oldRating').val();

    $('input:radio').each(function(index) {
      if ($('input:radio')[index].value === oldRating) {
        $(this).attr('checked', 'checked');
      }
    });
  });

  //send put request

  $('.editReview').on('submit', function(e) {
    e.preventDefault();

    const restID = $('.hiddenRest').val();

    const userID = $('.hiddenUser').val();

    const review = $('.reviewText').val();

    const rating = $('input:radio:checked').val();

    const editedReview = {
      rest_id: restID,
      user_id: userID,
      review: review,
      rating: rating
    };

    $.ajax({
      url: '/restaurants/' + restID + '/reviews/' + userID + '/edit',
      type: 'PUT',
      data: JSON.stringify(editedReview),
      contentType: 'application/json',
      success: function(result) {
        window.location = result;
      },
      error: function(error) {
        console.log(error);
      }
    });
  });

})();
