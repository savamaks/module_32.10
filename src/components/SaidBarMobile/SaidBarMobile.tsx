import { useDispatch, useSelector } from "react-redux";
import {
    addPanelTransplant,
    addPanelNameCompany,
    noTransplant,
    oneTransplant,
    twoTransplant,
    threeTransplant,
    pobeda,
    s7Airlines,
    redWings,
} from "../reduxToolkit/slice";
import arrowBottom from "../icons/arrowBottom.svg";
import { useEffect, useState } from "react";
import { Container, Box, TitleBox, Title, Text, CheckedBox, BoxInput, InputCompany, Button, Block, Input } from "./style";
import { useMediaQuery } from "react-responsive";

const Pobeda = "Победа";
const S7Airlines = "S7 Airlines";
const RedWings = "Red Wings";

const NotTransplant = "Без пересадки";
const OneTransplant = "1 пересадка";
const TwoTransplant = "2 пересадки";
const ThreeTransplant = "3 пересадки";

const SaidBarMobile = (): JSX.Element => {
    const [panel, setPanel] = useState(false);

    const dispatch = useDispatch();
    const {stateTransplant,stateCompany,companyActive,transplantActive} = useSelector((state: any) => state.ticket);

    const isDesktopOrLaptop = useMediaQuery({
        query: "(max-width: 600px)",
    });

    const addPanel = ():void => {
        setPanel((prev):boolean => !prev);
    };

    useEffect(():void => {
        let arrCompany: Array<string> = [];

        if (stateCompany.pobeda) {
            arrCompany.push("Победа");
        }
        if (stateCompany.s7Airlines) {
            arrCompany.push("S7 Airlines");
        }
        if (stateCompany.redWings) {
            arrCompany.push("red Wings");
        }
        if (arrCompany.length > 0) {
            dispatch(addPanelNameCompany(arrCompany.join(", ")));
        } else {
            dispatch(addPanelNameCompany("Не выбрана авиакомпания, "));
        }
    }, [stateCompany]);

    useEffect(():void => {
        let arrCompany: Array<string> = [];

        if (stateTransplant.no) {
            arrCompany.push("0");
        }
        if (stateTransplant.one) {
            arrCompany.push("1");
        }
        if (stateTransplant.two) {
            arrCompany.push("2");
        }
        if (stateTransplant.three) {
            arrCompany.push("3");
        }
        if (arrCompany.length > 0) {
            dispatch(addPanelTransplant("пересадок: " + arrCompany.join(", ")));
        } else {
            dispatch(addPanelTransplant("не выбрано колличество пересадок"));
        }
    }, [stateTransplant]);
    return (
        <Container>
            <Box>
                <TitleBox>
                    {companyActive} {transplantActive}
                </TitleBox>
                <Button onClick={addPanel}>
                    {!isDesktopOrLaptop && "Открыть настройки"} <img src={arrowBottom} alt="" />
                </Button>
            </Box>

            {panel && (
                <Block>
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
                </Block>
            )}
        </Container>
    );
};

export default SaidBarMobile;
