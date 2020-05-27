import React from 'react';
import styled from "styled-components";
import DnD_Logo from "../assets/images/DnD-Logo.png";

const Start = styled.div`
    text-align: center;
`;

const StartPage = () => {
    return (
        <Start>
            <img src = {DnD_Logo} alt = "Dungeons and Dragons Logo" width = "80" height = "70" />
            <h2>Spells Archive</h2>
            <h3>For your Dungeons and Dragons Adventures</h3>

            <p>
                This is an archive of the spells for wizards and sorcerers to be used in 
                Dungeons and Dragons 5th Edition tabletop games. The spells found in this archive are
                retrieved using an API database of the Official 5th Edition SRD. This was made for fun
                and part of a Lambda School Project to showcase skills building a react app using 
                async redux.
            </p>
            <p>
                Hope you can enjoy the page as much as I enjoyed building it, and may this archive
                help you in your adventures as a Sorcerer or Wizard... Let the fire burn!
            </p>
        </Start>
    );
};

export default StartPage;