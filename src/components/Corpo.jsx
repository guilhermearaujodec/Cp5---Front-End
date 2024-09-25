import styled from "styled-components"

const MainCorpo = styled.main`
    flex-grow: 1;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    div {
        width: 30%;
        max-width: 250px;
        padding: 15px;
        flex-direction: column;
        align-items: center;
        border: 2px solid #333;
        border-radius: 20px;
        box-shadow: 5px 5px 5px #333;
        margin-bottom: 20px;
    }

    img {
        max-width: 100%;
    }

    h2,p,img {
        margin-bottom: 5px;
    }
`

export default function Corpo(){

    const pizzas = [
        {foto: 'pizza1.jpg', nome: 'Napolitana', ingred: 'Queijo, Tomate e Orégano', preco: 37},
        {foto: 'pizza2.jpg', nome: 'Portuguesa', ingred: 'Queijo, Tomate e Orégano', preco: 37},
        {foto: 'pizza3.jpg', nome: 'Mussarela', ingred: 'Queijo, Tomate e Orégano', preco: 37},
        {foto: 'pizza4.jpg', nome: 'Calabresa', ingred: 'Queijo, Tomate e Orégano', preco: 37},
        {foto: 'pizza5.webp', nome: 'Marguerita', ingred: 'Queijo, Tomate e Orégano', preco: 37},
        {foto: 'pizza6.jpg', nome: 'Brócolis', ingred: 'Queijo, Tomate e Orégano', preco: 37}
    ]

    return (
        <MainCorpo>
            {
                pizzas.map((p,i)=>(
                    <div className={p.nome} key={i}>
                        <h2>{p.nome}</h2>
                        <img src={p.foto} alt={p.nome} />
                        <p>{p.ingred}</p>
                        <p>R$ {p.preco},00</p>
                    </div>
                ))

            }
        </MainCorpo>
    )
}