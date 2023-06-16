export const sortPrice = (data:any):Array<object> => {
    return  data.sort((a: any, b: any) => (+a.price > +b.price ? 1 : -1))
}

export const sortOptimal = (data:any):Array<object> => {
    return  data.sort((a: any, b: any) => (+a.transplant  > +b.transplant  ? 1 : -1))
}

export const sortFast = (data:any):Array<object> => {
    return  data.sort((a: any, b: any) => (+a.duration  > +b.duration  ? 1 : -1))
}