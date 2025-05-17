const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = app.isPackaged ? false : require("electron-is-dev");

function createWindow() {
  const win = new BrowserWindow({
    width: 1780,
    height: 1050,
    icon: path.join(__dirname, "../public/Tutor.ico"),
    autoHideMenuBar: true,
    backgroundColor: "#2e2c29",
    titleBarStyle: "hiddenInset",
    webPreferences: {
      contextIsolation: true,
    },
  });

  if (isDev) {
    win.loadURL("http://localhost:5173");
  } else {

    win.loadURL(`file://${path.join(__dirname, "../index.html")}`);
    win.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
