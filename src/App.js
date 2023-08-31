import logo from './logo.svg';
import './App.css';
import './componet/style.css';
import { Subject } from './Subject';


function App() {
  return (
    <div className='main'>
      <h1>Home</h1>
      <Subject 
      title="Mechnical" 
      disc="It is relatedto machine and machnisam."/>
    
    <Subject 
      title="Civil" 
      disc="It is related to Building/Road construction."/>
    
    <Subject 
      title="Electrical" 
      disc="It is related to Motors."/>

      <Subject 
      title="CS"
      disc="It is related to Computer."/>
      
      <Subject 
      title="B.com"
      disc="It is related commerce."/>

      <Subject
      title="It"
      disc="It is related information technology"/>

<Subject
      title="Electrical Circuits"
      disc=" Explore the principles of electrical circuits, including voltage, current, and Ohm's law."/>

<Subject
      title="Civil Engineering"
      disc=" Learn about different construction materials and their properties used in civil engineering projects."/>

<Subject
      title="Computer Science"
      disc=" A comprehensive introduction to computer science principles and programming concepts."/>

<Subject
      title="Thermodynamics"
      disc="  Understand the principles of thermodynamics and their applications in engineering systems."/>

<Subject
      title="Data Structures and Algorithms"
      disc="Explore fundamental data structures and algorithms used in computer programming. "/>
     
 <Subject
      title="Chemical Engineering"
      disc="An overview of chemical engineering processes involved in the production of various substances. "/>

<Subject
      title="Digital Electronics"
      disc="Learn about digital logic gates, Boolean algebra, and digital circuit design. "/>

<Subject
      title="Material Science"
      disc="Understand the properties and behavior of materials used in engineering applications. "/>

<Subject
      title="Environmental Science "
      disc="Explore the interconnection between the environment, society, and sustainable practices. "/>

    </div>
   
  );
}

export default App;
