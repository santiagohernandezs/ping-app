const { app, BrowserWindow, Notification } = require('electron');
const electronReload = require('electron-reload');
const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
  
    win.loadFile('index.html')
}

const NOTIFICATION_TITLE = 'Hola de nuevo'
const NOTIFICATION_BODY = 'La aplicación está lista'

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}

app.whenReady().then(createWindow).then(showNotification)
  
  
