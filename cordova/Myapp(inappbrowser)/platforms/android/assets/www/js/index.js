var app = {
    url : "https://tinhte.vn/",
    target: "blank",
    ref: "",
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        app.openBrowserApp();
        this.receivedEvent('deviceready');
    },
    openBrowserApp: function() {
        ref = cordova.InAppBrowser.open(app.url,app.target);
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