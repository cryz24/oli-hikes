/* This is where the magic happens */

/* 
-----------------
Background Change
-----------------
*/

/* Put the images in an array to display on the jumbotron background */
var images = [], x = -1;
  images[0] = "url('pics/eunice lake.jpg')";
  images[1] = "url('pics/mount rainier.jpg')";
  images[2] = "url('pics/crater lake.jpg')";
  images[3] = "url('pics/saddle rock.jpg')";
  images[4] = "url('pics/valley of fire arch.jpg')";
  images[5] = "url('pics/sunrise wta bear.jpg')";
  images[6] = "url('pics/snoqualmie lake.jpg')";
  images[7] = "url('pics/lake melakwa.jpg')";

/* Change to the next background image set in the array */
  function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("jumbotron").style.backgroundImage = images[x];
}

/* Set the background image display to change every 7 seconds */
function changeImage() {
   setInterval(displayNextImage, 7000);
}


/* 
------------------------------
Full Screen Overlay Navigation
------------------------------
*/

/* Set the height of the full screen overlay navigation to 100% */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Set the height of the full screen overlay navigation to 0% */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}