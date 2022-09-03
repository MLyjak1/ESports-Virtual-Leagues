$(".slided-content").css({ display: "none" });

$(".board-links a").on("click", function (event) {
  event.preventDefault();
  let currentContent = $(this).attr("data-content");
  $(".board-links a").removeClass("active-boardlink");
  $(this).addClass("active-boardlink");
  //   console.log(currentContent);
  $(".slided-content").css({ display: "none" });
  $(`#${currentContent}`).show();
});
