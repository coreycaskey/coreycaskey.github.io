const scrollReveal = ScrollReveal({
  reset: false,
  duration: 500,
  easing: "ease-out",
  distance: "20px",
  viewFactor: 0.5,
});

let delay = 0;

$(window).on("load", () => {
  $(window).on("resize", () => {
    if ($(window).width() >= 768) {
      // close dropdown menu (if open) when transitioning to tablet/desktop size
      if ($(".dropdown-menu-container").hasClass("dropdown-menu-container--opened")) {
        $(".dropdown-menu-container").removeClass("dropdown-menu-container--opened");
        $(".nav-links-container").removeClass("nav-links-container--opened");
      }
    }
  });

  $(window).on("click", (e) => {
    // close dropdown (if open) if clicking outside of it
    if ($(".dropdown-menu-container").hasClass("dropdown-menu-container--opened")) {
      const dropdownMenu = $(".nav-links-container--opened");
      const dropdownMenuTop = dropdownMenu.offset().top;
      const dropdownMenuBottom = dropdownMenuTop + dropdownMenu.outerHeight();

      if (e.pageY > dropdownMenuBottom) {
        $(".dropdown-menu-container").removeClass("dropdown-menu-container--opened");
        $(".nav-links-container").removeClass("nav-links-container--opened");
      }
    }
  });

  revealNavbar();
  revealIntroSection();
  revealSkillsSection();
  revealExperienceSection();
  revealProjectsSection();
  revealContactSection();
});

function revealNavbar() {
  scrollReveal.reveal(".nav", { origin: "top", cleanup: true });

  delay += 500;

  if ($(window).width() >= 768) {
    // for tablet/desktop, cascade navbar links
    $(".internal-link-container").each((_, item) => {
      scrollReveal.reveal(item, {
        origin: "top",
        delay: delay,
        cleanup: true,
      });

      delay += 100;
    });

    scrollReveal.reveal(".external-link-container", {
      origin: "top",
      delay: delay,
      cleanup: true,
    });
  } else {
    // for mobile, cascade hamburger menu bars
    $(".dropdown-menu-container__bar").each((_, item) => {
      scrollReveal.reveal(item, {
        origin: "right",
        delay: delay,
        cleanup: true,
      });

      delay += 100;
    });
  }

  addNavbarHandlers();
}

function addNavbarHandlers() {
  $(".internal-link-container__link").each((_, item) => {
    $(item).click(() => scrollToSection(item));
  });

  $(".dropdown-menu-container").click(() => {
    $(".dropdown-menu-container").toggleClass("dropdown-menu-container--opened");
    $(".nav-links-container").toggleClass("nav-links-container--opened");
  });
}

function scrollToSection(item) {
  const scrollSectionPrefix = $(item).attr("class").split(" ")[1].split("--")[1];
  const sectionPos = $(`.${scrollSectionPrefix}-section`).offset().top;
  const offsetHeight = sectionPos - $(".nav").outerHeight();

  if ($(".dropdown-menu-container").hasClass("dropdown-menu-container--opened")) {
    $(".dropdown-menu-container").removeClass("dropdown-menu-container--opened");
    $(".nav-links-container").removeClass("nav-links-container--opened");
  }

  $("html, body").animate({ scrollTop: offsetHeight }, 500);
}

function revealIntroSection() {
  delay += 500;

  scrollReveal.reveal(".intro-section", {
    origin: "left",
    delay: delay,
    afterReveal: () => {
      setTimeout(() => {
        $(".description-container__description span").addClass("description-container__description--underline");
        $(".img-container__mask").addClass("img-container__mask--border");
      }, 250);
    },
    cleanup: true,
  });
}

function revealSkillsSection() {
  scrollReveal.reveal(".skills-inner-container__header", { origin: "right", cleanup: true, });

  scrollReveal.reveal(".skills-content-container", {
    origin: "bottom",
    afterReveal: () => {
      setTimeout(() => {
        $(".skills-section .skills-bar-container__rating--angular").addClass("skills-bar-container__rating--100");
        $(".skills-section .skills-bar-container__rating--react").addClass("skills-bar-container__rating--75");
        $(".skills-section .skills-bar-container__rating--html").addClass("skills-bar-container__rating--100");
        $(".skills-section .skills-bar-container__rating--css").addClass("skills-bar-container__rating--75");
        $(".skills-section .skills-bar-container__rating--javascript").addClass("skills-bar-container__rating--75");
        $(".skills-section .skills-bar-container__rating--typescript").addClass("skills-bar-container__rating--75");
        $(".skills-section .skills-bar-container__rating--python").addClass("skills-bar-container__rating--100");
        $(".skills-section .skills-bar-container__rating--java").addClass("skills-bar-container__rating--75");
        $(".skills-section .skills-bar-container__rating--sql").addClass("skills-bar-container__rating--50");
      }, 250);
    },
    cleanup: true,
  });
}

function revealExperienceSection() {
  scrollReveal.reveal(".experience-inner-container__header", { origin: "top", cleanup: true, });
  scrollReveal.reveal(".experience-inner-container__subheader", { origin: "bottom", cleanup: true, });

  $(".experience-container").each((_, item) => {
    scrollReveal.reveal(item, {
      origin: "left",
      afterReveal: () => $(".experience-section").css({ transform: "none" }),
      cleanup: true,
    });
  });

  addExperienceSectionHandlers();
}

function addExperienceSectionHandlers() {
  $(".experience-container__icon").each((index, item) => {
    $(item).on("click", (e) => openModalHandler(e, $(item), index + 1));
  });

  $(".experience-section .modal-container").on("click", (e) => {
    const modalContent = $(".modal-experience-container--opened");
    const modalContentTop = modalContent.offset().top;
    const modalContentBottom = modalContentTop + modalContent.outerHeight();
    const modalContentLeft = modalContent.offset().left;
    const modalContentRight = modalContentLeft + modalContent.outerWidth();

    const closeButton = $(".modal-experience-container--opened .modal-experience-container__close-icon");
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
      closeModal();
    }
  });
}

function openModalHandler(e, iconElement, id) {
  e.preventDefault();

  if (!iconElement.hasClass("experience-container__icon--opened")) {
    iconElement.addClass("experience-container__icon--opened");
    $(".experience-section .modal-container").css({ display: "flex" });
    $(`.modal-experience-container--${id}`).addClass("modal-experience-container--opened");
    $("body").css("overflow", "hidden");
  }
}

function closeModal() {
  $(".experience-section .modal-container").css({ display: "none" });
  $("body").css("overflow", "initial");

  $(".experience-container__icon").each((_, item) => {
    $(item).removeClass("experience-container__icon--opened");
  });

  $(".modal-container .modal-experience-container").each((_, item) => {
    $(item).removeClass("modal-experience-container--opened");
  });
}

function revealProjectsSection() {
  scrollReveal.reveal(".projects-inner-container__header", { origin: "bottom", cleanup: true, });

  $(".project-card-container").each((_, item) => {
    scrollReveal.reveal(item, { origin: "left", cleanup: true, });
  });
}

function revealContactSection() {
  scrollReveal.reveal(".contact-inner-container__header", { origin: "top", cleanup: true, });
  scrollReveal.reveal(".contact-description-container", { origin: "right", cleanup: true, });
  scrollReveal.reveal(".contact-form-container", { origin: "left", cleanup: true, });

  addContactFormSubmitHandler();
}

function addContactFormSubmitHandler() {
  $(".contact-section .contact-form").submit(function (e) {
    e.preventDefault();

    const toEmail = $(".contact-form").attr("action");
    const firstName = $(".contact-form__input--first-name").val();
    const lastName = $(".contact-form__input--last-name").val();
    const fromEmail = $(".contact-form__input--email").val();
    const subject = $(".contact-form__input--subject").val();

    let emailBody = $(".contact-form__textarea--body").val();

    emailBody +=
      "%0D%0A%0D%0A--------------------------------------------------%0D%0A";
    emailBody += "%0D%0AFirst Name: " + firstName;
    emailBody += "%0D%0ALast Name: " + lastName;
    emailBody += "%0D%0AFrom: " + fromEmail;

    $(".contact-form__input--first-name").val("");
    $(".contact-form__input--last-name").val("");
    $(".contact-form__input--email").val("");
    $(".contact-form__input--subject").val("");
    $(".contact-form__textarea--body").val("");

    window.location = toEmail + "?subject=" + subject + "&body=" + emailBody;
  });
}
