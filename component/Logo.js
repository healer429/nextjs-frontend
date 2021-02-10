import React from "react";
import Link from 'next/link'

const Logo = () => {
    return (
        <div className="logo">
            <Link href="/">
                <img alt="Logo" src="/img/usa-taxid-logo.png"/>
            </Link>
        </div>
    );
};

export default Logo;
