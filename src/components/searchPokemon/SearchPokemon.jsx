import styled from "styled-components";

const Input = styled.input`
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    color: #666666;
    font-family: Poppins;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.6;
    text-align: center;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 90%;
`

function SearchPokemon() {
    return ( 
        <Input type="text" placeholder="Procurar" />
    );
}

export default SearchPokemon;