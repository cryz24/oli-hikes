var map;

function initMap() {
    
    var skyline = {
		info: '<strong>Skyline Trail</strong><br>\
                    Longmire/Paradise<br> Ashford, WA 98304<br>\
					<a href="https://www.google.com/maps/dir//Skyline+Trail,+Ashford,+WA+98304/@47.1503075,-122.5585324,9z/" target="_blank">Get Directions</a>',
		lat: 46.879966,
		long: -121.726909
	};

	var ellinor = {
		info: '<strong>Mount Ellinor</strong><br>\
                    Mt. Ellinor Lower Trailhead, NF-2419<br> Hoodsport, WA 98548<br>\
					<a href="https://www.google.com/maps/dir//Mt.+Ellinor+Lower+Trailhead,+National+Forest+Development+Road+2419,+Hoodsport,+WA/@47.5070774,-123.3017583,12z/" target="_blank">Get Directions</a>',
		lat: 47.5264186,
		long: -123.2611292
	};

	var melakwa = {
		info: '<strong>Denny Creek/Lake Melakwa</strong><br>\r\
                    Melakwa Lake Trailhead, FS 5830<br> North Bend, WA 98045<br>\
					<a href="https://www.google.com/maps/dir//Melakwa+Lake+Trailhead,+FS+5830,+North+Bend,+WA/@47.4153257,-121.5133948,12z/" target="_blank">Get Directions</a>',
		lat: 47.432262,
		long: -121.454441
	};

	var eight = {
		info: '<strong>Eightmile Lake Trail</strong><br>\r\
					Eightmile Lake Campground<br> Leavenworth, WA 98826<br>\
					<a href="https://www.google.com/maps/dir//Eightmile+Lake+Campground,+Leavenworth,+WA+98826/@47.5223573,-120.8752478,16z/" target="_blank">Get Directions</a>',
		lat: 47.522618,
		long: -120.870645
	};

	var saddle = {
		info: '<strong>Saddlerock Trail</strong><br>\r\
					Saddlerock Trail<br> Wenatchee, WA 98801<br>\
					<a href="https://www.google.com/maps/dir//Saddlerock+Trail,+Wenatchee,+WA+98801/@47.3973305,-120.3460902,15z/"target="_blank" >Get Directions</a>',
		lat: 47.397034,
		long: -120.329838
	};

	var oyster = {
		info: '<strong>Oyster Dome Trail</strong><br>\r\
					Oyster Dome Trailhead, Pacific NW Trail<br> Bow, WA 98232<br>\
 					<a href="https://www..com/maps/dir//Oyster+Dome+Trailhead,+Pacific+Northwest+Trail,+Bow,+WA/@48.6085758,-122.5032574,12z/" target="_blank">Get Directions</a>',
		lat: 48.608597,
		long: -122.433217
	};
	
	var lowerlena = {
		info: '<strong>Lower Lake Lena</strong><br>\r\
					Lena Lake/Brothers Trailhead, N Hamma Hamma Rd<br> Hoodsport, WA 98548<br>\
					<a href="https://www.google.com/maps/dir//Lena+Lake%2FBrothers+Trailhead,+N+Hamma+Hamma+Rd,+Hoodsport,+WA+98548/@47.599823,-123.2208629,12z/" target="_blank">Get Directions</a>',
		lat: 47.622861,
		long: -123.155816
	};

	var angels = {
		info: '<strong>Lake of the Angels</strong><br>\r\
					Putvin Trailhead, NF-25<br> Hoodsport, WA 98548<br>\
 					<a href="https://www.google.com/maps/dir//Lake+of+the+Angels,+Washington/@47.6095135,-123.3477067,12z/" target="_blank">Get Directions</a>',
		lat: 47.609535,
		long: -123.277667
	};

	var mildred = {
		info: '<strong>Mildred Lakes</strong><br>\r\
					Mildred Lakes<br> Hoodsport, WA 98548<br>\
 					<a href="https://www.google.com/maps/dir//Mildred+Lakes,+Washington+98548/@47.5565874,-123.3744379,12z/" target="_blank">Get Directions</a>',
		lat: 47.556609,
		long: -123.304398
	};

	var annette = {
		info: '<strong>Annette Lake Trail</strong><br>\r\
                    Annette Lake Trailhead<br> North Bend, WA 98045<br>\
					<a href="https://www.google.com/maps/dir//Annette+Lake+Trailhead,+North+Bend,+WA/@47.3927483,-121.5440436,12z/" target="_blank">Get Directions</a>',
		lat: 47.378094,
		long: -121.471488
	};

	var rampart = {
		info: '<strong>Rampart Ridge Trail</strong><br>\r\
                    Rampart Ridge Trail<br> Ashford, WA 98304<br>\
 					<a href="https://www.google.com/maps/dir//Rampart+Ridge+Trail,+Ashford,+WA+98304/@46.7595201,-121.8275605,15z/" target="_blank">Get Directions</a>',
		lat: 46.750432,
		long: -121.815789
	};

	var eagle = {
		info: '<strong>Eagle Peak Trail</strong><br>\r\
                    Eagle Peak Trail<br> Packwood, WA 98361<br>\
 					<a href="https://www.google.com/maps/dir//Eagle+Peak+Trail,+Packwood,+WA+98361/@46.7486296,-121.815361,16z/" target="_blank">Get Directions</a>',
		lat: 46.748799,
		long: -121.791913
    };
    
    var granite = {
		info: '<strong>Granite Mountain Lookout Trail</strong><br>\r\
                    Granite Mountain Trailhead<br> North Bend, WA 98045<br>\
					<a href="https://www.google.com/maps/dir//Granite+Mountain+Trailhead,+North+Bend,+WA+98045/@47.407157,-121.5020324,14z/" target="_blank">Get Directions</a>',
		lat: 47.418647,
		long: -121.481036
	};

	var tolmie = {
		info: '<strong>Tolmie Peak/Eunice Lake Trail</strong><br>\r\
                    Tolmie Peak/Eunice Lake<br> Washington 98304<br>\
 					<a href="https://www.google.com/maps/dir//Eunice+Lake,+Washington+98304/@46.9552521,-121.9479011,12z/" target="_blank">Get Directions</a>',
		lat: 46.958161,
		long: -121.877326
	};

	var snoqualmie = {
		info: '<strong>Lake Snoqualmie</strong><br>\r\
                    Snoqualmie Lake/Taylor River Trail #1002<br> North Bend, WA 98045<br>\
 					<a href="https://www.google.com/maps/dir//Snoqualmie+Lake%2FTaylor+River+Trail+%231002,+North+Bend,+WA/@47.5609364,-121.60226,12z/" target="_blank">Get Directions</a>',
		lat: 47.560958,
		long: -121.532220
	};

	var si = {
		info: '<strong>Mount Si</strong><br>\r\
                    Mt. Si Trailhead<br> King County, WA 98104<br>\
 					<a href="https://www.google.com/maps/dir//Mt.+Si+Trailhead,+King+County,+WA+98104/@47.4880225,-121.793204,12z/" target="_blank">Get Directions</a>',
		lat: 47.507738,
		long: -121.739839
	};

	var mailbox = {
		info: '<strong>Mailbox Peak</strong><br>\r\
                    Mailbox Peak Trail<br> North Bend, WA 98045<br>\
 					<a href="https://www.google.com/maps/dir//Mailbox+Peak+Trail,+North+Bend,+WA+98045/@47.4609841,-121.665573,15z/" target="_blank">Get Directions</a>',
		lat: 47.466339,
		long: -121.654336
	};


	var locations = [
      [skyline.info, skyline.lat, skyline.long, 0],
      [ellinor.info, ellinor.lat, ellinor.long, 1],
	  [melakwa.info, melakwa.lat, melakwa.long, 2],
      [eight.info, eight.lat, eight.long, 3],
      [saddle.info, saddle.lat, saddle.long, 4],
	  [oyster.info, oyster.lat, oyster.long, 5],
	  [lowerlena.info, lowerlena.lat, lowerlena.long, 6],
      [angels.info, angels.lat, angels.long, 7],
      [mildred.info, mildred.lat, mildred.long, 8],
      [annette.info, annette.lat, annette.long, 9],
      [rampart.info, rampart.lat, rampart.long, 10],
      [eagle.info, eagle.lat, eagle.long, 11],
      [granite.info, granite.lat, granite.long, 12],
      [tolmie.info, tolmie.lat, tolmie.long, 13],
      [snoqualmie.info, snoqualmie.lat, snoqualmie.long, 14],
      [si.info, si.lat, si.long, 15],
	  [mailbox.info, mailbox.lat, mailbox.long, 16],
    ]; 
 
    map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 47.606209,
			lng: -122.332071
		},
		zoom: 8
    });
    
	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}