
let dialog = document.createElement("dialog");
function closeDialog(){
    dialog.close();
}
dialog.innerHTML =`
<h2>Hello Dialog</h2>
<p>This is a custom dialog created with JavaScript.</p>
<button id="closeDialog" onclick = "closeDialog()">Close</button>
`;
document.body.append(dialog);
document.body.style.border = "5px solid green";

async function read() {
    let old;
    if (navigator.clipboard.read) {
      old = await navigator.clipboard.read();
    }
    if (old != undefined){
        let smth = document.getElementById("closeDialog");
        smth.innerText = old.toString();
    }
}

read();

function handleNewFileInput(fileInput){
        dialog.showModal();
}



document.addEventListener("keydown", (event) =>{
    if(event.key === 'F' || event.key === 'f')
    {
        dialog.showModal();
    }
});

document.addEventListener("click", async (event) => {
    let target;
    if (event.target.matches("input[type=file]:not([webkitdirectory])")) {
        target = event.target;
    } else {
        const path = event.path || (event.composedPath && event.composedPath());
        if (path && path[0].matches("input[type=file]:not([webkitdirectory])")) {
        target = path[0];
        }
    }
  
    if (target) {
        event.preventDefault();
        document.body.style.border = "5px solid red";
        handleNewFileInput(target);
    }
  });


  