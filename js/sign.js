$(".welcome-content").hide();

$("#goRegistration").on("click", (event) => {
  $("#signIn").hide();
  $("#registration").show();
  event.preventDefault();
});

$("#goSignup").on("click", (event) => {
  $("#registration").hide();
  $("#signIn").show();
  event.preventDefault();
});

$("#sign-up-button").on("click", (event) => {
  event.preventDefault();
  $("#registration").hide();
  $(".welcome-content").show();
});
