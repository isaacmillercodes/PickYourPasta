// $(document).ready(function() {
//   var rating = $('.star-rating').data('rating');
//   console.log(rating);
//
//   function stars() {
//     return $('.stars').each(function() {
//       var rating = $('.stars').data('rating');
//       var numStars = $('.stars').data('numStars');
//       var fullStar = new Array(Math.floor(rating + 1)).join('<i class="fa fa-star"></i>');
//       var halfStar = ((rating % 1) !== 0) ? '<i class="fa fa-star-half-empty"></i>' : '';
//       var noStar = new Array(Math.floor(numStars + 1 - rating)).join('<i class="fa fa-star-o"></i>');
//       $('.stars').html(fullStar + halfStar + noStar);
//     });
//   }
//
//   $('.stars').stars();
//
// });
