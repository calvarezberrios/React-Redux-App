import React from 'react';
import { connect } from "react-redux";
import { getCurSpell } from "../actions";

const SpellPage = ({match, curSpell, getCurSpell}) => {

    React.useEffect(() => {
        if(Object.values(curSpell).length === 0) getCurSpell(match.params.index);
    });
    
    return (
        <div>
            <h2>{curSpell.name}</h2>
            <p>Level: {curSpell.level}</p>
            <p>Range: {curSpell.range}</p>
            <p>Casting Time: {curSpell.casting_time}</p>
            <p>Duration: {curSpell.duration}</p>
            {curSpell.concentration && <p>Requires Concentration</p>}
            {curSpell.ritual && <p>Requires Ritual</p>}
            <p>Components: {curSpell.components && curSpell.components.join(", ")}</p>
            {curSpell.material && <p>Materials: {curSpell.material}</p>}
            <p>School: {curSpell.school && curSpell.school.name}</p>
            <p>Description:</p>
            {curSpell.desc && curSpell.desc.map((item, index) => <p key = {index}>{item}</p>)}

        </div>
    );
};

const mapStateToProps = state => {
    return {
        curSpell: state.curSpell,
        error: state.error
    };
}

export default connect(mapStateToProps, {getCurSpell})(SpellPage);