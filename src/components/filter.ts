import {sortPrice,sortOptimal,sortFast} from "./sort";

const filter = (data: any, stateTransplant: any, stateCompany: any, stateButton: any)=> {
    const resultTransplant: Array<object> = [];
    const result: Array<object> = [];

    data.map((el: any):void => {
        if (stateTransplant.no && el.transplant === 0) {
            resultTransplant.push(el);
        } else if (stateTransplant.one && el.transplant === 1) {
            resultTransplant.push(el);
        } else if (stateTransplant.two && el.transplant === 2) {
            resultTransplant.push(el);
        } else if (stateTransplant.three && el.transplant === 3) {
            resultTransplant.push(el);
        }
    });

    resultTransplant.map((el: any):void => {
        if (stateCompany.pobeda && el.company === "Победа") {
            result.push(el);
        } else if (stateCompany.s7Airlines && el.company === "S7 Airlines") {
            result.push(el);
        } else if (stateCompany.redWings && el.company === "Red Wings") {
            result.push(el);
        }
    });

    if (stateButton === "cheap") {
        return sortPrice(result);
    } else if(stateButton === "fast"){
        return sortFast(result)
    } else if(stateButton === "optimal"){
        return sortOptimal(result)
    }
};

export default filter;
