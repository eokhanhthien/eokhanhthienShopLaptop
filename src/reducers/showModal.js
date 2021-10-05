import * as Types from "./../constants/ActionType"


const InitialState = {
    isShowFavorite:false,
}
const showModal = (state = InitialState, action) => {
    switch (action.type) {
        case Types.SHOW_MODAL_FAVORITE:
            return {...state,  isShowFavorite: !state.isShowFavorite}

        default:
            return state
    }
}

export default showModal;