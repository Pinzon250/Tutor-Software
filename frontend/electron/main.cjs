const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

function createWindow() {
  const win = new BrowserWindow({
    width: 1780,
    height: 1050,
    webPreferences: {
      contextIsolation: true,
    },
  });

  if (isDev) {
    win.loadURL("http://localhost:5173"); // Vite dev server
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html")); // build de Vite
  }
}

app.whenReady().then(createWindow);
