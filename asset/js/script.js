function copy(e) {
  var tooltips;


  if (e == 'wa') {
    tooltips = document.getElementById("myTooltipsWa");
    navigator.clipboard.writeText('0895330267878');
    tooltips.innerHTML = "Tersalin di Clipboard";
    const reset = setTimeout(tooltipReset, 2000);

    function tooltipReset() {
      tooltips.innerHTML = "0895-3302-67878   0895-3607-36943"
    } 

  }else if (e == 'fb') {
    tooltips = document.getElementById("myTooltipsFb");
    navigator.clipboard.writeText('Rafyangar Itsolution');
    tooltips.innerHTML = "Tersalin di Clipboard";

    const reset = setTimeout(tooltipReset, 2000);

    function tooltipReset() {
      tooltips.innerHTML = "Rafyangar Itsolution"
    } 

  }else if  (e == 'ig') {
    tooltips = document.getElementById("myTooltipsIg");
    navigator.clipboard.writeText('rafyangar_itsolution');
    tooltips.innerHTML = "Tersalin di Clipboard";

    const reset = setTimeout(tooltipReset, 2000);

    function tooltipReset() {
      tooltips.innerHTML = "rafyangar_itsolution"
    } 

  }else if  (e == 'tw') {
    tooltips = document.getElementById("myTooltipsTw");
    navigator.clipboard.writeText('twiter RYG');
    tooltips.innerHTML = "Tersalin di Clipboard";

    const reset = setTimeout(tooltipReset, 2000);

    function tooltipReset() {
      tooltips.innerHTML = "Twiter RYG"
    } 

  }else {
    tooltips = document.getElementById("myTooltipsTk");
    navigator.clipboard.writeText('tiktok RYG');
    tooltips.innerHTML = "Tersalin di Clipboard";

    const reset = setTimeout(tooltipReset, 2000);

    function tooltipReset() {
      tooltips.innerHTML = "Tiktok RYG"
    } 

  }

}


// // fungsi animasi fade in di awal load page klo mau di tambah
//   function reveal() {
//     let reveals = document.querySelectorAll(".reveal");
//     for (let i = 0; i < reveals.length; i++) {
//       let windowHeight = window.innerHeight;
//       let elementTop = reveals[i].getBoundingClientRect().top;
//       let elementVisible = 150;
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       }
//     }
//   }

//window.onload = () => {

// // animasi buat navbar nya klo mau ditambah
// let prevScrollpos = window.pageYOffset;

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {

//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-80px";
//   }
//   prevScrollpos = currentScrollPos;

  
//     let navbar = document.getElementById("navbar");
//     let logo = document.getElementById("logo");

//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     navbar.style.padding = "10px 10px";
//     navbar.style.backgroundImage = "linear-gradient(45deg, orange, yellow)";
//     navbar.style.boxShadow = "0 0 2px #000";
//     logo.style.width = "100px";
//     logo.style.height = "50px";
// } else {
//     navbar.style.padding = "20px 10px";
//     navbar.style.backgroundImage = "none";
//     navbar.style.boxShadow = "none";
//     logo.style.width = "130px";
//     logo.style.height = "80px";
//   }
//}

