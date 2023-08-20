// Get Item From Local Storage Data
// let mainColor = localStorage.getItem("color-option");

// if (mainColor !== null) {
//   document.documentElement.style.setProperty("--main-color", mainColor);

//   // Remove Active Class From All Colors List
//   document.querySelectorAll(".colors-list li").forEach((element) => {
//     element.classList.remove("active");

//     // Add Active Class On Element With Data-Color === Local Storage Item
//     if (element.dataset.color === mainColor) {
//       // Add Active Class
//       element.classList.add("active");
//     }
//   });
// }

// // Random Background Option
let backgroundOption = true;

// // Control The Interval
// let backgroundInterval;

// // Check If There Is Local Storage Random Background Item
// let backgroundLocalItem = localStorage.getItem("background-option");

// // Check If Random Background Local Storage Is Not Empty
// if (backgroundLocalItem != null) {
//   if (backgroundLocalItem === "true") {
//     backgroundOption = true;
//   } else {
//     backgroundOption = false;
//   }
// }

// // Remove Active Class From All Span
// document.querySelectorAll(".random-background span").forEach((span) => {
//   span.classList.remove("active");

//   // Add Active Class
//   if (backgroundLocalItem === "true") {
//     document.querySelector(".random-background .yes").classList.add("active");
//   } else {
//     document.querySelector(".random-background .no").classList.add("active");
//   }
// });

// // switch Colors

// let colorLi = document.querySelectorAll(".colors-list li");

// // Loop On Each List Item
// colorLi.forEach((li) => {
//   // On Click The List Item
//   li.addEventListener("click", (e) => {
//     // Set Color On Root
//     document.documentElement.style.setProperty(
//       "--main-color",
//       e.target.dataset.color
//     );

//     // Set Value To The Local Storage
//     localStorage.setItem("color-option", e.target.dataset.color);

//     // Remove Active Class From All List Items
//     e.target.parentElement.querySelectorAll(".active").forEach((element) => {
//       element.classList.remove("active");
//     });

//     // Add Active Class
//     e.target.classList.add("active");
//   });
// });

// // Control The Active Class In The Nav Bar
// let lis = document.querySelectorAll(".links  a");

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // Remove Active Class From All Elements
//     e.target.parentElement.querySelectorAll(".active").forEach((element) => {
//       element.classList.remove("active");
//     });
//     // Add Active Class To The Target
//     e.target.classList.add("active");
//   });
// });

// // switch Random Background Option

let randomBackgrounds = document.querySelectorAll(".random-background span");

// // Loop On Each Span
// randomBackgrounds.forEach((span) => {
//   // On Click The Span
//   span.addEventListener("click", (e) => {
//     // Remove Active Class From Span
//     e.target.parentElement.querySelectorAll(".active").forEach((element) => {
//       element.classList.remove("active");
//     });

//     // Add Active Class
//     e.target.classList.add("active");

//     if (e.target.dataset.background === "yes") {
//       backgroundOption = true;

//       randomizeBackground();

      // Set The Local Storage Background Option
//       localStorage.setItem("background-option", true);
//     } else {
//       backgroundOption = false;

//       clearInterval(backgroundInterval);

//       localStorage.setItem("background-option", false);
//     }
//   });
// });

// // Toggle Class Open On Main Settings Box And Toggle Class fa-spin For Rotation On Self
// let gearIcon = document.querySelector(".toggle-settings  .fa-gear");

// let settings = document.querySelector(".settings-box");

// gearIcon.onclick = function () {
//   settings.classList.toggle("open");
//   gearIcon.classList.toggle("fa-spin");
// };

// Select The Landing Page
let landingPage = document.querySelector(".landing-page");

// Make An Array Of The Images
let images = [
  "Dr shimaa Hany1.jpg",
  "dog3.jpg",
  "cat3.jpg",
  "Dr shimaa Hany.jpg",
  "logo1.jpg",
];

// Background Randomize Function
function randomizeBackground() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * images.length);

      // Change Background Image Url
      landingPage.style.backgroundImage =
        'url("../Front-End Projects/' + images[randomNumber] + '")';
    }, 2500);
  }
}

randomizeBackground();



document.body.scroll = 0


// Nav Bar
let menu = document.querySelector(".hamburger")
let sideBar = document.querySelector("#side_bar")


document.onclick = function(e) {
  if(e.target.id !== 'side_bar' && e.target.id !== 'toggle'){
    toggle.classList.remove('active')
    sideBar.classList.remove("active")
  }
}


menu.onclick = function() {
  menu.classList.toggle('active')
  sideBar.classList.toggle("active")
}