/**
 * Ball scrolling parallax affect
 */
$(function() {
  let previousScrollHeight = window.pageYOffset;

  $(window).scroll(function() {
    const currentScrollHeight = window.pageYOffset;
    const scrollDiff = currentScrollHeight - previousScrollHeight;

    // Update previous scroll height
    previousScrollHeight = currentScrollHeight;

    // Update ball position based off that scroll change
    const stringTranslateY = $('.new-ball').css('transform').split(')')[0].split(',')[5];

    if(!stringTranslateY.length) {
      stringTranslateY = "0";
    }

    const currentTranslateY = parseInt(stringTranslateY.trim());

    // Update the positions of the balls
    $('.new-ball').each(function() {
      if(isInViewport($(this).parent())) {
        const speed = $(this).data('scroll');

        $(this).css('transform', `translateY(${currentTranslateY + scrollDiff * speed}px)`);
      }
    });
  })
})

/**
 * Determines if the element is within view
 */
function isInViewport(element) {
  var elementTop = $(element).offset().top;
  var elementBottom = elementTop + $(element).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  const isElementInViewport =
    elementBottom > viewportTop && elementTop < viewportBottom;

  return isElementInViewport;
}
