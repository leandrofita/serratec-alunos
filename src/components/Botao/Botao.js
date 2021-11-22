import { BotaoEstilo } from "./Styles";

const Botao = (props) => {

    const showMessage = () => {
        alert("clicou");
      };

      const divSytle = {
        backgroundColor: "c2c2c2",
        color: "white", 
        width: "250px", 
        height: "80px" 
        }
    return (
        <button
            style={divSytle}
        
            onClick={showMessage}
            
            >
        
            {props.children}

        </button>
    )
}
export default Botao;