import styled from "styled-components";
import bulbasaur from "../../assets/bulbasaur.png";

const Card = styled.div`
    border: 1px solid #74CB48;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    max-width: 104px;
    width: max-content;
`
const NumberPokemon = styled.span`
    color: #74CB48;
    font-size: 8px;
    font-weight: 400;
    line-height: 1.5;
    margin-right: 12px;
    margin-top: 5px;
    text-align: right;
`
const NamePokemon = styled.h3`
    background-color: #74CB48;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
    padding: 4px 8px;
`

const ImagePokemon = styled.img`
    object-fit: scale-down;
    transform: rotate(39deg);
`

function CardPokemon() {
    return ( 
        <Card>
            <NumberPokemon>#001</NumberPokemon>
            <ImagePokemon src={bulbasaur} />
            <NamePokemon>Bulbasaur</NamePokemon>
        </Card>
     );
}

export default CardPokemon;