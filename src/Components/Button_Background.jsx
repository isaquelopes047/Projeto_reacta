import React from 'react'

export default class ButtonBackground extends React.Component{
    render(){
        return(
        <div>
            <div className="container_backgrounds">
                <button onClick={background_black}><i class="bi bi-brightness-high"></i> </button>
                <button onClick={background_gradient}><i class="bi bi-brightness-high-fill"></i> </button>
            </div>

            <div class="alert-success" role="alert">
                <p><i class="bi bi-exclamation-circle-fill"></i> Background alterado com sucesso!</p>
            </div>
        </div>
        )
    }
}
function background_black(){
    document.body.style.background="linear-gradient(-45deg, #dbdbdb, #808080, #444849, #121516)";
    document.body.style.backgroundSize=" 400% 400%";
    document.body.style.animation = "gradient 15s ease infinite;"
    
    //ALERT
    var interval = setInterval(doStuff, 1);
        function doStuff() {
        document.querySelector(".alert-success").style.display = "block";
    clearInterval(interval);
    }
    var intervall = setInterval(doStufff, 3000);
        function doStufff() {
        document.querySelector(".alert-success").style.display = "none";
    clearInterval(intervall);
    }
}

function background_gradient(){
    document.body.style.background="linear-gradient(-45deg, #ee7752, #448597, #0d4f69, #002530)";
    document.body.style.backgroundSize=" 400% 400%";
    document.body.style.animation = "gradient 15s ease infinite;"

    //ALERT
    var interval = setInterval(doStuff, 1);
        function doStuff() {
        document.querySelector(".alert-success").style.display = "block";
    clearInterval(interval);
    }
    var intervall = setInterval(doStufff, 3000);
        function doStufff() {
        document.querySelector(".alert-success").style.display = "none";
    clearInterval(intervall);
    }
}