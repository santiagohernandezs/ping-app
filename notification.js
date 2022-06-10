const {Notification} = require('electron')
const NOTIFICATION_TITLE = 'Hola de nuevo'
const NOTIFICATION_BODY = 'La aplicación está lista'

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
};

exports.showNotification;