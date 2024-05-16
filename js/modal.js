var token = false;
function openModal(){
    if(token == false){
        token = true;
        document.getElementById("myModal").style.display = "block";
    }
    else{
        token = false;
        document.getElementById("myModal").style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
}