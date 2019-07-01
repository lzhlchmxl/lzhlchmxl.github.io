/**
 * Opens and closes modal on certain element click
 */
$(function() {
  $('*[modal]').click(toggleModal);
  $('.modal__backdrop').click(toggleModal);
})

// Toggle Modal
function toggleModal(e) {
  e.preventDefault();

  // Determine if the modal is currently open
  if(!$('.modal[open]').length) {
    // Open the modal
    $('.modal').attr('open', '');

    // Scroll lock the body
    $('body').addClass('modal--open');

    // Show the appropriate modal section
    $(`.modal__${$(e.currentTarget).attr('modal')}`).addClass('show');
  } else {
    // Close the modal
    $('.modal').attr('open', null);

    // Remove body scroll lock
    $('body').removeClass('modal--open');

    // Hide modal containers
    $('.modal .show').removeClass('show');
  }
}
