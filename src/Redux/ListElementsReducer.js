const SET_ENTITY_LABEL_PAGES = 'SET_ENTITY_LABEL_PAGES'

let initialState = {
    entityLabelPages: [
        // {label: 'first', id: 1, more: 'hi'}
    ]
}

const ListElementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ENTITY_LABEL_PAGES:
            return {
                ...state,
                entityLabelPages: action.entityLabelPages
            }
        default:
            return state;
    }
}

export const setLabelPages = (entityLabelPages) => ({type:SET_ENTITY_LABEL_PAGES ,entityLabelPages});

export default ListElementsReducer;

window.state = initialState