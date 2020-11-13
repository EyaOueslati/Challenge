import React from 'react';



const Project = (props) =>{
    return(
        <section id="projects">
        <h2 class="text-important text-center">Projects</h2>
        <div class="projects-container">
    
         {props.cards.map((el,i) =>  <div key={i} class="project-card">
            <img src={el.image} alt={el.alt} />
            <p>
              {el.desc}
            </p>
            <p>Github <a href={el.href}>{el.link}</a></p>
          </div>)}
          
          
        </div>
      </section>
    );
}
export default Project;