// jquery for tooltip- moved from index.html
{/* <script>
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
</script> */}

// jquery for carousel play/pause buttons- moved from index.html
{/* <script>
    $(function() {
        $(".carousel").carousel( { interval: 2000 } );
        // sets cycle interval to 2000 ms
        $("#carouselPause").click(function(){
            // when an element with id of carouselPause is clicked, the function will run this code block...
            $(".carousel").carousel("pause");
            // pauses carousel when pause button clicked
        });
        $("#carouselPlay").click(function(){
            $(".carousel").carousel("cycle");
        });
    });
</script> */}

// updated jquery for one carousel button
$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        // checks if child of i element has class of fa-pause
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            // removes font awesome pause icon
            $("#carouselButton").children("i").addClass("fa-play");
            // adds font awesome play icon
        } else {
            $(".carousel").carousel("cycle");
            // if button that doesn't have class of fa-pause is clicked, the carousel will start cycling again
            $("#carouselButton").children("i").removeClass("fa-play");
            // remove font awesome play icon
            $("#carouselButton").children("i").addClass("fa-pause");
            // add font awesome pause icon
        }
    });
});