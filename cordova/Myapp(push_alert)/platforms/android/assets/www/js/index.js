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
    document.getElementById("btn_alert").addEventListener("click",notifiAlert);
    document.getElementById("btn_confirm").addEventListener("click",notifiConfirm);
    document.getElementById("btn_prompt").addEventListener("click",notifiPrompt);
    function alertDismissed() {
      alert("Ajinomoto");
    }
    function notifiAlert() {
      navigator.notification.beep(1);
      navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Ok'                  // buttonName
      );
    }
    function notifiConfirm() {
      navigator.notification.beep(2);
      navigator.notification.confirm(
        "You are the winner!", // message
        onConfirm,            // callback to invoke with index of button pressed
        "Game Over",           // title
        ["Restart", "Exit"]     // buttonLabels
      );
    }
    // button Index restart 1 ; cancel 2 
    function onConfirm(buttonIndex) {
      switch (buttonIndex) {
        case 1: alert("You press restart"); break;
        case 2: alert("You press cancel"); break;
      }
    }
    var array = ['Ok', 'Exit'];
    function onPrompt(results) {
      alert("You selected button " + array[results.buttonIndex - 1] + " and entered " + results.input1);
    }

    function notifiPrompt() {
      navigator.notification.beep(3);
      navigator.notification.prompt(
        'Please enter your name',  // message
        onPrompt,                  // callback to invoke
        'Registration',            // title
        array,             // buttonLabels
        'Thanh Huy'                 // defaultText
      );
    }
    console.log('Received Event: ' + id);
  }
};

app.initialize();