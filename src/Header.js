import React from 'react'
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img className="header-logo" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png"/>
            <div className="header-search">
                <input className="header-search-input" type="text" />
            </div>
            <div className="header-nav">
                <div className="header-option">

                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header-optionLineOne">
                        Sign In
                    </span>
                </div>
                <div className="header-option">
                <span className="header-optionLineOne">
                        Returns
                    </span>
                    <span className="header-optionLineOne">
                        & Orders
                    </span>
                </div>
                <div className="header-option">
                <span className="header-optionLineOne">
                        Yours
                    </span>
                    <span className="header-optionLineOne">
                         Prime
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
