const {ipcRenderer} = require('electron')

let pathVideo = "/Users/wellingtongadelha/Movies/capitao_america_1.mp4"

const btnClose = document.getElementById("close")
const btnMinimize = document.getElementById("minimize")
const btnMaximize = document.getElementById("maximize")
const video = document.querySelector("video")
video.setAttribute("src",pathVideo)

btnClose.addEventListener("click",(e)=>{
	ipcRenderer.send("renderer-close")
})

btnMinimize.addEventListener("click",(e)=>{
	ipcRenderer.send("renderer-minimize")
})

btnMaximize.addEventListener("click",(e)=>{
	ipcRenderer.send("renderer-maximize")
})
