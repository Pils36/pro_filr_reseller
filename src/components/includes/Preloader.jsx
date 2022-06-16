import React from 'react';

function Preloader() {

    return (
        <div id="preloader">
            <div className="preloader-wrap">
                <img src="prologo.png" alt="logo" className="img-fluid" />
                <div className="preloader">
                    <i>.</i>
                    <i>.</i>
                    <i>.</i>
                </div>
            </div>
        </div>
    );
}


export default Preloader;