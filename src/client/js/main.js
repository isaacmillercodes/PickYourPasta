(function () {

  console.log('sanity check!');

  $(document).on('click', '.restaurant_delete-btn', function() {
        const answer = confirm('Are you sure?');
        if (answer) {
          const $this = $(this);
          const restaurantId = $this.attr('data-id');
          $.ajax({
            type: 'DELETE',
            url: `/restaurants/delete/${restaurantId}`
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

})();
