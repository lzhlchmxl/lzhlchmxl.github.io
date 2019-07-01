$(document).ready(function(){
    triggerBalls();
    // $(".feature__item").hover(function(){
    //     $(".feature__shape", this).attr('class').split(' ')[1];
    // }, function(){});
    setInterval(function() {
        $(".ball").map(function(index, ball){
            initiateBall($(ball));
         });
    }, 5000);

    $(window).scroll(function(){
        // console.log($(window).innerHeight());

        const viewportHeight = $(window).innerHeight();
        // view port height subtract the difference between eleTop and scroll height

        let offset = $(".ball--static").length && $(".ball--static").offset().top - $(window).scrollTop();

        if (offset > viewportHeight) {
            offset = viewportHeight;
        } else if (offset < 0) {
            offset = 0;
        }  
        const viewDiff = viewportHeight - offset;
        const ratio =  $(".ball--static").parent().innerHeight() / viewportHeight -0.15;

        const moveDiff = viewDiff * ratio;

        $(".ball--static").stop().animate({"marginTop": moveDiff}, "slow" );
    });

    redrawBalls();

    $(window).resize(function() {
        redrawBalls();
    });

});


function redrawBalls() {
    $(".feature__shape--pricing").css("padding-bottom", $(".feature__shape--pricing").width());
}

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
		triggerBalls();

	}, 66);

}, false);

function triggerBalls() {
    $(".ball").map(function(index, ball){
        initiateBall($(ball));
     });

}

function initiateBall(ball) {
    if (isElementInViewport(ball.parent()[0])) {
        moveBall(ball);
    }

}

function isElementInViewport (el) {

    // get position attributes
    let rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function moveBall(ball) {
    // the returned new demension after passing old ball conatiner demensions into generater
    const newDemensions = generateNumber(ball, (ball.parent()[0].getBoundingClientRect()));

    // move the ball
    ball.css({
         transform  : `translate(${newDemensions[0]}px, ${newDemensions[1]}px)`
    })
}

function stopBall(ball) {

}

function generateNumber(ball, parameters) {

    // ball stats used to calculate the changing positions
    const diameter = ball.width();
    const initialX = parseInt(ball.css("left"));
    const initialY = parseInt(ball.css("top"));

    // container stats
    const top = parameters.top;
    const bottom = parameters.bottom;
    const right = parameters.right;
    const left = parameters.left;

    // generate a random number based on parent width/height - ball's (diameter + it's initial position)
    const newY = Math.floor(Math.random() * (bottom - top - diameter - initialY));
    const newX = Math.floor(Math.random() * (right - left - diameter - initialX));

    // the amount of x and y translate
    return [newX, newY];
}
