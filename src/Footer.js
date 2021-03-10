import React from 'react';
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import FooterEnd from "./FooterEnd";

function Footer(props) {
    return (
        <div className="footer-block">
            <FooterLogo />
            <FooterMenu />
            <FooterEnd />
        </div>
    );
}

export default Footer;