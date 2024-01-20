// Accordion 

class Accordion {
  constructor(selector) {
    this.containers = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    this.containers.forEach(container => {
      const button = container.querySelector('.accordion-container__button');
      button.addEventListener("click", () => this.togglePanel(container));
    });
  }

  closePanels(group) {
    this.containers.forEach(container => {
      if (container.dataset.group === group) {
        container.classList.remove("active");
        const panel = container.querySelector('.accordion-container__panel');
        panel.classList.remove("active");
        panel.style.maxHeight = 0;
      }
    });
  }

  togglePanel(clickedContainer) {
    const group = clickedContainer.dataset.group;

    if (!clickedContainer.classList.contains("active")) {
      this.closePanels(group);
    }

    clickedContainer.classList.toggle("active");
    const panel = clickedContainer.querySelector('.accordion-container__panel');
    panel.classList.toggle("active");
    panel.style.maxHeight = panel.classList.contains("active") ? panel.scrollHeight + "px" : 0;
  }
}

const accordion1 = new Accordion(".accordion-container-1");
const accordion2 = new Accordion(".accordion-container-2");


// Navbar hamburger

class NavbarMenu {
  constructor(navMenuSelector, navTogglerSelector, htmlElementSelector) {
    this.navMenu = document.querySelector(navMenuSelector);
    this.navToggler = document.querySelector(navTogglerSelector);
    this.htmlElement = document.querySelector(htmlElementSelector);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.init();
  }

  init() {
    this.navToggler.addEventListener("click", this.toggleMenu);
  }

  toggleMenu() {
    this.navMenu.classList.toggle("active");
    this.htmlElement.classList.toggle("active");
    this.navToggler.classList.toggle("active");
  }
}

const navbarMenu = new NavbarMenu(".navbar__menu", ".navbar-toggler", "html");

// Navbar Scroll

class TransparentNavbar {
  constructor(navbarId, scrollThreshold) {
    this.navbar = document.getElementById(navbarId);
    this.scrollThreshold = scrollThreshold;
    this.handleScroll = this.handleScroll.bind(this);
    this.init();
  }

  init() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > this.scrollThreshold) {
      this.navbar.classList.add('scroll');
    } else {
      this.navbar.classList.remove('scroll');
    }
  }
}

const scrollThreshold = 120;
const transparentNavbar = new TransparentNavbar('navbar', scrollThreshold);


// Smooth Scroll
class SmoothScroll {
  constructor() {
    this.links = document.querySelectorAll('a[href^="#"]');
    this.addSmoothScroll();
  }

  addSmoothScroll() {
    this.links.forEach(link => {
      link.addEventListener('click', this.handleSmoothScroll.bind(this));
    });
  }

  handleSmoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}

const smoothScroll = new SmoothScroll();