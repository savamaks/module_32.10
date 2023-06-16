import { useDispatch, useSelector } from "react-redux";

import { SaidBarContainer,ChekedBox,Title,BoxInput,Input,InputCompany,Text } from "./style";

import { pobeda, s7Airlines, redWings, noTransplant, oneTransplant, twoTransplant, threeTransplant } from "../reduxToolkit/slice";


const Pobeda = "Победа";
const S7Airlines = "S7 Airlines";
const RedWings = "Red Wings";

const NotTransplant = "Без пересадки";
const OneTransplant = "1 пересадка";
const TwoTransplant = "2 пересадки";
const ThreeTransplant = "3 пересадки";

interface CompanyType {
    pobeda: boolean;
    s7Airlines: boolean;
    redWings: boolean;
}

const SaidBar = (): JSX.Element => {
    const dispatch = useDispatch();
    const transplant = useSelector((state) => state.reducer.stateTransplant);
    const company = useSelector((state) => state.reducer.stateCompany);

    return (
        <SaidBarContainer>
            <ChekedBox>
                <Title>Количество пересадок</Title>
                <BoxInput>
                    <Input
                        type="checkbox"
                        value={0}
                        checked={transplant.no}
                        onChange={() => {
                            dispatch(noTransplant());
                        }}
                        name="NO_TRANSPLANT"
                        id={NotTransplant}
                    />
                    <Text htmlFor={NotTransplant}>{NotTransplant}</Text>
                </BoxInput>
                <BoxInput>
                    <Input
                        type="checkbox"
                        value={1}
                        checked={transplant.one}
                        onChange={() => {
                            dispatch(oneTransplant());
                        }}
                        name="ONE_TRANSPLANT"
                        id={OneTransplant}
                    />
                    <Text htmlFor={OneTransplant}>{OneTransplant}</Text>
                </BoxInput>
                <BoxInput>
                    <Input
                        type="checkbox"
                        value={2}
                        checked={transplant.two}
                        onChange={() => {
                            dispatch(twoTransplant());
                        }}
                        name="TWO_TRANSPLANT"
                        id={TwoTransplant}
                    />
                    <Text htmlFor={TwoTransplant}>{TwoTransplant}</Text>
                </BoxInput>
                <BoxInput>
                    <Input
                        type="checkbox"
                        value={3}
                        checked={transplant.three}
                        onChange={() => {
                            dispatch(threeTransplant());
                        }}
                        name="THREE_TRANSPLANT"
                        id={ThreeTransplant}
                    />
                    <Text htmlFor={ThreeTransplant}>{ThreeTransplant}</Text>
                </BoxInput>
            </ChekedBox>
            <ChekedBox>
                <Title>Компании</Title>

                <BoxInput>
                    <InputCompany
                        onChange={() => {
                            dispatch(pobeda());
                        }}
                        checked={company.pobeda}
                        type="checkbox"
                        name="POBEDA"
                        id={Pobeda}
                    />
                    <Text htmlFor={Pobeda}>{Pobeda}</Text>
                </BoxInput>
                <BoxInput>
                    <InputCompany
                        onChange={() => {
                            dispatch(s7Airlines());
                        }}
                        checked={company.s7Airlines}
                        type="checkbox"
                        name="S7AIRLINES"
                        id={S7Airlines}
                    />
                    <Text htmlFor={S7Airlines}>{S7Airlines}</Text>
                </BoxInput>
                <BoxInput>
                    <InputCompany
                        onChange={() => {
                            dispatch(redWings());
                        }}
                        checked={company.redWings}
                        type="checkbox"
                        name="RED_WINGS"
                        id={RedWings}
                    />
                    <Text htmlFor={RedWings}>{RedWings}</Text>
                </BoxInput>
            </ChekedBox>
        </SaidBarContainer>
    );
};

export default SaidBar;
