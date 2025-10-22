import React from "react";
import "./ProdutoCard";
import "../../estilos/div-centralizada.css";

export default class Modal extends React.Component{ // aula 26
    constructor(props){
        super(props);
        this.state = {visivel: this.props.visivel};
    }
    render(){
        return(
            <div className="div-centralizada" style={{position: "absolute", top: "0",   backgroundColor: "#3338"}} onClick={this.props.fecharModal()}>
                {this.props.children}
            </div>
        );
        
    }
}