let level, isPlugged;
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        window.addEventListener('batterystatus',this.onBatteryStatus, false);
    },
    onBatteryStatus: function(status) {
        document.getElementById("battery").innerHTML = "Your battery is : " + status.level + "%";
        let isPlugged = status.isPlugged ? "pluged" : "unpluged"
        document.getElementById("IsPlugged").innerHTML = "Your device is : " + isPlugged;
    },
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        console.log('Received Event: ' + id);
    }
};

app.initialize();