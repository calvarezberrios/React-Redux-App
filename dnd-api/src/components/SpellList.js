import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurSpell } from "../actions";

const SpellList = ({ spells, getCurSpell }) => {
    return (
        <div>
            {
                spells.map(spell => <li key = {spell.index}><Link to = {`/spells/${spell.index}`} onClick = {() => getCurSpell(spell.index)}>{spell.name}</Link></li>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        spells: state.spells
    }
}

export default connect(mapStateToProps, {getCurSpell})(SpellList);