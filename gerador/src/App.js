import React from 'react'
import HomePage from './components/HomePage/HomePage'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  
  background-color: #121214;
`

const App = () => {

  return (
    <AppContainer>
      <HomePage/>
    </AppContainer>
  );
}

export default App;
