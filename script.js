document.addEventListener("DOMContentLoaded", () => {
  console.log("Engineering Portfolio loaded.");

  //scrolling
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    sections.forEach(section => {
      //offset adjustment
      if (
        scrollPos >= section.offsetTop - 60 &&
        scrollPos < section.offsetTop + section.offsetHeight - 60
      ) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  //may be useful later
  // const hamburger = document.querySelector(".hamburger");
  // const navMenu = document.querySelector("nav ul");
  // if (hamburger && navMenu) {
  //   hamburger.addEventListener("click", () => {
  //     navMenu.classList.toggle("show");
  //     hamburger.classList.toggle("open");
  //   });
  // }
  

  const observerOptions = {
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const projectCards = document.querySelectorAll(".project");
  projectCards.forEach(card => {
    observer.observe(card);
  });
});
