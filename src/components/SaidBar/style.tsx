import styled from 'styled-components';
import galochka from "../icons/galochka.svg";
import circle from '../icons/circle.svg'

export const SaidBarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 47px;
    flex: 100%;
    grid-area: a;
    
`;
export const ChekedBox = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 272px;
    background: #e8ebf2;
    border-radius: 10px;
    padding: 18px;
`;

export const Title = styled.h2`
    margin-bottom: 27px;
    align-self: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #4e148c;
`;
export const Text = styled.label`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #858ae3;
`;
export const BoxInput = styled.div`
    margin: 0 0 21px 45px;
`;
export const Input = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;
    & + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    & + label::before {
        box-sizing: border-box;
        content: "";
        display: inline-block;
        width: 21px;
        height: 21px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 4px;
        margin-right: 19px;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &:checked + label::before {
        border: 1px solid #4e148c;
        background-image: url(${galochka});
    }
`;

export const InputCompany = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;

    & + label {
        display: inline-flex;
        align-items: center;
    }
    & + label::before {
        box-sizing: border-box;
        content: "";
        display: inline-block;
        width: 21px;
        height: 21px;

        border: 1px solid #adb5bd;
        border-radius: 50%;
        margin-right: 19px;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &:checked + label::before {
        background-image: url(${circle});

    }
`;