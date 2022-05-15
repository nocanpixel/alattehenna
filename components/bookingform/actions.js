const  updateActions = (state, payload) => {
    return {
        ...state,
        ...payload
    }
}


const clearActions = (state, payload) => {
    return {}
}


export { updateActions, clearActions }