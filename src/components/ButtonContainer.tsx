import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {  cheap, fast, optimal } from "./reduxToolkit/slice";
import {RootState} from './reduxToolkit/index'

const Container = styled.div`
    width: 100%;

    grid-area: b;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    & button:nth-child(1) {
        border-radius: 10px 0px 0px 10px;
    }

    & button:nth-child(3) {
        border-radius: 0px 10px 10px 0px;
    }
`;
const Button = styled.button<{ bg_image: string; color: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    flex: 1;
    cursor: pointer;
    padding: 18px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.color};
    border: 1px solid #4e148c;
    background-color: ${(props):string => props.bg_image};
    @media (max-width: 600px) {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
    }
`;

const ButtonContainer = (): JSX.Element => {
    const dispatch = useDispatch();

    const sortPrice = (): void => {
        dispatch(cheap());
    };

    const sortTransplant = ():void => {
        dispatch(optimal());
    };

    const sortFast = ():void => {
        dispatch(fast());
    };

    const {stateButton} = useSelector((state:TypedUseSelectorHook<RootState>) => state.ticket);
    return (
        <Container>
            <Button
                bg_image={stateButton === "cheap" ? "#4e148c" : "#e8ebf2"}
                color={stateButton === "cheap" ? "#f7f9f7" : "inherit"}
                onClick={sortPrice}
            >
                Самый дешевый
            </Button>
            <Button
                bg_image={stateButton === "fast" ? "#4e148c" : "#e8ebf2"}
                color={stateButton === "fast" ? "#f7f9f7" : "inherit"}
                onClick={sortFast}
            >
                Самый быстрый
            </Button>
            <Button
                bg_image={stateButton === "optimal" ? "#4e148c" : "#e8ebf2"}
                color={stateButton === "optimal" ? "#f7f9f7" : "inherit"}
                onClick={sortTransplant}
            >
                Самый оптимальный
            </Button>
        </Container>
    );
};

export default ButtonContainer;
