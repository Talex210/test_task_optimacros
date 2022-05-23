const SET_ENTITY_LABEL_PAGES = 'SET_ENTITY_LABEL_PAGES'

let initialState = {
    entityLabelPages: [
        // {label: 'first', id: 1, more: 'hi'}, {label: 'second', id: 2, more: 'hi hi'}
    ]
}

const ListElementsReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case SET_ENTITY_LABEL_PAGES:
            return {
                ...state,
                entityLabelPages: action.labelPages
            }
        default:
            return state;
    }
}

export const setLabelPages = (labelPages) => ({type:SET_ENTITY_LABEL_PAGES, labelPages});

export default ListElementsReducer;