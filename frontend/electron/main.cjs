const { app, BrowserWindow } = require("electron");
const path = require("path");
const { spawn } = require("child_process");
const isDev = app.isPackaged ? false : require("electron-is-dev");

let backendProcess;

function createWindow() {
  const win = new BrowserWindow({
    width: 1780,
    height: 1050,
    icon: path.join(__dirname, "../public/tutor.ico"),
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
    win.loadURL(`file://${path.join(__dirname, "../dist/index.html")}`);
    win.openDevTools();
  }
}

function startBackend() {
  let backendPath;

  if (isDev) {
    backendPath = path.join(__dirname, "backend", "main.exe");
  } else {
    backendPath = path.join(process.resourcesPath, "app", "backend", "main.exe");
  }

  console.log("Backend path:", backendPath);

  backendProcess = spawn(backendPath, [], {
    detached: true,
    stdio: "ignore",
  });

  backendProcess.unref();
}

function stopBackend() {
  if (backendProcess) {
    process.kill(-backendProcess.pid);
  }
}

app.whenReady().then(() => {
  startBackend();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    stopBackend();
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});