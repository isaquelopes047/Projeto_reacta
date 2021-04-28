import React from 'react'

const DiariaCompleta = 65.60;

    function diaria(){
        var DiariasdaViagem = document.querySelector(".Num1").value;
        var result = Number(DiariasdaViagem)/DiariaCompleta;

        if(result === 0 || result < 0){
            document.querySelector(".info").innerHTML = `ERRO: VOCÊ INSERIU UM VALOR IGUAL A ZERO OU NEGATIVO`
            document.querySelector(".info").style.color = "rgb(161, 20, 20)";
        }else if(result > 0){
            document.querySelector(".info").innerHTML = `O MOTORISTA TRABALHOU ${result.toFixed(1)} DIAS`;
            document.querySelector(".info").style.color = "rgb(15, 128, 11)";
        }
    }

class BodyApp extends React.Component{
    render(){
        return(
        <div className="Container_body">

                <div className="container_button">
                    <button ><i class="fa fa-bars" aria-hidden="true"></i>  </button>
                </div>

                <div className="Container_content">
                    <p> DIGITE O VALOR TOTAL DAS DIARIAS DA VIAGEM </p>

                    <input type="number" placeholder="R$" className="Num1"/> 

                    <button onClick={diaria}><i class="fa fa-play" aria-hidden="true"></i></button>

                    <div className="Container_info">
                        <span className="info"> </span>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BodyApp;