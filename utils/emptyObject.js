export const emptyObject =(getObject)=>{
    return Object.keys(getObject).length === 0 && getObject.constructor === Object
}