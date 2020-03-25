import React from "react"

//import styles from "../../assets/styles/components/homeheader.modules.scss"
import styles from "../../assets/styles/main.scss"
import logo from "../../images/logo-color-salmon_1b.svg"
import logofood from "../../images/symbol-avocado.png"

const HomeHeader = () => {
      
    return (
        <div className="divHomeHeader">
            <div className="divHomeHeaderTopContainer">
                <div className="divHomeHeaderTitle">
                    <img className="imgHeader" src={logo}/>
                </div>
                <div className="divHomeHeaderButton">
                    Cadastrar
                </div>
            </div>
 
            <div className="divHomeHeaderSubtitle">
                Todas as formas de pedir dos seus lugares favoritos.
            </div>
            <div className="divHomeHeaderBottomContainer">
                <div className="divHomeHeaderPlace">
                    <a href="#" className="aPlace">São Paulo, SP</a><br/>
                    <div className="divHomeHeaderPlaceSubtitle">
                        172 lugares que não vamos deixar fechar
                    </div>
                </div>
                <div className="divHomeHeaderImg">
                    <img className="imgHeader" src={logofood}/>
                </div>
            </div>
        </div>
    )
  
  }
  
  export default HomeHeader