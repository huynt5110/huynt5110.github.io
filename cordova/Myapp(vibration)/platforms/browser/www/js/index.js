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
        document.getElementById("vibration").addEventListener("click", app.vibration);
        document.getElementById("vibrationPattern").addEventListener("click", app.vibrationPattern);
        this.receivedEvent('deviceready');
    },
    vibration: function () {
        var time = 3000;
        navigator.vibrate(time);
    },

    vibrationPattern: function () {
        var pattern = [1000, 1000, 1000, 1000];
        navigator.vibrate(pattern);
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