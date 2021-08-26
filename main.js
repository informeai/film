const { app, ipcMain, BrowserWindow } = require('electron')
var win;
function createWindow () {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    backgroundColor: "#0d0d0d",
    webPreferences: {
    	nodeIntegration: true,
    	contextIsolation: false,
    	devTools: true,
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}


app.whenReady().then(() => {
  createWindow()
	app.on('activate', function () {
    	if (BrowserWindow.getAllWindows().length === 0) createWindow()
  	})
  	
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

//close window
ipcMain.on("renderer-close",(e)=>{
	win.close()
})

//minimize window
ipcMain.on("renderer-minimize",(e)=>{
	win.minimize()
})

//maximize window
ipcMain.on("renderer-maximize",(e)=>{
	if (!win.isMaximized()){
		win.maximize()
	}else{
		win.unmaximize()
	}
})
