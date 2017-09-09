  var or_images = [], x = -1;
  or_images[0] = "pics/cape falcon view.jpg";
  or_images[1] = "pics/phantom ship.jpg";
  or_images[2] = "pics/pinnacles trailhead.jpg";
  or_images[3] = "pics/crater lake.jpg";
  or_images[4] = "pics/cape falcon.jpg";
  or_images[5] = "pics/punch bowl.jpg";


/* 
-----------------------------------------------------------
change to the next the image set in the array.
indicate this function on the onmouseover="changeORImage()"
-----------------------------------------------------------
*/
function nextORImage() {
    x = (x === or_images.length - 1) ? 0 : x + 1;
    document.getElementById("changeORImage").src = or_images[x];
}

var startORImageChange = false;
function nextORImageMouseOver() {
    if(startORImageChange) {
        x = (x === or_images.length - 1) ? 0 : x + 1;
            var image = or_images[x]
            document.getElementById("changeORImage").src = image;
    }
}

/*
--------------------------------
set the image display
to change every 2 seconds
onmousehover
--------------------------------
*/
function changeORPic() {
    startORImageChange = true;
    setInterval(nextORImageMouseOver, 2000);
}

function stopChangeORPic() {
    startORImageChange = false;
}