const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = app.isPackaged ? false : require("electron-is-dev");

function createWindow() {
  const win = new BrowserWindow({
    width: 1780,
    height: 1050,
    webPreferences: {
      contextIsolation: true,
    },
  });

  if (isDev) {
    win.loadURL("http://localhost:5173");
  } else {
    // En producción, index.html está en la raíz del app.asar
    win.loadURL(`file://${path.join(__dirname, "../index.html")}`);
  }

  // Para depuración, puedes quitarlo luego
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
