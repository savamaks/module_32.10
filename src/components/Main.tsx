import styled from "styled-components";
import FlightCard from "./FlightCart/FlightCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import filter from "./filter";
import ButtonContainer from "./ButtonContainer";
import SaidBar from "../components/SaidBar/SaidBar";
import { useMediaQuery } from "react-responsive";
import SaidBarMobile from "./SaidBarMobile/SaidBarMobile";
import { Ticket } from "./API/dataApi";
import{ selectAll, selectById, selectEntities, selectIds, selectTotal} from './reduxToolkit/sliceTodos'

const MainContainer = styled.main`
    width: 100%;
    padding: 20px;
    max-width: 1440px;
    display: grid;
    grid-template-areas:
        "a b b"
        "a c c"
        "a d d";
    gap: 29px;
    @media (max-width: 800px) {
        grid-template-areas: "b" "a" "c" "d";
        padding: 15px;
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

const Main = (): JSX.Element => {
    const [arrData, setArrData] = useState<Array<Ticket>>([]);
    const isDesktopOrLaptop = useMediaQuery({
        query: "(max-width: 800px)",
    });
    const { dataApi, stateTransplant, stateCompany, stateButton, status, error } = useSelector((state: any) => state.ticket);
    // const{}=useSelector((state:any=>state.))
    useEffect((): void => {
        const result = filter(dataApi, stateTransplant, stateCompany, stateButton);
        setArrData(result);
    }, [dataApi, stateTransplant, stateCompany, stateButton]);

    return (
        <MainContainer>
            <ButtonContainer />
            {!isDesktopOrLaptop ? <SaidBar /> : <SaidBarMobile />}
            <ResultsContainer>
                {status === "loading" && <h2>Идет загрузка...</h2>}
                {error === "error" && <h2>Произошла ошибка загрузки</h2>}
                {status === "true" &&
                    arrData.map((el: any, index: number): JSX.Element => {
                        return (
                            <div key={index}>
                                <FlightCard data={el} />
                            </div>
                        );
                    })}
            </ResultsContainer>
            <ButtonLoad>Загрузить еще билеты</ButtonLoad>
        </MainContainer>
    );
};

export default Main;
