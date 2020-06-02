
// Change Pictures

setInterval('loopImages()', 3000);

var imageCount = 3;
var display = [0, "darkgray", 0];

function loopImages() {
  document.getElementById('square'+display[0]).style.backgroundImage = "";

  var lastImage = display[0];
  var lastDisplay = display[2];

  while (display[0] > 7 || display[0] == lastImage) {
    display[0] = Math.floor(Math.random() * 10);
  }

  var currentImage = document.getElementById('square'+display[0]);

  while (display[2] > imageCount || display[2] == lastDisplay) {
    display[2] = Math.floor(Math.random() * 100);
  }
  
  display[1] = currentImage.style.backgroundColor;
  currentImage.style.backgroundImage = "url('files/featured/" + display[2] + ".jpg')";
}

loopImages();

//Menu and nav bar

var menuOpen = false;
function openMenu() {
  const menu = document.getElementById("menu");
  const menuHolder = document.getElementById("menuHolder");
  const sandwich = document.getElementById("sandwich");

  if (menuOpen == false) {
    menu.className = "show";
    menuHolder.className = "shadow"
    window.onclick = function() {
      if (event.target != menu && event.target != sandwich) {
        menu.className = "";
        menuHolder.className = ""
        menuOpen = false;
      }
    }
    menuOpen = true;
  } else {
    menu.className = "";
    menuHolder.className = ""
    menuOpen = false;
  }
}

// Nav bar animation

var state;

function headerShadow() {
  if (!state) {
    state = false;
  }

	if (document.body.scrollTop == 0){
    document.getElementById("header").className = "headerShadow";
    document.getElementById('logoNavBar').style.opacity = 0;
    document.getElementById('logoNavBar').style.display = "none";
    state = false;
	}
  if ((document.body.scrollTop != 0) && state == false) {
    document.getElementById("header").className = "headerNoShadow";
    document.getElementById('logoNavBar').style.opacity = 1;
    document.getElementById('logoNavBar').style.display = "block";
    state = true;
	}
}
