// Форма поиска на главной

const searchFormSwitchButton = document.querySelector(".button-section-switch");
const searchForm = document.querySelector(".search-hotel-form");
const searchFormElements = searchForm.querySelectorAll("*");
const dateIcons = searchForm.querySelectorAll(".icon-date")
const searchFormCheckInDateInput = searchForm.querySelector(".form-checkin-date-input");
const searchFormAdultCount = searchForm.querySelector(".adult-count");
const searchFormChildrenCount = searchForm.querySelector(".children-count");

let isStorageSupport = true;
let storageAdult = "";
let storageChildren = "";
let buttonWasClicked = false;

function disableFormElements() {
  for (i = 0; i < searchFormElements.length; i++) {
    searchFormElements[i].disabled = true;
  }
  for (k = 0; k < dateIcons.length; k++) {
    dateIcons[k].removeAttribute("tabindex");
  }
}

function enableFormElements() {
  for (i = 0; i < searchFormElements.length; i++) {
    searchFormElements[i].disabled = false;
  }
  for (k = 0; k < dateIcons.length; k++) {
    dateIcons[k].setAttribute("tabindex", 0);
  }
}

try {
  storageAdult = localStorage.getItem("adultCount");
  storageChildren = localStorage.getItem("childrenCount");
} catch (err) {
  isStorageSupport = false;
}

if (storageAdult) {
  searchFormAdultCount.value = storageAdult;
}

if (storageChildren) {
  searchFormChildrenCount.value = storageChildren;
}

searchForm.classList.add("search-hotel-form-initial");
searchFormCheckInDateInput.required = false;
disableFormElements();

searchFormSwitchButton.addEventListener("click", function () {
  if (!buttonWasClicked) {
    searchForm.classList.remove("search-hotel-form-initial");
    searchForm.classList.toggle("search-hotel-form-visible");
  } else {
    searchForm.classList.toggle("search-hotel-form-visible");
    searchForm.classList.toggle("search-hotel-form-hidden");
  }

  if (searchForm.classList.contains("search-hotel-form-visible")) {
    enableFormElements();
  } else {
    disableFormElements();
    searchForm.classList.remove("search-hotel-form-error");
    searchFormCheckInDateInput.classList.remove("form-date-input-error");
  }
  buttonWasClicked = true;
});

searchForm.addEventListener("submit", function (evt) {
  if (!searchFormCheckInDateInput.value) {
    evt.preventDefault();
    searchForm.classList.remove("search-hotel-form-error");
    searchFormCheckInDateInput.classList.remove("form-date-input-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("search-hotel-form-error");
    searchFormCheckInDateInput.classList.add("form-date-input-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultCount", searchFormAdultCount.value);
      localStorage.setItem("childrenCount", searchFormChildrenCount.value);
    }
  }
});

// Карта

var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCHJ6TLWFKJ82-2FSCHAAxODPnRq6l-wsc&callback=initMap';
script.defer = true;

document.head.appendChild(script);

window.initMap = function() {
  var sedona = {lat: 34.754709, lng: -111.730902};
  var sedonaMarker = {lat: 34.869709, lng: -111.760902};
  var map = new google.maps.Map(
    document.querySelector(".container-map"), {
      center: sedona,
      zoom: 9,
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
      },
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER,
      },
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER,
      },
    });
  var marker = new google.maps.Marker({position: sedonaMarker, map: map});
};
