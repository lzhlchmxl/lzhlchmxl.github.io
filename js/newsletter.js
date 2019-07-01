/**
 * Handles newsletter form submission
 */
$(function() {
  $('.newsletter__form--desktop').submit(onNewsletterSubmit)
  $('.newsletter__form--mobile').submit(onNewsletterSubmit);
})


function onNewsletterSubmit(e) {
  e.preventDefault();

  // Hide form
  $('.newsletter form').addClass('hide');

  // Show confirmation content
  $('.newsletter p').addClass('show');
}
