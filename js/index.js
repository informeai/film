const {ipcRenderer} = require('electron')

window.onload = function(){
	let inputFile = document.getElementById("filePath")
	let search = document.getElementById("search")
	let title = document.getElementById("title")
	const btnClose = document.getElementById("close")
	const btnMinimize = document.getElementById("minimize")
	const btnMaximize = document.getElementById("maximize")
	const video = document.querySelector("video")

	search.addEventListener("click",(e)=>{
		inputFile.click()
			
	})

	inputFile.addEventListener("change",(e)=>{
		title.innerHTML = e.target.files[0].name
		video.src = e.target.files[0].path
					
	})
	
	
	
	btnClose.addEventListener("click",(e)=>{
		ipcRenderer.send("renderer-close")
	})
	
	btnMinimize.addEventListener("click",(e)=>{
		ipcRenderer.send("renderer-minimize")
	})
	
	btnMaximize.addEventListener("click",(e)=>{
		ipcRenderer.send("renderer-maximize")
	})
}

