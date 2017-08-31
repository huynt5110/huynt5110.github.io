var app = {
  platform: null,
  myMedia: null,
  src: null,
  volumeValue: 0.5,
  srcAndroid: "/android_asset/www/img/m.mp3",
  srcBrowser: "../img/m.mp3",
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    document.getElementById("volumeDown").addEventListener("click", app.volumeDown);
    document.getElementById("volumeUp").addEventListener("click", app.volumeUp);
    document.getElementById("pausemusic").addEventListener("click", app.pausemusic);
    document.getElementById("playmusic").addEventListener("click", app.playmusic);
    document.getElementById("stopmusic").addEventListener("click", app.stopmusic);
    this.receivedEvent('deviceready');
  },
  // get device platform android ios wp ...
  getPlatform: function () {
    app.platform = device.platform;
    alert(app.platform);
    switch (app.platform) {
      case "Android": app.src = srcAndroid; break;
      case "browser": app.src = srcBrowser; break;
    }
  },
  // run after media finish
  onSuccess: function () {
    alert("playAudio Success");
  },
  // when error this function will run
  onError: function (error) {
    alert("playAudio Error: " + error.code);
  },
  // play music when user click button
  playmusic: function () {
    if (app.myMedia == null) {
      app.myMedia = new Media(app.src, app.onSuccess, app.onError);
    }
    app.myMedia.play();
  },
  pausemusic: function () {
    app.myMedia != null  ? app.myMedia.pause() : alert("Already pause");
  },
  stopmusic: function () {
    app.myMedia  ? app.myMedia.stop() : alert("Already stop");
  },
  volumeUp: function() {
   (app.myMedia && app.volumeValue < 1) ? (app.myMedia.setVolume(app.volumeValue += 0.1)) : alert("Maximum");
  },
  volumeDown: function() {
   (app.myMedia && app.volumeValue > 0) ? (app.myMedia.setVolume(app.volumeValue -= 0.1)) : alert("Minimum");
  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {
    app.getPlatform();
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
  }
};

app.initialize();