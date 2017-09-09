  var wa_images = [], x = -1;
  wa_images[0] = "pics/eunice lake.jpg";
  wa_images[1] = "pics/mount rainier.jpg";
  wa_images[2] = "pics/saddle rock.jpg";
  wa_images[3] = "pics/sunrise wta bear.jpg";
  wa_images[4] = "pics/snoqualmie lake.jpg";
  wa_images[5] = "pics/lake melakwa.jpg";
  wa_images[6] = "pics/mount rainier rampart ridge view.jpg";


/* 
-----------------------------------------------------------
change to the next the image set in the array.
indicate this function on the onmouseover="changeWAImage()"
-----------------------------------------------------------
*/
function nextWAImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("changeWAImage").src = wa_images[x];
}

var startWAImageChange = false;
function nextWAImageMouseOver() {
    if(startWAImageChange) {
        x = (x === wa_images.length - 1) ? 0 : x + 1;
            var image = wa_images[x]
            document.getElementById("changeWAImage").src = image;
    }
}

/*
--------------------------------
set the image display
to change every 2 seconds
onmousehover
--------------------------------
*/
function changeWAPic() {
    startWAImageChange = true;
    setInterval(nextWAImageMouseOver, 2000);
}

function stopChangeWAPic() {
    startWAImageChange = false;
}