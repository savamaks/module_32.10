// import { useState } from 'react'
import styled from "styled-components";
import Main from "./components/Main";
import Header from "./components/Header";
import { fetchTicket } from "./components/API/fakeAPI";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const AppContainer = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 20px 50px;
`;
function App(): JSX.Element {
    const dispatch = useDispatch();


    useEffect((): void => {
        dispatch(fetchTicket());
    }, []);

    return (
        <AppContainer>
            <Header />
            <Main />
        </AppContainer>
    );
}

export default App;
