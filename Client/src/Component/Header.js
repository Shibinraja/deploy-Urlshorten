import React from 'react';
import link from './link.svg';

export default function Header() {
    return (

        <div id="logo">
            <img className="link px-1" src ={link}/>
            <a href = "http://localhost:3000" className="logo" >Url Shortener</a>
        </div>



        
    
    )
}
