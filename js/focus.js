document.onkeydown = function (e) {
    if( e.key == "Tab" ){
        document.querySelector("#focus").textContent = "*:focus{outline:0.4rem solid red;}"
    }
};