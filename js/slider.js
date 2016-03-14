/**
 * Created by user on 14.03.2016.
 */
function ChangeSlideFromTo(val) {
    $(".slide").fadeOut(1000);
    $(".slide").eq(val).fadeIn(1000);
}

var x = $("input:checked").index("[type = radio]") + 1;

$("[type = radio]").click(function () {
        ChangeSlideFromTo($(this).index("[type = radio]"));
        x = $(this).index("[type = radio]");
        if (x != $("[type = radio]").length - 1) {
            x++;
        }
        else {
            x = 0
        }
});

var cycle = setInterval(function () {
    $("[type = radio]").eq(x).prop("checked", true);

    ChangeSlideFromTo(x);
    x++;

    if (x > $("[type = radio]").length - 1) {

        x = 0;
    }
}, 10000)