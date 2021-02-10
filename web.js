// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("contact");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closecontact")[0];

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if(event.target == modal2) {
    modal2.style.display = "none";
  }
  if(event.target == modal3) {
    modal3.style.display = "none";
  }
}


// Get the modal
var modal2 = document.getElementById("about-modal");

// Get the button that opens the modal
var btn2 = document.getElementById("about");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("closeabout")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}


// Get the modal
var modal3 = document.getElementById("openmodalblog");

// Get the button that opens the modal
var btn3 = document.getElementById("opencards");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("closeblog")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// links to collages

function link2collage2() {
	location.replace("https://www.avanthi.edu.in/");
}

function link2school() {
	location.replace("https://maps.app.goo.gl/Wsxa6w22BgEX2DkK6")
}

function link2collage() {
	location.replace("https://maps.app.goo.gl/8Qwfr3knHf7wjX156")
}

function py() {
  location.replace("py.html")
}