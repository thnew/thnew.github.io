$(".match__img__background-circle").each(function(index, value) {
    var elem = $(value);

    var color = "#66C9B7";

    if(elem.hasClass("match__img__background-circle-blue"))
    {
        color = "#79A6BD";
    }

    var p = elem.data("percent");
    var pDeg = Math.round(360 * p / 100);

    if(p <= 50)
    {
        var p1 = 90;
        var p2 = -(90 - pDeg);

        var setBackgroundColor = false;
    }
    else
    {
        var p1 = 90 + (pDeg - 180);
        var p2 = 90;

        var setBackgroundColor = true;
    }

    var circle1 = "linear-gradient(" + p1 + "deg, transparent 50%, " + color + " 50%)";
    var circle2 = "linear-gradient(" + p2 + "deg, white 50%, transparent 50%)";

    if(p <= 50)
    {
        var background = circle2 + "," + circle1;
    }
    else
    {
        var background = circle1 + "," + circle2;
    }

    elem.css("background-image", background);

    if(setBackgroundColor)
    {
        elem.css("background-color", color);
    }
});