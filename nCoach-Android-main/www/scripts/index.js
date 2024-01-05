var app = {
  // Application Constructor
  initialize: function() {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
          document.addEventListener("deviceready", this.onDeviceReady, false);
      } else {
          this.onDeviceReady();
      }
  },

  onDeviceReady: function() {
    console.log("index");
      // We will init / bootstrap our application here
  },
};
app.initialize();