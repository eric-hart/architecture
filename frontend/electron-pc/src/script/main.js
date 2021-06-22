import path from 'path';

import {
  app,
  BrowserWindow,
} from 'electron';

function createWindow() {
  const browserWindow = new BrowserWindow({
    width: 1438,
    height: 790,
  });

  browserWindow.loadURL('http://localhost:8000/');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
