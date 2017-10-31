
$(function () {
    var player = $('#player');
    var playerElmentDisplacement = $player.width() / 2;

    function movePlayer(event) {

        $player.css({
            "top": (event.clientY - playerElmentDisplacement) + "px",
            "left": (event.clientX - playerElmentDisplacement) + "px"

        });
    }





    function stopMoving() {
        body.removeEventListener('click', movePlayer);
    }

    var body = document.querySelector('body');
    var stopMovingButton = document.querySelector('#stop-moving');

    $body.on('click', movePlayer);
    stopMovingButton.addEventListener('click', stopMoving);
});