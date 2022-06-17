const electron = require ("electron");

var notification = new electron.remote.Notification();

function showNotification () {
   notification({ 
      title: "hello",
      body: "World" 
   }).show()
}

export default showNotification;