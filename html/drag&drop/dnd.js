window.addEventListener("load", onInit, false);

function onInit() {
    // dragstart
    const mypic = document.getElementById("mypic");
    mypic.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData('Text', mypic);
    });

    // process
    const leftbox = document.getElementById("leftbox");
    const rightbox = document.getElementById("rightbox");
    leftbox.addEventListener("dragenter", (e) => {
        e.preventDefault();
        leftbox.style.background = "skyblue";
        leftbox.style.border = "2px solid blue";
    });
    leftbox.addEventListener("dragleave", (e) => {
        e.preventDefault();
        leftbox.style.background = "white";
        leftbox.style.border = "2px solid green";

    });
    leftbox.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    leftbox.addEventListener("drop", (e) => {
        e.preventDefault();
        leftbox.innerHTML = e.dataTransfer.getData('Text');
    });
    
    // dragend
    mypic.addEventListener("dragend", (e) => {
        if (leftbox.innerHTML == '<img id="mypic" src="img.jpg" width="100px" alt="mypic">') {
            e.target.style.visibility = "hidden";
        }
    });
}