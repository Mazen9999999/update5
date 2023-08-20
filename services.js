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