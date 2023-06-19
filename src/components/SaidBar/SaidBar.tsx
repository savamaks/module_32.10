import { useDispatch, useSelector } from "react-redux";

import { SaidBarContainer,CheckedBox,Title,BoxInput,Input,InputCompany,Text } from "./style";

import { pobeda, s7Airlines, redWings, noTransplant, oneTransplant, twoTransplant, threeTransplant } from "../reduxToolkit/slice";


const Pobeda = "Победа";
const S7Airlines = "S7 Airlines";
const RedWings = "Red Wings";

const NotTransplant = "Без пересадки";
const OneTransplant = "1 пересадка";
const TwoTransplant = "2 пересадки";
const ThreeTransplant = "3 пересадки";



const SaidBar = (): JSX.Element => {
    const dispatch = useDispatch();
    const {stateTransplant,stateCompany} = useSelector((state:any) => state.ticket);
    

    return (
        <SaidBarContainer>
            <CheckedBox>
                <Title>Количество пересадок</Title>
                <BoxInput>
                    <Input
                        type="checkbox"
                        value={0}
                        checked={stateTransplant.no}
                        onChange={():void => {
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
                        checked={stateTransplant.one}
                        onChange={():void => {
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
                        checked={stateTransplant.two}
                        onChange={():void => {
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
                        checked={stateTransplant.three}
                        onChange={():void => {
                            dispatch(threeTransplant());
                        }}
                        name="THREE_TRANSPLANT"
                        id={ThreeTransplant}
                    />
                    <Text htmlFor={ThreeTransplant}>{ThreeTransplant}</Text>
                </BoxInput>
            </CheckedBox>
            <CheckedBox>
                <Title>Компании</Title>

                <BoxInput>
                    <InputCompany
                        onChange={():void => {
                            dispatch(pobeda());
                        }}
                        checked={stateCompany.pobeda}
                        type="checkbox"
                        name="POBEDA"
                        id={Pobeda}
                    />
                    <Text htmlFor={Pobeda}>{Pobeda}</Text>
                </BoxInput>
                <BoxInput>
                    <InputCompany
                        onChange={():void => {
                            dispatch(s7Airlines());
                        }}
                        checked={stateCompany.s7Airlines}
                        type="checkbox"
                        name="S7AIRLINES"
                        id={S7Airlines}
                    />
                    <Text htmlFor={S7Airlines}>{S7Airlines}</Text>
                </BoxInput>
                <BoxInput>
                    <InputCompany
                        onChange={():void => {
                            dispatch(redWings());
                        }}
                        checked={stateCompany.redWings}
                        type="checkbox"
                        name="RED_WINGS"
                        id={RedWings}
                    />
                    <Text htmlFor={RedWings}>{RedWings}</Text>
                </BoxInput>
            </CheckedBox>
        </SaidBarContainer>
    );
};

export default SaidBar;
