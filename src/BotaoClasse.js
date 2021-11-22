import React from 'react';
import './BotaoClass.css';
class BotaoClass extends React.Component {

    showMessage = () => {
        alert("clicou");
      };


    render() {
        return (

            <button
            className= "botaoClass"
           

                onClick={this.showMessage}
        >        
            {this.props.children}
        </button>

        )
    }
}
export default BotaoClass;