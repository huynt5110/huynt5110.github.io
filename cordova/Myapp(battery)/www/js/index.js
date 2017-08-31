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
        
    },
    onBatteryStatus: function (status) {
        document.getElementById("battery").innerHTML = "Your battery is : " + status.level + "%";
        var isPluged = ((status.isPlugged == true) ? "pluged" : "unpluged");
        document.getElementById("IsPlugged").innerHTML = "Your device is " + isPluged;
    },
   
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        alert("d");
        window.addEventListener('batterystatus',this.onBatteryStatus.bind(this),false);
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        document.getElementById("btn_click").addEventListener("click", setLocalStorage);
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        function setLocalStorage() {
            alert("abc");
        }
        console.log('Received Event: ' + id);
    }
};

app.initialize();