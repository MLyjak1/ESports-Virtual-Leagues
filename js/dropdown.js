// dropdown event

$(".dropdown-console .selected").on("click", () =>
  $(".dropdown-console > .dropdown-content").slideToggle(),
);

$(".dropdown-console .select-new").on("click", function () {
  let img = $(this).children("img").attr("src");
  let paragraph = $(this).children("p").html();
  const selected = $(".dropdown-console > .selected");
  selected.children("p").text(paragraph);
  selected.children("img").attr("src", img);
  $(".dropdown-content").hide();
});

$(".dropdown-news .selected").on("click", () =>
  $(".dropdown-content").slideToggle(),
);

$(".dropdown-news .select-new").on("click", function () {
  let paragraph = $(this).children("p").html();
  const selected = $(".dropdown-news .selected");
  selected.children("p").text(paragraph);
  $(".dropdown-news .dropdown-content").hide();
});

$(".dropdown-topic .selected").on("click", () =>
  $(".dropdown-topic > .dropdown-content").slideToggle(),
);

$(".dropdown-topic .select-new").on("click", function () {
  let paragraph = $(this).children("p").html();
  const selected = $(".dropdown-topic > .selected");
  selected.children("p").text(paragraph);
  $(".dropdown-topic > .dropdown-content").hide();
});