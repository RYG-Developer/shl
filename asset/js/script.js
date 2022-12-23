// triger buat tooltip biar kebaca di bootstarp.bundle.js 
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })


// fungsi animasi fade in di awal load page
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }





window.onload = () => {

  // animasi loading di awal load page
  const loading = document.querySelector('.loading')
  const percentValue = document.querySelector(".percent-value");
  let percent = 0;
  let loop = setInterval(() => {
      if (percent != 100) {
          document.body.style.overflowY = "hidden";
          percent++
          percentValue.innerText = percent;
      } else {
          clearInterval(loop);
          loading.style.display = "none";
          document.body.style.overflowY = "scroll";
      }
  }, 38)


  // buat ngetriger fungsi reveal tadi saat halaman di load
  window.addEventListener("scroll", reveal);
  reveal();


  // animasi kartu fitur
  const prev = document.querySelector('.left')
  const next = document.querySelector('.right')
  const container = document.querySelector('.avatars')
  const avatars = document.querySelectorAll('.avatars-container .avatar-item')
  let currentIndex = Math.floor(avatars.length/2)
  const val = (avatars.length - 1 - Math.floor(avatars.length/2)) * 355
  let translateVal = 0

  for (let i = 0; i < avatars.length; i++) {
    if (i === Math.floor(avatars.length/2)) {
      avatars[i].classList.add('current')
    }

  }

  let defaultVal = 0
  if (avatars.length % 2 === 0) {
    defaultVal = 90
    translateVal -= 90
    container.style.transform = `translateX(${translateVal}px)`
  }

  prev.addEventListener('click', () => {
    if (currentIndex - 1 < 0) {
      avatars[currentIndex].classList.remove('current')
      avatars[avatars.length - 1].classList.add('current')
      currentIndex = avatars.length - 1
      translateVal = -val - defaultVal
      container.style.transform = `translateX(${translateVal}px)`
    } else {
      avatars[currentIndex].classList.remove('current')
      avatars[currentIndex - 1].classList.add('current')
      currentIndex -= 1
      translateVal += 355
      container.style.transform = `translateX(${translateVal}px)`
    }
  })

  next.addEventListener('click', () => {
    if (currentIndex + 1 >= avatars.length) {
      avatars[currentIndex].classList.remove('current')
      avatars[0].classList.add('current')
      currentIndex = 0
      translateVal = val + defaultVal + 170
      container.style.transform = `translateX(${translateVal}px)`
      return
    }
    avatars[currentIndex].classList.remove('current')
    avatars[currentIndex + 1].classList.add('current')
    currentIndex += 1
    translateVal -= 355
    container.style.transform = `translateX(${translateVal}px)`
  })

}

// animasi buat navbar nya 
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;

  
    let navbar = document.getElementById("navbar");
    let logo = document.getElementById("logo");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "10px 10px";
    navbar.style.backgroundImage = "linear-gradient(45deg, orange, yellow)";
    navbar.style.boxShadow = "0 0 2px #000";
    logo.style.width = "100px";
    logo.style.height = "50px";
} else {
    navbar.style.padding = "20px 10px";
    navbar.style.backgroundImage = "none";
    navbar.style.boxShadow = "none";
    logo.style.width = "130px";
    logo.style.height = "80px";
  }
}

// animasi bubble di header
const root = document.querySelector("#header");
// let { innerHeight, innerWidth } = window;
// console.log(innerHeight, innerWidth);

let innerHeight = 400;
let innerWidth = window.innerWidth - 40;
console.log(innerWidth);

if (innerHeight < 300) {
  innerHeight = 300;
}
if (innerWidth < 300) {
  innerWidth = 700;
}

class Bubble {
  constructor() {
    this.bubbleSpan = undefined;
    this.handleNewBubble();
    this.color = this.randomColor();

    this.posY = this.randomNumber(innerHeight - 20, 20);
    this.posX = this.randomNumber(innerWidth - 20, 20);

    this.bubbleSpan.style.top = this.posY + "px";
    this.bubbleSpan.style.left = this.posX + "px";

    // setting height and width of the bubble
    this.height = this.randomNumber(60, 20);
    this.width = this.height;

    this.bubbleEnd.call(this.bubbleSpan, this.randomNumber(3000, 1000));
  }

  // creates and appends a new bubble in the DOM
  handleNewBubble() {
    this.bubbleSpan = document.createElement("span");
    this.bubbleSpan.classList.add("bubble");
    root.append(this.bubbleSpan);
    this.handlePosition();
    this.bubbleSpan.addEventListener("click", this.bubbleEnd);
  }

  handlePosition() {
    // positioning the bubble in different random X and Y
    const randomY = this.randomNumber(60, -60);
    const randomX = this.randomNumber(60, -60);

    this.bubbleSpan.style.backgroundColor = this.color;
    this.bubbleSpan.style.height = this.height + "px";
    this.bubbleSpan.style.width = this.height + "px";

    this.posY = this.randomNumber(innerHeight - 20, 20);
    this.posX = this.randomNumber(innerWidth - 20, 20);

    this.bubbleSpan.style.top = this.posY + "px";
    this.bubbleSpan.style.left = this.posX + "px";

    const randomSec = this.randomNumber(4000, 1000);
    setTimeout(this.handlePosition.bind(this), randomSec); // calling for re-position of bubble
  }

  randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randomColor() {
    return `rgba(0,0,0,.2)`;
  }

  bubbleEnd(removingTime = 0) {
    setTimeout(
      () => {
        requestAnimationFrame(() => this.classList.add("bubble--bust"));
      },
      removingTime === 0 ? removingTime : removingTime - 100
    );

    setTimeout(() => {
      requestAnimationFrame(() => this.remove());
      requestAnimationFrame(() => new Bubble());
    }, removingTime);
  }
}

// creating many bubble instance

setInterval(function () {
  requestAnimationFrame(() => new Bubble());
}, 2000);