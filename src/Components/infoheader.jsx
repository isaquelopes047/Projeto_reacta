import React from 'react'


function open(){
    document.querySelector(".modal_info");
    document.querySelector(".modal_info").style.display = "block";
    document.querySelector(".modal_info").style.width = "1s";
}
function close(){
    document.querySelector(".modal_info");
    document.querySelector(".modal_info").style.display = "none";
}
function background_black(){
    document.body.style.background="#333";
}
function background_gradient(){
    document.body.style.background=" linear-gradient(-45deg, #ee7752, #448597, #0d4f69, #002530)";
    document.body.style.backgroundSize=" 400% 400%";
    document.body.style.animation = "gradient 15s ease infinite;"
}

export default class Infodiaria extends React.Component{
    render(){
        return(
            <div className="Container_indo_header"> 


            <div className="container_backgrounds">
                <button onClick={background_black}><i class="bi bi-brightness-high-fill"></i> </button>
                <button onClick={background_gradient}><i class="bi bi-brightness-high"></i> </button>
            </div>

                <button onClick={open} className="button_info_diarias"><i class="bi bi-grid-3x2-gap-fill"></i></button>
                    
                <div className="modal_info">
                    <div className="slidto" onClick={close}><i class="bi bi-x-circle-fill"> </i></div>
                        <div className="container_info_diaria">
                            <h4>Tabela de Diária </h4>
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
                            <p> <i class="bi bi-tags-fill"></i> 721,60 - 11 Diária</p>
                            <p> <i class="bi bi-tags-fill"></i> 787,20 - 12 Diárias</p>
                            <p> <i class="bi bi-tags-fill"></i> 852,80 - 13 Diárias</p>
                            <p> <i class="bi bi-tags-fill"></i> 918,40 - 14 Diárias</p>
                            <p> <i class="bi bi-tags-fill"></i> 984,00 - 15 Diárias</p>
                            <p> <i class="bi bi-tags-fill"></i> 1.049,60 - 16 Diárias</p>
                            <p> <i class="bi bi-tags-fill"></i> 1.115,20 - 17 Diárias</p>
                            <p> <i class="bi bi-tags-fill"></i> 1.180,80 - 18 Diárias</p>
                            <p> <i class="bi bi-tags-fill"></i> 1.246,40 - 19 Diárias</p>
                            <p> <i class="bi bi-tags-fill"></i> 1.312,00 - 20 Diárias</p>
                        </div>
                    </div>
                </div>
        )
    }
}
