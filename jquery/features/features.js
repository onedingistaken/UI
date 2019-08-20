// ---------------------------------------------------
// Toggle
$("#toggle_btn").click(function () {
    // value toggles btw Hide & Show
    var value = $("#toggle_btn").attr("value") == "Hide" ? "Show" : "Hide";
    $("#toggle_msg").toggle("fast");
    $("#toggle_btn").attr("value", value);
});

$("#hide_msg").click(function () {
    $("#hide_msg").hide();
});

// ---------------------------------------------------
// Document Ready Event
// $(document).ready(function() {
//     $("#faded_msg").fadeIn("slow");
// });

// $(document).ready(function() {
//     alert("ready to go?");
// });

// ---------------------------------------------------
// Load
// $("#my-pic").on("load", function() {
//     alert("loaded!");
//  });

// ---------------------------------------------------
// Window Load
// $(window).on("load", function() {
//     alert("both iframes are loaded!")
// })

// ---------------------------------------------------
// Window Unload
$(window).on("beforeunload", function () {
    const res = comfirm("leave this page???");
    if (res) {
        return true;
    } else {
        return false;
    };
});

// ---------------------------------------------------
// All selectors
// count tags with find()
var count = $("#select_div").find("*").length;
var count = $("#select_div").find("p").length;
// alert(count);

// ID selectors
var value = $("#select_input").val();
var value = $("#select_p").text();
// alert(value);
$("#select_button").click(function () {
    alert("click me!");
});

// Element selectors
// $("#element_selector > p").text("all p");
// $("#element_selector > p:first").text("first p");
// $("#element_selector > p:last").text("last p");
$("#element_selector > p").text("all p except p2");
// $("#p2").text("right"); // equivalent to below
$("#element_selector > p:nth-child(2)").text("right");

// Submit selector
$("#submit_selector > :button").click(function () {
    // alert("click any button and alert!");
    $(this).attr("value", "click and change");
});
$("#submit_selector > :submit").click(function () {
    $(":submit").attr("value", "submit all submit buttons");
});

// Text selector
$("#text_selector > :input").focusin(function () {
    $(this).css("background-color", "lightblue");
});
$("#text_selector > :text").focusin(function () {
    $(this).css("background-color", "yellow");
});
$("#text_selector > :input").blur(function () {
    $(this).css("background-color", "#fff");
});

// CSS manipulater
$("#css_manipulater > :button").click(function () {
    $("#css_manipulater > p").css({
        "background-color": "black",
        "color": "#fff"
    });
});

// Multiple selectors
$("#multiple_selectors > input:button, #multiple_selectors > p").click(function () {
    alert("click either this will show!");
});

// This selector
$("#this_selector :button").click(function () {
    $(this).attr("disabled", true);
});

// Even/odd selectors
// $(".tb tr:odd").addClass("highlight");
$(".tb tr:odd").addClass("highlight");
$(".span_tags span:even").addClass("highlight");

// Attribute selectors
$(document).ready(function () {
    const msg = "please type your email here..";
    $("#attribute_selectors input[type='email']").attr("value", msg).focus(function () {
        if ($(this).val() == msg) {
            $(this).attr("value", "");
        }
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).attr("value", msg);
        }
    });
});

// Contains selector


// ---------------------------------------------------







// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
