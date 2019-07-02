/**
 * Handles newsletter form submission
 */
$(function() {
  $('.newsletter__form--desktop').submit(onNewsletterSubmit)
  $('.newsletter__form--mobile').submit(onNewsletterSubmit);

  $('.modal__signup form').submit(onSignupSubmit);
})

function onNewsletterSubmit(e) {
  e.preventDefault();

  // Hide form
  $('.newsletter form').addClass('hide');

  // Show confirmation content
  $('.newsletter p').addClass('show');
}

function onSignupSubmit(e) {
  e.preventDefault();

  // Hide form
  $('.modal__signup form').addClass('hide');

  // Show confirmation content
  $('.modal__signup  p').addClass('show');
}

