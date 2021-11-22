import Botao from "./components/Botao/Botao";
import BotaoClasse from "./BotaoClasse";

const Cliente = ({ nome, idade }) => {
    const divStyle = {
        backgroundColor: 'aqua',
        border: "3px solid red",
        margin: "15px"

    };

    return (
        <div style={divStyle}>

        <h1>Dados do Cliente</h1>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>


        <Botao>Cadastrar</Botao>
        <Botao>Editar</Botao>
        <BotaoClasse>Deletar</BotaoClasse>
        </div>
    )
}

export default Cliente;