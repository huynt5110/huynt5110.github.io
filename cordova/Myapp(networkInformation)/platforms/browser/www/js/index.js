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
    document.getElementById("networkInfo").addEventListener("click", networkInfo);
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
    function networkInfo() {
      var networkState = navigator.connection.type;
      var states = {};
      states[Connection.UNKNOWN] = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI] = 'WiFi connection';
      states[Connection.CELL_2G] = 'Cell 2G connection';
      states[Connection.CELL_3G] = 'Cell 3G connection';
      states[Connection.CELL_4G] = 'Cell 4G connection';
      states[Connection.CELL] = 'Cell generic connection';
      states[Connection.NONE] = 'No network connection';
      alert('Connection type: ' + states[networkState]);
    }
    function onOffline() {
      alert('You are now offline!');
    }

    function onOnline() {
      alert('You are now online!');
    }
  }
};

app.initialize();