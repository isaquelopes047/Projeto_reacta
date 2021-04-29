import React from 'react'


function open(){
    document.querySelector(".modal_info");
    document.querySelector(".modal_info").style.display = "block";
    document.querySelector(".Container_body").style.opacity = "0.5";
}
function close(){
    document.querySelector(".modal_info");
    document.querySelector(".modal_info").style.display = "none";
    document.querySelector(".Container_body").style.opacity = "";
}

class Infodiaria extends React.Component{

    render(){
        return(
            
            <div className="Container_indo_header"> 

                <button onClick={open}><i class="bi bi-chat-right-text-fill"> </i></button>
                    
                <div className="modal_info">
                    <div className="slidto" onClick={close}><i class="bi bi-x-circle-fill"> </i></div>
                <div className="container_info_diaria">
                    <p> <i class="bi bi-tags-fill"></i> 65,60 - 1 Diária</p>
                    <p> <i class="bi bi-tags-fill"></i> 131,20 - 2 Diárias</p>
                    <p> <i class="bi bi-tags-fill"></i> 196,80 - 3 Diárias</p>
                    <p> <i class="bi bi-tags-fill"></i> 262,40 - 4 Diárias</p>
                    <p> <i class="bi bi-tags-fill"></i> 328,00 - 5 Diárias</p>
                    <p> <i class="bi bi-tags-fill"></i> 393,60 - 6 Diárias</p>
                    <p> <i class="bi bi-tags-fill"></i> 459,20 - 7 Diárias</p>
                    <p> <i class="bi bi-tags-fill"></i> 524,80 - 8 Diárias</p>
                    <p> <i class="bi bi-tags-fill"></i> 590,40 - 9 Diárias</p>
                    <p> <i class="bi bi-tags-fill"></i> 656,00 - 10 Diárias</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Infodiaria;