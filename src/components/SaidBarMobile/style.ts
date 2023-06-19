import styled from "styled-components";
import circle from "../icons/circleWhite.svg";
import galochka from "../icons/galWhite.svg";

export const Container = styled.nav`
        grid-area: a;
    display: flex;
    background: #4e148c;
    border-radius: 10px;
    padding: 16px 24px;
    color: white;
    flex-direction: column;
`;

export const CheckedBox = styled.form`
    display: flex;
    flex-direction: column;
    gap: 21px;
`;

export const TitleBox = styled.h2`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #f7f9f7;
`;
export const Title = styled.h2`
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #f7f9f7;
`;
export const Text = styled.label`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #f7f9f7;
`;
export const BoxInput = styled.div``;
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
        border: 1px solid #f7f9f7;
        border-radius: 4px;
        margin-right: 19px;
        background-repeat: no-repeat;
        background-position: center center;
    }
    &:checked + label::before {
        border: 1px solid #f7f9f7;
        background-image: url(${galochka});
        background-position: center center;
        background-size: contain;
    }
`;
export const Button = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 17px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #f7f9f7;
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

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Block = styled.div`
    padding: 18px 0 45px;
    display: flex;
    gap: 66px;
`;
