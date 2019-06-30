$(document).ready(function() {
    $(".ball").map(function(index, ball){
        initiateBall($(ball));
     });

    setInterval(function() {
        $(".ball").map(function(index, ball){
            initiateBall($(ball));
         });
    }, 10000);
});

function initiateBall(ball) {
    if (isElementInViewport(ball.parent())) {
        moveBall(ball);
        // console.log("in view");
    }

}

function isElementInViewport (el) {

    // jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    // get position attributes
    var rect = el.getBoundingClientRect();

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
