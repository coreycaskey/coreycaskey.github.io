const scrollReveal = ScrollReveal({
  reset: false,
  duration: 500,
  easing: "ease-out",
  distance: "20px",
  viewFactor: 0.2,
});

function addOverlayReveals() {
  scrollReveal.reveal("#overlay-section .name", {
    afterReveal: () => {
      scrollReveal.reveal("#overlay-section .job-description", {
        delay: 750,
        origin: "right",
        distance: "10px",
        afterReveal: () => {
          scrollReveal.reveal("#overlay-section .scroll-container", {
            delay: 1750,
            origin: "top",
            distance: "10px",
            afterReveal: () => {
              $("#overlay-section .scroll-button").css("cursor", "pointer");
            },
          });
        },
      });
    },
  });
}

$(function () {
  $("#overlay-section").addClass("hide");
  // $("body").css("overflow", "hidden"); // temp prevent scroll

  // $("body").css('overflow', 'hidden');
  // addOverlayReveals();

  //
  revealNavbarLinks();
  addNavbarClickEvents();

  scrollReveal.reveal("#skills-section", {
    origin: "bottom",
    viewFactor: 0.4,
    afterReveal: () => {
      setTimeout(() => {
        $("#skills-section #skill-rating--angular").addClass(
          "skill-rating--100"
        );
        $("#skills-section #skill-rating--react").addClass("skill-rating--25");
        $("#skills-section #skill-rating--html").addClass("skill-rating--100");
        $("#skills-section #skill-rating--css").addClass("skill-rating--75");
        $("#skills-section #skill-rating--javascript").addClass(
          "skill-rating--75"
        );
        $("#skills-section #skill-rating--typescript").addClass(
          "skill-rating--75"
        );
        $("#skills-section #skill-rating--python").addClass(
          "skill-rating--100"
        );
        $("#skills-section #skill-rating--java").addClass("skill-rating--75");
        $("#skills-section #skill-rating--sql").addClass("skill-rating--50");
      }, 250);
    },

    // skill-rating--{{ item.rating_value }}
  });

  $("#scroll-button").on("click", function (e) {
    e.preventDefault();

    $("#scroll-button").addClass("clicked");

    loadNavbarLinks(scrollReveal);
  });

  $("#contact-section .contact-form").submit(function (e) {
    e.preventDefault();

    const toEmail = $(".contact-form").attr("action");
    const firstName = $("#first-name-input").val();
    const lastName = $("#last-name-input").val();
    const fromEmail = $("#email-input").val();
    const subject = $("#subject-input").val();

    let emailBody = $("#email-body-input").val();

    emailBody +=
      "%0D%0A%0D%0A--------------------------------------------------%0D%0A";
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
    origin: "top",
  });

  scrollReveal.reveal("#contact-section .description-container", {
    origin: "right",
  });

  scrollReveal.reveal("#contact-section .contact-form", {
    origin: "left",
  });

  scrollReveal.reveal("#projects-section .header", {
    origin: "top",
  });

  $("#projects-section .project-container").each((_, item) => {
    scrollReveal.reveal(".project-container", {
      origin: "left",
      distance: "10px",
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

  $(window).on("scroll", function (e) {
    if ($("#experience-section .modal-container").css("display") === "flex") {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  const experienceOneDescription = $("#experience-one--description");
  const experienceTwoDescription = $("#experience-two--description");
  const experienceThreeDescription = $("#experience-three--description");

  // experienceOneDescription.addClass('hide');
  // experienceTwoDescription.addClass('hide');
  // experienceThreeDescription.addClass('hide');

  const experienceOne = $("#experience-1 .folder-icon");
  const experienceTwo = $("#experience-2 .folder-icon");
  const experienceThree = $("#experience-3 .folder-icon");
  const experienceFour = $("#experience-4 .folder-icon");

  const experienceOneIcon = $("#experience-1 .folder-icon");
  const experienceTwoIcon = $("#experience-2 .folder-icon");
  const experienceThreeIcon = $("#experience-3 .folder-icon");
  const experienceFourIcon = $("#experience-4 .folder-icon");

  // $(".close-modal-icon").click(() => {
  //   $("#experience-section .modal-container").css({ display: "none" });
  //   $("body").css("overflow", "initial");
  //   experienceOneIcon.removeClass("opened");
  //   experienceTwoIcon.removeClass("opened");
  //   experienceThreeIcon.removeClass("opened");
  //   experienceFourIcon.removeClass("opened");

  //   $(".modal-container .experience-description").each((_, item) => {
  //     $(item).addClass("hide");
  //   });
  // });

  $("#experience-section .modal-container").on("click", (e) => {
    const modalContent = $("#experience-section .experience-description:not(.hide)");
    const modalContentTop = modalContent.offset().top;
    const modalContentBottom = modalContentTop + modalContent.outerHeight();
    const modalContentLeft = modalContent.offset().left;
    const modalContentRight = modalContentLeft + modalContent.outerWidth();

    const closeButton = $("#experience-section .experience-description:not(.hide) .close-modal-icon");
    const closeButtonTop = closeButton.offset().top;
    const closeButtonBottom = closeButtonTop + closeButton.outerHeight();
    const closeButtonLeft = closeButton.offset().left;
    const closeButtonRight = closeButtonLeft + closeButton.outerWidth();

    const didClickOuterModal =
      e.pageX < modalContentLeft ||
      e.pageX > modalContentRight ||
      e.pageY < modalContentTop ||
      e.pageY > modalContentBottom;

    const didClickCloseButton =
      e.pageX > closeButtonLeft &&
      e.pageX < closeButtonRight &&
      e.pageY > closeButtonTop &&
      e.pageY < closeButtonBottom;

    if (didClickOuterModal || didClickCloseButton) {
      closeModal(experienceOneIcon, experienceTwoIcon, experienceThreeIcon, experienceFourIcon);
    }
  });

  experienceOne.on("click", function (e) {
    e.preventDefault();

    // this may not be needed ...
    if (experienceOneIcon.hasClass("opened")) {
      $("body").css("overflow", "initial");
    } else {
      experienceOneIcon.addClass("opened");
      $("#experience-section .modal-container").css({ display: "flex" });
      $("#experience-1--description").removeClass("hide")
      $("body").css("overflow", "hidden");
    }
  });

  experienceTwo.on("click", function (e) {
    e.preventDefault();

    // this may not be needed ...
    if (experienceTwoIcon.hasClass("opened")) {
      $("body").css("overflow", "initial");
    } else {
      experienceTwoIcon.addClass("opened");
      $("#experience-section .modal-container").css({ display: "flex" });
      $("#experience-2--description").removeClass("hide")
      $("body").css("overflow", "hidden");
    }
  });

  experienceThree.on("click", function (e) {
    e.preventDefault();

    // this may not be needed ...
    if (experienceThreeIcon.hasClass("opened")) {
      $("body").css("overflow", "initial");
    } else {
      experienceThreeIcon.addClass("opened");
      $("#experience-section .modal-container").css({ display: "flex" });
      $("#experience-3--description").removeClass("hide")
      $("body").css("overflow", "hidden");
    }
  });

  experienceFour.on("click", function (e) {
    e.preventDefault();

    // this may not be needed ...
    if (experienceFourIcon.hasClass("opened")) {
      $("body").css("overflow", "initial");
    } else {
      experienceFourIcon.addClass("opened");
      $("#experience-section .modal-container").css({ display: "flex" });
      $("#experience-4--description").removeClass("hide")
      $("body").css("overflow", "hidden");
    }
  });
});

function revealNavbarLinks() {
  scrollReveal.reveal("#sticky-nav", { origin: "top", cleanup: true });

  let delay = 500;

  if ($(window).width() >= 768) {
    // for tablet or desktop, cascade reveal navbar links
    $(".navbar-link-container").each((_, item) => {
      scrollReveal.reveal(item, {
        origin: "top",
        delay: delay,
        cleanup: true
      });

      delay += 100;
    });
  } else {
    // for mobile, cascade hamburger menu bars
    $(".dropdown-menu-bar-container").each((_, item) => {
      scrollReveal.reveal(item, {
        origin: "right",
        delay: delay,
        cleanup: true
      });

      delay += 100;
    });
  }

  delay += 500;

  // reveal intro after navbar has been revealed
  scrollReveal.reveal("#intro-section", {
    origin: "left",
    delay: delay,
    afterReveal: (el) => {
      setTimeout(() => {
        $(".description-container span").addClass("shown");
        $(".img-mask").addClass("draw");
        $("body").css("overflow", "initial"); // allow scrolling again
      }, 250);
    },
  });

  // window resize listener for when dropdown is opened and change size ...

  // $(window).resize(() => {
  //   if ($(window).width() >= 768) {
  //     console.log("greater");
  //     $("#sticky-nav .links-container")
  //       .removeClass("links-container--mobile")
  //       .addClass("links-container--non-mobile");
  //   } else {
  //     console.log("less");
  //     $("#sticky-nav .links-container")
  //       .removeClass("links-container--non-mobile")
  //       .addClass("links-container--mobile");
  //   }
  // });
}

function addNavbarClickEvents() {
  // tablet and desktop navbar links
  $(".navbar-link:not(.navbar-btn)").each((_, item) => {
    const scrollSection = $(item).attr("id").split("--")[1];
    const sectionPos = $(`#${scrollSection}-section`).offset().top;
    const offsetHeight = sectionPos - $("#sticky-nav").outerHeight();

    $(item).click(() => {
      $("html, body").animate({ scrollTop: offsetHeight }, 500);
    });
  });

  // mobile hamburger menu
  $("#dropdown-menu").click((e) => {
    $("#dropdown-menu").toggleClass("opened");
    $("#links-container").toggleClass("opened");
  });
}

function closeModal(experienceOneIcon, experienceTwoIcon, experienceThreeIcon, experienceFourIcon) {
  $("#experience-section .modal-container").css({ display: "none" });
  $("body").css("overflow", "initial");
  experienceOneIcon.removeClass("opened");
  experienceTwoIcon.removeClass("opened");
  experienceThreeIcon.removeClass("opened");
  experienceFourIcon.removeClass("opened");

  $(".modal-container .experience-description").each((_, item) => {
    $(item).addClass("hide");
  });
}
