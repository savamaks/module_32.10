import styled from "styled-components";
import airplan from "../components/icons/airplan.svg";

const HeaderContainer = styled.header`
    display: flex;
    flex: 100%;
    align-items: center;
    padding-top: 50px;
    margin-left: 10%;
    @media (max-width: 800px) {
        justify-content: center;
    }
`;
const Title = styled.h1`
    @media (max-width: 800px) {
        display: none;
    }
    margin-left: 34px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #4e148c;
`;
const Image = styled.img``;
const Header = ():JSX.Element => {
    return (
        <HeaderContainer>
            <Image src={airplan} alt="airplan" />
            <Title>Поиск авиабилетов</Title>
        </HeaderContainer>
    );
};

export default Header;
