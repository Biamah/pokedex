import styled from "styled-components";
import CardPokemon from "../cardPokemon/CardPokemon";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
    row-gap: 20px;
    width: 100%;
`

function CardsPokemon() {
    return ( 
        <Container>
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
        </Container>
     );
}

export default CardsPokemon;