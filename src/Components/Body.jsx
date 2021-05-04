import React from 'react'
import $ from 'jquery';



const DiariaCompleta = 65.60;

    function diaria(){
        var DiariasdaViagem = document.querySelector(".Num1").value;
        var result = Number(DiariasdaViagem)/DiariaCompleta;

        if(result === 0 || result < 0){
            document.querySelector(".info").innerHTML = `:(`
            document.querySelector(".info").style.color = "rgb(161, 20, 20)";
            document.querySelector(".alert").style.display = "block"
        }else if(result > 0){
            document.querySelector(".info").innerHTML = `FORAM ${result.toFixed(1)} DIAS TRABALHADOS`;
            document.querySelector(".info").style.color = "rgb(15, 128, 11)";
            document.querySelector(".alert").style.display = "none"
        }
    }

    export default class BodyApp extends React.Component{

    constructor(props) {
        super(props)
        this._toggleDiv = this._toggleDiv.bind(this)
      }
      _toggleDiv() {
        $(this.refs['toggle-div']).slideToggle()
      }

    render(){
        return(
        <div className="Container_body">

                <div className="container_button">
                    <button ><i class="fa fa-bars" aria-hidden="true" onClick={this._toggleDiv} ></i></button>
                </div>

                <div className="Container_content" ref="toggle-div">
                    <p> DIGITE O VALOR DAS DIARIAS DA VIAGEM... </p>

                    <input type="number" placeholder="R$" className="Num1"/> 

                    <button onClick={diaria}><i class="fa fa-play" aria-hidden="true"></i></button>

                    <div class="alert alert-danger" role="alert">
                        <i class="bi bi-exclamation-circle-fill"></i> Você digitou um valor negativo ou um valor igual a zero!
                    </div>

                    <div className="Container_info">
                        <div className="Container_info_botton">
                            <span className="info"> </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
