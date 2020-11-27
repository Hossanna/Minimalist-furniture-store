$("document").ready(function () {
  $("button").click(function () {
    //insert code here
    if ($("button").text() == "X") {
      $("button").text("+");
    } else {
      $("button").text("X");
    }
    $("li").toggle("slow");
  });
});
