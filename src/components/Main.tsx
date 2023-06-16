import styled from "styled-components";
import FlightCard from "./FlightCart/FlightCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import filter from "./filter";
import ButtonContainer from "./ButtonContainer";
import SaidBar from "../components/SaidBar/SaidBar";

const MainContainer = styled.main`
    display: grid;
    grid-template-areas:
        "a b b"
        "a c c"
        "a d d";
    gap: 29px;
    @media (max-width: 768px) {
        grid-template-areas: 'b' 'a' 'c' 'd';
    }
`;
const ResultsContainer = styled.div`
    grid-area: c;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;
const ButtonLoad = styled.button`
    height: 62px;
    grid-area: d;
    cursor: pointer;
    padding: 16px 0;
    background: #4e148c;
    border-radius: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #f7f9f7;
`;

const Main = () => {
    const [arrData, setArrData] = useState([]);
    const dataApi = useSelector((state) => state.reducer.ticket);

    const stateTransplant = useSelector((state) => state.reducer.stateTransplant);
    const stateCompany = useSelector((state) => state.reducer.stateCompany);
    const stateButton = useSelector((state) => state.reducer.stateButton);

    useEffect(() => {
        const result = filter(dataApi, stateTransplant, stateCompany, stateButton);
        setArrData(result);
    }, [dataApi, stateTransplant, stateCompany, stateButton]);

    return (
        <MainContainer>
            <ButtonContainer />
            <SaidBar />
            <ResultsContainer>
                {arrData.length > 0
                    ? arrData.map((el: any, index: number) => {
                          return (
                              <div key={index}>
                                  <FlightCard data={el} />
                              </div>
                          );
                      })
                    : ""}
            </ResultsContainer>
            <ButtonLoad>Загрузить еще билеты</ButtonLoad>
        </MainContainer>
    );
};

export default Main;
