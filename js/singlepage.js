$(document).ready(function() {
  $(".sp-resume-content").hide();
  $(".sp-projects-content").hide();
  $(".sp-contact-content").hide();
});

$(document).ready(function() {
  $(".sp-link-home").on("click tap", function() {
    $(".sp-link-home").addClass("active");
    $(".sp-link-resume").removeClass("active");
    $(".sp-link-projects").removeClass("active");
    $(".sp-link-contact").removeClass("active");

    $(".sp-home-content").show();
    $(".sp-home-image").show();
    $(".sp-resume-content").insertAfter(".sp-home-content");
    $(".sp-projects-content").insertAfter(".sp-home-content");
    $(".sp-contact-content").insertAfter(".sp-home-content");

    $(".sp-resume-content").hide();
    $(".sp-projects-content").hide();
    $(".sp-contact-content").hide();
  });

  $(".sp-link-resume").on("click tap", function() {
    $(".sp-link-resume").addClass("active");
    $(".sp-link-home").removeClass("active");
    $(".sp-link-projects").removeClass("active");
    $(".sp-link-contact").removeClass("active");

    $(".sp-resume-content").show();
    $(".sp-home-content").insertAfter(".sp-resume-content");
    $(".sp-projects-content").insertAfter(".sp-home-content");
    $(".sp-contact-content").insertAfter(".sp-home-content");

    $(".sp-home-content").hide();
    $(".sp-projects-content").hide();
    $(".sp-contact-content").hide();
    $(".sp-home-image").hide();
  });

  $(".sp-link-projects").on("click tap", function() {
    $(".sp-link-projects").addClass("active");
    $(".sp-link-home").removeClass("active");
    $(".sp-link-resume").removeClass("active");
    $(".sp-link-contact").removeClass("active");

    $(".sp-projects-content").show();
    $(".sp-home-content").insertAfter(".sp-resume-content");
    $(".sp-resume-content").insertAfter(".sp-home-content");
    $(".sp-contact-content").insertAfter(".sp-home-content");

    $(".sp-home-content").hide();
    $(".sp-resume-content").hide();
    $(".sp-contact-content").hide();
    $(".sp-home-image").hide();
  });

  $(".sp-link-contact").on("click tap", function() {
    $(".sp-link-contact").addClass("active");
    $(".sp-link-home").removeClass("active");
    $(".sp-link-projects").removeClass("active");
    $(".sp-link-resume").removeClass("active");

    $(".sp-contact-content").show();
    $(".sp-home-content").insertAfter(".sp-resume-content");
    $(".sp-projects-content").insertAfter(".sp-home-content");
    $(".sp-resume-content").insertAfter(".sp-home-content");

    $(".sp-home-content").hide();
    $(".sp-projects-content").hide();
    $(".sp-resume-content").hide();
    $(".sp-home-image").hide();
  });

  $(".sp-sidebar-link").on("click tap", function() {
    $(".sidebar").removeClass("visible");
    $(".pusher").removeClass("dimmed");
  });
});
