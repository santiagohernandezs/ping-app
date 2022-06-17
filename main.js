import { app, BrowserWindow } from 'electron'
// eslint-disable-next-line no-unused-vars
import electronReload from 'electron-reload'
import { join } from 'path'

require('electron-reload')(__dirname, {
  electron: join(__dirname, 'node_modules', '.bin', 'electron')
})

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
