import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSpells } from "../actions";

const SpellBooks = ({ getSpells }) => {
    return (

        <div>
            <Link to = "/sorcerer-spells" className = "book" onClick = {() => getSpells("sorcerer")}>Sorcerer<br />Spells</Link>
            <Link to = "/wizard-spells" className = "book" onClick = {() => getSpells("wizard")}>Wizard<br />Spells</Link>
        </div>

    );
};

const mapStateToProps = state => {
    return {};
}

export default connect(mapStateToProps, {getSpells})(SpellBooks);