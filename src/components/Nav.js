import React from 'react';



const Nav = (props) =>{
    return(
        <header class="separation">
      <h1>{props.name}</h1>
      <ul class="navmenu">
        {props.navBarlink.map((el,i)=>
        <li key={i} >
            <a href={el.href}>{el.link}</a>
        </li>)}
       
      </ul>
    </header>

    );
}
export default Nav;