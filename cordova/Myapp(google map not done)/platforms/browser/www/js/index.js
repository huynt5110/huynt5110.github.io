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
    this.receivedEvent('deviceready');

  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
    //get button from html
    document.getElementById("getLocation").addEventListener("click", getLocation);
    document.getElementById("watchLocation").addEventListener("click", watchLocation);

    function getLocation() {
      var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });

      function onSuccess(position) {
        alert('Latitude: ' + position.coords.latitude + '\n' +
          'Longitude: ' + position.coords.longitude + '\n' );
      };

      function onError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
      }
    }
    function watchLocation() {
      var options = {
        maximumAge: 3600000,
        timeout: 3000,
        enableHighAccuracy: true,
      }
      var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

      function onSuccess(position) {
        alert('Latitude: ' + position.coords.latitude + '\n' +
          'Longitude: ' + position.coords.longitude + '\n' +
          'Altitude: ' + position.coords.altitude + '\n' +
          'Accuracy: ' + position.coords.accuracy + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
          'Heading: ' + position.coords.heading + '\n' +
          'Speed: ' + position.coords.speed + '\n' +
          'Timestamp: ' + position.timestamp + '\n');
      };

      function onError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
      }
    }
    console.log('Received Event: ' + id);
  }
};

app.initialize();