$(document).ready(function () {
    $(".candles").click(function () {
        // Animate the flames and text as before
        $(".flame").animate({ "opacity": 0 }, "fast");
        $(".flame2").animate({ "opacity": 0 }, "fast");
        $(".flame3").animate({ "opacity": 0 }, "fast");
        $(".text").animate({ "top": -90, "opacity": 1 }, "fast");

        // Remove the candles and cake elements after a delay
        setTimeout(function () {
            $(".candles").remove();
            $(".cake").remove();

            // Display a new picture after removing the candles and cake
            $("body").html('<img src="assets/moh.jpg" alt="Celebration Image">');
        }, 1500); // Delay in milliseconds (500ms = 0.5 seconds)
    });
});