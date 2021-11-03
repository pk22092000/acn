import React, { useState } from "react";
// import { Link } from "react-router-dom";

function SearchForm() {
    const [txtKeyWord, setTxtKeyWord] = useState('');
    console.log(txtKeyWord);

    return (
        <div className="header__search">
            <form className="header__search-form">
                <i className="ti-search header__search-icon"></i>
                <input
                    className="header__search-input" 
                    tp="text" 
                    placeholder="Search"
                    name="txtKeyWord"
                    onChange={ (event) => setTxtKeyWord(event.target.value) }
                />
                {/* <button className="btn-search"><i className="ti-search"></i></button> */}
            </form>
        </div>
    );
}

export default SearchForm;
                  
                        
                        
                        
                        
                        
                       