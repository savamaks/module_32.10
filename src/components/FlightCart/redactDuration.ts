
//коректировка времени в пути
export const redactDuration = (value: number):string => {

    const arrDuration = String(value / 60).split(".");

    let duration: string;

    let elArrMinutes: any = arrDuration[1]?.split("");

    if (elArrMinutes && elArrMinutes.length > 2) {

        elArrMinutes.unshift("0.");

        const minutes = String(Math.round(+elArrMinutes.join("") * 60));

        duration = String(arrDuration[0]) + "ч " + minutes + "мин";

    } else duration = String(arrDuration[0]) + "ч ";

    return duration;
};
