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
    var myMedia = null;
    var src = null;
    //var src = "/android_asset/www/img/m.mp3"
    //var src = getMediaURL("music/m.mp3");
    debugger
    var platform = device.platform;
    alert(platform);
    switch(platform) {
      case "Android" : src = "/android_asset/www/img/m.mp3"; break;
      case "browser" : src = "../img/m.mp3"; break;
    }
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
    document.getElementById("playmusic").addEventListener("click", playmusic);
    console.log('Received Event: ' + id);
    function playmusic() {
        myMedia = new Media(src, onSuccess, onError);

        function onSuccess() {
          alert("playAudio Success");
        }

        function onError(error) {
          alert("playAudio Error: " + error.code);
        }
      myMedia.play();
    }
  }
};

app.initialize();