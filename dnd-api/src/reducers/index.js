import {
    FETCH_START,
    FETCH_SPELLS_SUCCESS,
    FETCH_CURSPELL_SUCCESS,
    FETCH_FAILURE
} from "../actions";

const initialState = {
    spells: [],
    curSpell: {},
    isFetching: false,
    error: ""
};

export function fetchReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SPELLS_SUCCESS:
            return {
                ...state,
                spells: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCH_CURSPELL_SUCCESS:
            return {
                ...state,
                curSpell: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
}