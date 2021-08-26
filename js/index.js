const {ipcRenderer} = require('electron')


const btnClose = document.getElementById("close")
const btnMinimize = document.getElementById("minimize")
const btnMaximize = document.getElementById("maximize")

btnClose.addEventListener("click",(e)=>{
	ipcRenderer.send("renderer-close")
})

btnMinimize.addEventListener("click",(e)=>{
	ipcRenderer.send("renderer-minimize")
})

btnMaximize.addEventListener("click",(e)=>{
	ipcRenderer.send("renderer-maximize")
})
