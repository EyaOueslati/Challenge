import React from 'react';



const About = (props) =>{
    return(
        <section id="intro-section" class="separation">
        <h2>
          Hello , i am <span class="text-important"> {props.name}</span> , <br />
          and i make a horrible websites
        </h2>
        <img src={props.img} alt={props.name} />
      </section>
    );
}
export default About;