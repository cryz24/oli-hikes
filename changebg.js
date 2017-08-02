var images = [], x = -1;
  images[0] = "url('pics/eunice lake.jpg')";
  images[1] = "url('pics/mount rainier.jpg')";
  images[2] = "url('pics/crater lake.jpg')";
  images[3] = "url('pics/saddle rock.jpg')";
  images[4] = "url('pics/valley of fire arch.jpg')";
  images[5] = "url('pics/sunrise wta bear.jpg')";
  images[6] = "url('pics/snoqualmie lake.jpg')";
  images[7] = "url('pics/lake melakwa.jpg')";

function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("jumbotron").style.backgroundImage = images[x];
}

function changeImage() {
   setInterval(displayNextImage, 7000);
}