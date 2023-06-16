import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { cheap, fast, optimal } from "./reduxToolkit/slice";

const Container = styled.div`
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
    background-color: ${(props) => props.bg_image};
`;

const ButtonContainer = (): JSX.Element => {
    const dispatch = useDispatch();

    const sortPrice = (): void => {
        dispatch(cheap());
    };

    const sortTransplant = () => {
        dispatch(optimal());
    };

    const sortFast = () => {
        dispatch(fast());
    };

    const stateButton = useSelector((state) => state.reducer.stateButton);
    return (
        <Container>
            <Button
                bg_image={stateButton === "cheap" ? "#4e148c" : "#e8ebf2"}
                color={stateButton === "cheap" ? "#f7f9f7" : "inherit"}
                onClick={sortPrice}
            >Самый дешевый</Button>
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
