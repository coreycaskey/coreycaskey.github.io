$(function () {
  // $("body").css('overflow', 'hidden');

  // overlay scroll reveal

  const scrollReveal = ScrollReveal({
    reset: false,
    duration: 500,
    easing: 'ease-in',
    distance: "20px",
    viewFactor: 0.2
  });

  scrollReveal.destroy();

  scrollReveal.reveal("#overlay-section .name");

  scrollReveal.reveal("#overlay-section .job-description", {
    delay: 750,
    origin: "right",
    distance: "10px",
  });

  scrollReveal.reveal("#overlay-section .scroll-container", {
    delay: 1750,
    origin: "top",
    distance: "10px",
  });

  setTimeout(() => {
    $("#overlay-section .scroll-button").css("cursor", "pointer");
  }, 1750);

  loadNavbarLinks(scrollReveal);


  $("#scroll-button").on("click", function (e) {
    e.preventDefault();

    $("#scroll-button").addClass("clicked");

    loadNavbarLinks(scrollReveal);
  });

  $("#contact-section .contact-form").submit(function(e) {
    e.preventDefault();

    const toEmail = $(".contact-form").attr('action');
    const firstName = $("#first-name-input").val();
    const lastName = $("#last-name-input").val();
    const fromEmail = $("#email-input").val();
    const subject = $("#subject-input").val();

    let emailBody = $("#email-body-input").val();

    emailBody += "%0D%0A%0D%0A--------------------------------------------------%0D%0A";
    emailBody += "%0D%0AFirst Name: " + firstName;
    emailBody += "%0D%0ALast Name: " + lastName;
    emailBody += "%0D%0AFrom: " + fromEmail;

    $("#first-name-input").val("");
    $("#last-name-input").val("");
    $("#email-input").val("");
    $("#subject-input").val("");
    $("#email-body-input").val("");

    window.location = toEmail + "?subject=" + subject + "&body=" + emailBody;
  });

  // scroll reveals

  scrollReveal.reveal("#contact-section .header", {
    origin: "top"
  });

  scrollReveal.reveal("#contact-section .description-container", {
    origin: "right"
  });

  scrollReveal.reveal("#contact-section .contact-form", {
    origin: "left",
  });

  scrollReveal.reveal("#projects-section .header", {
    origin: "top"
  });


  $("#projects-section .project-container").each((_, item) => {
    scrollReveal.reveal(".project-container", {
      origin: "left",
      distance: "10px"
    });
  });

  // const experienceOneDescription = $('#click-one');
  // const experienceTwoDescription = $('#click-two');
  // const experienceThreeDescription = $('#click-three');

  // // console.log(experienceOneDescription);

  // experienceOneDescription.on("click", function (e) {
  //   e.preventDefault();

  //   // $("#click-two-content").css("display", "none");
  //   // $("#click-three-content").css("display", "none");

  //   $("#click-two-content").addClass("hide");
  //   $("#click-three-content").addClass("hide");

  //   if (!$("#click-one-content").hasClass("hide")) {
  //     console.log("in here");
  //     $("#click-one-content").addClass("hide");
  //   } else {
  //     $("#click-one-content").removeClass("hide");
  //   }
  // });

  // experienceTwoDescription.on("click", function (e) {
  //   e.preventDefault();

  //   $("#click-one-content").css("display", "none");
  //   $("#click-three-content").css("display", "none");

  //   if ($("#click-two-content").css("display") === "block") {
  //     $("#click-two-content").css("display", "none");
  //   } else {
  //     $("#click-two-content").css("display", "block");
  //   }
  // });

  // experienceThreeDescription.on("click", function (e) {
  //   e.preventDefault();

  //   $("#click-one-content").css("display", "none");
  //   $("#click-two-content").css("display", "none");

  //   if ($("#click-three-content").css("display") === "block") {
  //     $("#click-three-content").css("display", "none");
  //   } else {
  //     $("#click-three-content").css("display", "block");
  //   }
  // });

  // add navbar links
  // eventually loop over and add scroll to dynamically

  $("#navbar-link--about").on("click", function (e) {
    console.log("about");
  });

  $("#navbar-link--skills").on("click", function (e) {
    console.log("skills");
  });

  $("#navbar-link--experience").on("click", function (e) {
    console.log("experience");
  });

  $("#navbar-link--projects").on("click", function (e) {
    console.log("projects");
  });

  $("#navbar-link--interests").on("click", function (e) {
    console.log("interests");
  });

  $("#navbar-link--contact").on("click", function (e) {
    console.log("contact");
  });

  $("#dropdown-menu").on("click", function () {
    $(this).toggleClass("opened");
    $("#dropdown-menu-container").toggleClass('opened', 500);
    // console.log("menu");
  });

  // $(window).on("scroll", function () {
  //   console.log($(this).scrollTop());
  //   if ($(this).scrollTop())
  // });

  //   burgerMenu.addEventListener('click', function(e) {
//     e.preventDefault();

//     console.log('clicked');
//     burgerMenu.classList.toggle('opened');
//     test.classList.toggle('show');
//   });






  const experienceOneDescription = $('#experience-one--description');
  const experienceTwoDescription = $('#experience-two--description');
  const experienceThreeDescription = $('#experience-three--description');

  // experienceOneDescription.addClass('hide');
  // experienceTwoDescription.addClass('hide');
  // experienceThreeDescription.addClass('hide');

  const experienceOne = $('#experience-one');
  const experienceTwo = $('#experience-two');
  const experienceThree = $('#experience-three');

  const experienceOneIcon = $('#experience-one .folder-icon');
  const experienceTwoIcon = $('#experience-two .folder-icon');
  const experienceThreeIcon = $('#experience-three .folder-icon');

  experienceOne.on('click', function(e) {
    e.preventDefault();

    if (experienceOneDescription.hasClass('hide')) {

      // experienceOneDescription.style.maxHeight = experienceOneDescription.scrollHeight + 'px';
      experienceOneDescription.css("maxHeight", "auto");


      experienceTwoDescription.addClass('hide');
      experienceThreeDescription.addClass('hide');

      experienceTwoDescription.css("maxHeight", null);
      experienceThreeDescription.css("maxHeight", null);

      experienceOneIcon.addClass('opened');
      experienceTwoIcon.removeClass('opened');
      experienceThreeIcon.removeClass('opened');

      experienceOneDescription.removeClass('hide');
    }
    else {
      experienceOneDescription.addClass('hide');
      experienceOneIcon.removeClass('opened');

      experienceOneDescription.css("maxHeight", null);
    }
  });

  experienceTwo.on('click', function(e) {
    e.preventDefault();

    if (experienceTwoDescription.hasClass('hide')) {

      // experienceOneDescription.style.maxHeight = experienceOneDescription.scrollHeight + 'px';
      // experienceOneDescription.style.maxHeight = "auto";


      experienceOneDescription.addClass('hide');
      experienceThreeDescription.addClass('hide');

      experienceOneDescription.css("maxHeight", null);
      experienceThreeDescription.css("maxHeight", null);

      experienceOneIcon.removeClass('opened');
      experienceTwoIcon.addClass('opened');
      experienceThreeIcon.removeClass('opened');

      experienceTwoDescription.removeClass('hide');
    }
    else {
      experienceTwoDescription.addClass('hide');
      experienceTwoIcon.removeClass('opened');

      experienceTwoDescription.css("maxHeight", null);
    }
  });

  experienceThree.on('click', function(e) {
    e.preventDefault();

    if (experienceThreeDescription.hasClass('hide')) {

      // experienceOneDescription.style.maxHeight = experienceOneDescription.scrollHeight + 'px';
      // experienceOneDescription.style.maxHeight = "auto";


      experienceOneDescription.addClass('hide');
      experienceTwoDescription.addClass('hide');

      experienceOneDescription.css("maxHeight", null);
      experienceTwoDescription.css("maxHeight", null);

      experienceOneIcon.removeClass('opened');
      experienceTwoIcon.removeClass('opened');
      experienceThreeIcon.addClass('opened');

      experienceThreeDescription.removeClass('hide');
    }
    else {
      experienceThreeDescription.addClass('hide');
      experienceThreeIcon.removeClass('opened');

      experienceThreeDescription.css("maxHeight", null);
    }
  });
});


function loadNavbarLinks(scrollReveal) {
  $("#overlay-section").addClass("hide");
  $("body").css("overflow", "initial");

  let delay = 1250;

  // scrollReveal.reveal("#site-navigation a", {
  //   origin: "top",
  //   delay: delay
  // });


  scrollReveal.reveal("#intro-section", {
    origin: "top",
    delay: delay
  });

  delay += 500

  // $("#navigation-section .internal-links-container a").each((_, item) => {
  //   const elementName = "#navigation-section #" + $(item).attr('id');
  //   scrollReveal.reveal(elementName, {
  //     origin: "top",
  //     delay: delay,
  //     duration: 500
  //   });

  //   delay += 100;
  // });

  // scrollReveal.reveal("#navigation-section .external-links-container a", {
  //   origin: "top",
  //   delay: delay
  // });
}



// $(document).ready(function() {
//   document.reset();
//   const collapseBtn = document.getElementById('collapse-link');
//   const overlay = document.getElementById('site-overlay--collapsible');
//   const body = document.getElementsByTagName('body');

//   const burgerMenu = document.getElementById('hamburger-menu');
//   const test = document.getElementById('dropdown');

//   overlay.classList.remove('hide');

//   // if (overlay.classList.contains('hide')) {
//   //   document.body.style.height = 'initial';
//   //   document.body.style.overflow = 'initial';
//   // }
//   // else {
//   //   document.body.style.height = '100%';
//   //   document.body.style.overflow = 'hidden';
//   // }

// collapseBtn.addEventListener('click', function(e) {
//   e.preventDefault();

//   overlay.classList.add('hide');
//   // document.body.style.height = 'initial';
//   // document.body.style.overflow = 'initial';
// });

//   burgerMenu.addEventListener('click', function(e) {
//     e.preventDefault();

//     console.log('clicked');
//     burgerMenu.classList.toggle('opened');
//     test.classList.toggle('show');
//   });

//   // if opened dropdown and change screen size, close it
// })

