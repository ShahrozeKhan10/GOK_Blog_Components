// import { useState ,useEffect} from 'react';
import {useEffect, useRef, useState } from 'react';
import LeftSection from './Components/LeftSection'
import RightSection from './Components/RigthSection'


function App() {
  const [myObjects, setMyObject] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/POST_DETAILS')
      .then((response) => response.json())
      .then((data) => {
        setMyObject(data);
      })
  }, []);
  
  const sectionRef_1 = useRef(null);
  const sectionRef_2 = useRef(null);
  const sectionRef_3 = useRef(null);
  const sectionRef_4 = useRef(null);
  const scrollToSection_1 = () => {
    sectionRef_1.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSection_2 = () => {
    sectionRef_2.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSection_3 = () => {
    sectionRef_3.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSection_4 = () => {
    sectionRef_4.current.scrollIntoView({ behavior: 'smooth' });
  };
  const [currentSec,setCurrentSec] = useState(null);
  const setStates = (currentState) =>{
    
    
    setCurrentSec(currentState)
    console.log("Current State: " + currentSec)
  }
  return (
    <div className="py-12 flex flex-row  hideIndex:px-[90px]">
        <LeftSection myObjects={myObjects} currentSection={setStates} sectionRef_1={sectionRef_1} sectionRef_2={sectionRef_2} sectionRef_3={sectionRef_3} sectionRef_4={sectionRef_4}/>
        <RightSection currentSec={currentSec} scrollToSection_1={scrollToSection_1} scrollToSection_2={scrollToSection_2} scrollToSection_3={scrollToSection_3} scrollToSection_4={scrollToSection_4} />
    </div>
  );
}

export default App;
