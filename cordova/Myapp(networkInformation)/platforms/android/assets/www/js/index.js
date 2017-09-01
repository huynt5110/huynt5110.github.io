var app = {
  networkState: "",
  states: {},
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  alertoffline: function() {
    alert("you are offline");
  },
  alertonline: function() {
    alert("you are online");
  },
  checkConnection: function() {
    app.networkState = navigator.connection.type;
    app.states[Connection.UNKNOWN]  = 'Unknown connection';
    app.states[Connection.ETHERNET] = 'Ethernet connection';
    app.states[Connection.WIFI]     = 'WiFi connection';
    app.states[Connection.CELL_2G]  = 'Cell 2G connection';
    app.states[Connection.CELL_3G]  = 'Cell 3G connection';
    app.states[Connection.CELL_4G]  = 'Cell 4G connection';
    app.states[Connection.CELL]     = 'Cell generic connection';
    app.states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + app.states[app.networkState]);
  },
  onDeviceReady: function () {
    document.addEventListener("offline",app.alertoffline,false);
    document.addEventListener("online",app.alertonline,false);
    document.getElementById("networkInfo").addEventListener("click",app.checkConnection,false);
    this.receivedEvent('deviceready');
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