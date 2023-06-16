import styled from "styled-components";
import pobeda from "../icons/pobeda.svg";
import s7 from "../icons/s7.svg";
import rw from "../icons/rw.svg";
import { redactDuration } from "./redactDuration";

const FlightCardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 38px 38px 25px 38px;
    align-items: center;
    justify-content: center;
    background: #e8ebf2;
    border-radius: 10px;
    gap: 25px;
`;

const Price = styled.p`
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #4e148c;
`;
const Label = styled.img`
    text-align: end;
    width: 200px;
    height: 26px;
`;
const BlockText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0 150px;
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
`;

const Title = styled.h2`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #858ae3;
`;
const Text = styled.p`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #4e148c;
`;



const FlightCard = ({ data }: any) => {

    const duration = redactDuration(data.duration);
    const fromText = data.from.slice(0,3).toUpperCase()
    const toText = data.to.slice(0,3).toUpperCase()
    let imageCompany 
    if(data.company ==='Победа'){
        imageCompany = pobeda
    } else if(data.company ==='Red Wings'){
        imageCompany = rw
    } else if(data.company ==='S7 Airlines'){
        imageCompany = s7
    }
    return (
        <FlightCardDiv>
            <BlockText>
                <Price>{data.price} Р</Price>

                <Label src={imageCompany} alt={data.company} />
            </BlockText>

            <BlockText>
                <Box>
                    <Title>
                        {fromText}-{toText}
                    </Title>
                    <Text>
                        {data.time.startTime}-{data.time.endTime}
                    </Text>
                </Box>
                <Box>
                    <Title>В пути</Title>
                    <Text>{duration}</Text>
                </Box>
                <Box>
                    <Title>Пересадки</Title>
                    <Text>
                        {data.transplant > 0
                            ? `${data.transplant > 1 ? `${data.transplant} пересадки` : `${data.transplant} пересадка`}`
                            : "Без пересадок"}
                    </Text>
                </Box>
            </BlockText>
        </FlightCardDiv>
    );
};

export default FlightCard;
