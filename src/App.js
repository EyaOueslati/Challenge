import Nav from './components/Nav';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

import Photos from './image/photo.jpg';
import Projet1 from './image/projet1.jpg';
import Projet2 from './image/projet2.png';
import Projet3 from './image/projet3.png';
import Projet4 from './image/projet4.png';


import './App.css';

const navBar= [
  {
     link: "About",
     href: "#about",
  },
  {
    link: "Projects",
    href: "#projects"
  },
  {
    link: "Contact",
    href: "contact",
  }
];


const projectCard=[
 {
   image: Projet1,
   alt: "projet1",
   desc: "Le HyperText Markup Language, généralement abrégé HTML ou dans sa dernière version HTML5, est le langage de balisage conçu pour représenter les pages web",
   href: "#linkHTML",
   link: "html"
 },
 {
  image: Projet2,
  alt: "projet2",
  desc: "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML.",
  href: "#linkCSS",
  link: "css",
 },
 {
  image: Projet3,
  alt: "projet3",
  desc: "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web",
  href: "#linkJS",
  link: "js",
 },
 {
  image: Projet4,
  alt: "projet4",
  desc: "React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état",
  href: "#linkREACT",
  link: "react",
 },
];

function App() {
  return (
    <div className="App">
    <Nav navBarlink={navBar} name= "Eya Oueslati" />
    <About name="Eya Oueslati" img={Photos} />
    <Project cards={projectCard} />
    <Contact />
    <Footer  name= "Eya"/>
    </div>
  );
}

export default App;
