import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SPELLS_SUCCESS = "FETCH_SPELLS_SUCCESS";
export const FETCH_CURSPELL_SUCCESS = "FETCH_CURSPELL_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getSpells = (characterClass) => dispatch => {
    dispatch({ type: FETCH_START });

    axios.get(`http://www.dnd5eapi.co/api/classes/${characterClass}/spells`)
        .then(res => {
            //console.log("cea: actions/index.js: getSpellsData: FETCH_SPELLS_SUCCESS: res.results: ", res.data.results);

            dispatch({
                type: FETCH_SPELLS_SUCCESS,
                payload: res.data.results
            });
        })
        .catch(err => {
            //console.log("cea: actions/index.js: getSpellsData: FETCH_FAILURE: err.message: ", err.message);

            dispatch({
                type: FETCH_FAILURE,
                payload: err.message
            })
        });
}

export const getCurSpell = (index) => dispatch => {
    dispatch({ type: FETCH_START });

    axios.get(`http://www.dnd5eapi.co/api/spells/${index}`)
        .then(res => {
            console.log("cea: actions/index.js: getCurSpell: FETCH_CURSPELL_SUCCESS: res.data: ", res.data);

            dispatch({
                type: FETCH_CURSPELL_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log("cea: actions/index.js: getCurSpell: FETCH_FAILURE: err.message: ", err.message);

            dispatch({
                type: FETCH_FAILURE,
                payload: err.message
            })
        });
}
