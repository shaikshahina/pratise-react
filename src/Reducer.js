export const productReducer = (state,action) => {
    switch(action.type){
        case "ADD_TO_TODO":
            return [...state,action.payload]
        case "REMOVE":
            return [...state].filter(prod => prod !== action.payload)
        case "EDIT":
            return [...state].map(prod => prod !== action.payload)
        default:
            return state
    }
}