import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #222226;
    padding: 20px;
    box-shadow: 3px 6px 10px 6px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    box-sizing: border-box;
    color: #fff;

    h1 {
        color:#07D962
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    button:hover{
        background: #07D962;
        color: #fff;
    }
`

export const ClickButton = styled.button`
    margin-top:20px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    border:none;
    border-radius: 5px;
    margin-top: 15px;
    background: #7155D9;
    box-shadow: 0px 3px 6px rgba(119, 119, 119, .1);
    padding: 10px 15px;
    outline: none;
    cursor: pointer;
    
`