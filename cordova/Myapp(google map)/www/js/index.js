var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    document.getElementById("getLocation").addEventListener("click", app.getLocation);
    this.receivedEvent('deviceready');
  },
  initMap: function (latitude, longitude) {
    var uluru = { lat: latitude, lng: longitude };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  },
  getLocation: function() {
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });

    function onSuccess(position) {
      alert('Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n');
      app.initMap(position.coords.latitude,position.coords.longitude);
    };

    function onError(error) {
      alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
  }
};


app.initialize();