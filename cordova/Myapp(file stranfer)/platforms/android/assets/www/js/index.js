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
    document.getElementById("uploadFile").addEventListener("click", uploadFile);
    document.getElementById("downloadFile").addEventListener("click", downloadFile);
    console.log('Received Event: ' + id);
    function downloadFile() {
      var fileTransfer = new FileTransfer();
      var uri = encodeURI("http://s14.postimg.org/i8qvaxyup/bitcoin1.jpg");
      var fileURL = "///storage/emulated/0/DCIM/myFile";

      fileTransfer.download(
        uri, fileURL, function (entry) {
          console.log("download complete: " + entry.toURL());
        },

        function (error) {
          console.log("download error source " + error.source);
          console.log("download error target " + error.target);
          console.log("download error code" + error.code);
        },

        false, {
          headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
          }
        }
      );
    }
    function uploadFile() {
      alert("hello");
    }
  }
};

app.initialize();