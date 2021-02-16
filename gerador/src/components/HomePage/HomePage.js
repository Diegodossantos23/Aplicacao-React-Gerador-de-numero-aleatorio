import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { ButtonContainer, HomeContainer,ClickButton} from './StyledHomePage';


const HomePage = () => {

    const [ numeroAleatorio, setNumeroAleatorio ] = useState(1);

    const gerarNumeroAleatorio = () => {
      const novoNumero = Math.floor(Math.random() * (100-1) + 1);
      setNumeroAleatorio(novoNumero);
    }

    return(
        <HomeContainer>
            <h3>Número aleatório:</h3>
             <h1><strong>$</strong> {numeroAleatorio}</h1>

            <ButtonContainer>
                <label>
                Click no botão abaixo para gerar um número aleatório:
                </label>

                <ClickButton
                variant="contained" 
                color="primary" 
                onClick={gerarNumeroAleatorio}>
                    Gerar número
                </ClickButton>
                
            </ButtonContainer>
        </HomeContainer>
    )
}
export default HomePage