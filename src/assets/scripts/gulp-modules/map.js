var chbox = document.getElementById('checkbox');

const firstBlock = document.querySelector('.block-style-column-3__map-1');
const secondBlock = document.querySelector('.block-style-column-3__map-2');

chbox.addEventListener('change', function() {
  if (chbox.checked) {
    firstBlock.classList.toggle('toggle');
    secondBlock.classList.toggle('toggle');
  } else {
    firstBlock.classList.toggle('toggle');
    secondBlock.classList.toggle('toggle');
  }
});

// Google map start
function func() {
  const script = document.createElement('script');
  let key = '';
  if (window.location.href.match(/localhost/)) key = '';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
  document.getElementsByTagName('head')[0].appendChild(script);
}
// setTimeout(func, 1000);
const maps = document.querySelectorAll('.map');
const options = {
  rootMargin: '0px',
  threshold: 0.1,
};

maps.forEach(image => {
  const callback = (entries, observer) => {
    /* Content excerpted, show below */
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        observer.unobserve(image);
        func();
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  const target = image;
  observer.observe(target);
});
// eslint-disable-next-line no-unused-vars
function initMap() {
  const gmarkers1 = [];
  const center = {
    lat: 41.7382777,
    lng: 44.7131926,
  };
  const choosedCategories = new Set();
  choosedCategories.add('main');
  const filterItems = document.querySelectorAll('[data-marker]');
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    language: 'en',
    styles: getMapTheme(),
  });
  const filterMarkers = function(category, categoriesArray) {
    gmarkers1.forEach(el => {
      if (categoriesArray.has(el.category) || categoriesArray.size === 1) {
        el.setMap(map);
        el.setAnimation(google.maps.Animation.DROP);
      } else {
        el.setMap(null);
      }
    });
  };
  filterItems.forEach(item => {
    item.addEventListener('click', evt => {
      evt.stopImmediatePropagation();
      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        choosedCategories.add(item.dataset.category);
      } else {
        choosedCategories.delete(item.dataset.category);
      }
      filterMarkers('main', choosedCategories);
    });
  });
  var baseFolder = './assets/images/map/';
  var defaultMarkerSize = new google.maps.Size(56, 90);
  var buildLogoSize = new google.maps.Size(82, 130);
  if (document.documentElement.clientWidth < 1600) {
    var defaultMarkerSize = new google.maps.Size(46, 80);
    var buildLogoSize = new google.maps.Size(72, 120);
  }
  const markersAdresses = {
    main: `${baseFolder}main.svg`,
    church: `${baseFolder}church.svg`,
    kindergarden: `${baseFolder}kindergarden.svg`,
    mall: `${baseFolder}mall.svg`,
    park: `${baseFolder}park.svg`,
    pharmacy: `${baseFolder}pharmacy.svg`,
    restaurant: `${baseFolder}restaurant.svg`,
    school: `${baseFolder}school.svg`,
    sport: `${baseFolder}sport.svg`,
    supermarket: `${baseFolder}supermarket.svg`,
    university: `${baseFolder}university.svg`,
  };
  const markersData = [
    {
      type: 'main',
      icon: { url: markersAdresses.main, scaledSize: buildLogoSize},
      position: { lat: 41.7382777, lng: 44.7131926 },
      text: 'Sapori Veri - Ірпінь, вул. Університетська, 20'
    },
    {
      type: 'church',
      icon: { url: markersAdresses.church, scaledSize: defaultMarkerSize},
      position: { lat: 41.73931, lng: 44.7125913 },
      text: 'Sapori Veri - Ірпінь, вул. Університетська, 20'
    },
    {
      type: 'kindergarden',
      icon: { url: markersAdresses.kindergarden, scaledSize: defaultMarkerSize},
      position: { lat: 41.738878, lng: 44.7121083 },
      text: 'Sapori Veri - Ірпінь, вул. Університетська, 20'
    },
    {
      type: 'mall',
      icon: { url: markersAdresses.mall, scaledSize: defaultMarkerSize},
      position: { lat: 41.738878, lng: 44.7121083 },
      text: 'Sapori Veri - Ірпінь, вул. Університетська, 20'
    },
    {
      type: 'park',
      icon: { url: markersAdresses.park, scaledSize: defaultMarkerSize},
      position: { lat: 41.737285, lng: 44.7132783 },
      text: 'Sapori Veri - Ірпінь, вул. Університетська, 20'
    },
    {
      type: 'pharmacy',
      icon: { url: markersAdresses.pharmacy, scaledSize: defaultMarkerSize},
      position: { lat: 41.737469, lng: 44.7112293 },
      text: 'Sapori Veri - Ірпінь, вул. Університетська, 20'
    },
    {
      type: 'restaurant',
      icon: { url: markersAdresses.restaurant, scaledSize: defaultMarkerSize},
      position: { lat: 41.738302, lng: 44.7104143 },
      text: 'Sapori Veri - Ірпінь, вул. Університетська, 20'
    },
    {
      type: 'school',
      icon: { url: markersAdresses.school, scaledSize: defaultMarkerSize},
      position: { lat: 41.7388829, lng: 44.7146424 },
      text: 'Sapori Veri - Ірпінь, вул. Університетська, 20'
    },
    {
      type: 'sport',
      icon: { url: markersAdresses.sport, scaledSize: defaultMarkerSize},
      position: { lat: 41.7388829, lng: 44.7146424 },
      text: 'Sapori Veri - Ірпінь, вул. Університетська, 20'
    },
    {
      type: 'supermarket',
      icon: { url: markersAdresses.supermarket, scaledSize: defaultMarkerSize},
      position: { lat: 41.7388829, lng: 44.7146424 },
      text: 'Sapori Veri - Ірпінь, вул. Університетська, 20'
    },
    {
      type: 'university',
      icon: { url: markersAdresses.university, scaledSize: defaultMarkerSize},
      position: { lat: 41.7388829, lng: 44.7146424 },
      text: 'Sapori Veri - Ірпінь, вул. Університетська, 20'
    },
  ];
  /* beautify preserve:end */
  const infowindow = new google.maps.InfoWindow({
    text: '',
    maxWidth: 300,
  });
  markersData.forEach(marker => {
    const category = marker.type;
    const mapMarker = new google.maps.Marker({
      map,
      category,
      zIndex: marker.zIndex || 1,
      icon: marker.icon,
      cursor: 'grap', // курсор при наведении на макркер жк
      position: new google.maps.LatLng(marker.position.lat, marker.position.lng),
    });

    google.maps.event.addListener(mapMarker, 'click', function() {
        infowindow.setContent(marker.text);
        infowindow.open(map, mapMarker);
        map.panTo(this.getPosition());
    });

    mapMarker.name = marker.type;
    gmarkers1.push(mapMarker);
  });
}

// window.addEventListener("load", () => {
  // const legend = document.querySelector("[data-accordeon]");
  // const legendTitle = document.querySelector(".infrastructure-markers__btn");
  // const openedMarker = document.querySelector(".infrastructure-markers__btn svg");
  // const markersHeight = getComputedStyle(
  //   document.querySelector(".infrastructure-markers__ul")
  // ).height;
  // if (document.documentElement.clientWidth < 575) {
  //     legend.classList.remove("opened");
  //     gsap.timeline().fromTo(legend, { y: 0 }, { y: markersHeight });
  //     gsap.timeline().fromTo(legendTitle, {y: 0}, {y: markersHeight});
  // }

  // legendTitle.addEventListener("click", () => {
  //   const legendWrapper = document.querySelector('.infastructure-markers__wrapper');
  //   legend.classList.toggle('opened');
  //   openedMarker.classList.toggle('rotate');
  //   if (legend.classList.contains("opened")) {
  //     legendWrapper.classList.remove('closed');
  //     gsap.timeline().fromTo(legend, { y: markersHeight }, { y: 0 });
  //     gsap.timeline().fromTo(legendTitle, {y: markersHeight}, {y: 0});
  //   } else {
  //     legendWrapper.classList.add('closed')
  //     gsap.timeline().fromTo(legend, { y: 0 }, { y: markersHeight });
  //     gsap.timeline().fromTo(legendTitle, {y: 0}, {y: markersHeight});
  //   }
  // });
// });

function getMapTheme() {
  return [
    {
      "featureType": "all",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "weight": "0.5"
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "labels.text",
      "stylers": [
        {
          "lightness": "-50"
        },
        {
          "saturation": "-50"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text",
      "stylers": [
        {
          "hue": "#009aff"
        },
        {
          "saturation": "25"
        },
        {
          "lightness": "0"
        },
        {
          "visibility": "simplified"
        },
        {
          "gamma": "1"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "saturation": "0"
        },
        {
          "lightness": "100"
        },
        {
          "gamma": "2.31"
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "simplified"
        },
        {
          "lightness": "20"
        },
        {
          "gamma": "1"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": "-100"
        },
        {
          "lightness": "-100"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "lightness": "0"
        },
        {
          "saturation": "45"
        },
        {
          "gamma": "4.24"
        },
        {
          "visibility": "simplified"
        },
        {
          "hue": "#00ff90"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "saturation": "-100"
        },
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "simplified"
        },
        {
          "color": "#666666"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.icon",
      "stylers": [
        {
          "saturation": "-25"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "transit.station.airport",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "lightness": "50"
        },
        {
          "gamma": ".75"
        },
        {
          "saturation": "100"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ];
}
