import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSpells, getCurSpell } from "../actions";

const SpellList = ({ match, spells, getSpells, getCurSpell, isFetching, error }) => {

    React.useEffect(() => {
        if(spells.length === 0) getSpells(match.params.classes);
    }, [spells, getSpells, match.params.classes]);

    return (
        <div>
            <h2>{match.params.classes[0].toUpperCase() + match.params.classes.slice(1)} Spell List - ({spells.length} Spells) </h2>
            {
                !isFetching ?
                    error === "" ?
                        spells.map(spell => <li key = {spell.index}><Link to = {`/spells/${spell.index}`} onClick = {() => getCurSpell(spell.index)}>{spell.name}</Link></li>)
                    :
                        <p>{error}</p>
                : 
                <p>Loading...</p>

            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        spells: state.spells,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSpells, getCurSpell})(SpellList);