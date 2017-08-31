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
    function loadmap() {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    function onSuccess(position) {
      var longitude = 1.232;
      var latidude = 43.45730613490132;
      debugger
      var latLong = new google.maps.LatLng(latidude, longitude);
      var mapOptions = {
        center: latLong,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),mapOptions);
      var marker = new google.maps.Marker({
        position: latLong,
        map: map,
        title: 'my location'
      });
    }
    function onError (error) {
      alert("error");
    }
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
    console.log('Received Event: ' + id);
  }
};

app.initialize();