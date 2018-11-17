import React, { Component } from 'react';
import './App.css';
import img from './images/med.jpg';
import Box from './Component/box';
import Box1 from './Component/box1';
import Box2 from './Component/box2';
import Box3 from './Component/box3';
import Contact from './Component/Contact';
import Competence from './Component/Competence';

class App extends Component {
  render() {
    return (
     <div className="B">
            <div className="Bord"></div>
      <div className="row">
         <div className="col-sm-4"> <img src={img} className="img" /></div>
         <div className="col-sm-8"><h1 className="nom">Mohamed Ben Hadid</h1></div>
      </div>
    
   <div className="row">
         <div className="col-sm-4"> 
            <div>
                  <Contact />
              <Competence/> 
            </div>
           
              <div className="titre">&nbsp;&nbsp;QUALITES</div>
                  <Box1 val2="Responsable" />
                  <Box1 val2="Sérieux" />
                  <Box1 val2="Cométent" />
                  <Box1 val2="Serviable" />
                  <Box1 val2="Sociable" />
                  <Box1 val2="Accueillant" />
              
               </div>


               <div className="col-sm-8">
                    <div className="titre2">&nbsp;&nbsp;Education</div>
                    <Box2 val3="Baccalauréat section Informatique" date="2016"/>
                     <Box2 val3="2eme année Dévloppement Systèmed'information" date="2017-2018"/>
                      <Box2 val3="Certificat de formation(JAVA/Android)" date="N 11-2\949\10"/>
                       <Box2 val3="Certificat de formation(JAVA/JEE)" date="tekUp"/>  
                       <br/><br/><br/>
                       <div className="titre2">&nbsp;&nbsp;Experience</div>
                        <Box3 val3="Freelance" date="2015-2017" des="Dévloppement des application web"/>
                     <Box3 val3="Stage au sein de tunisair" date="Janvier 2017" des="Dévloppement d'une' application web(gestion des factures tunisair)" />
                      <Box3 val3="Stage au sein de tunisair" date="Janvier 2018" des="Dévloppement d'une' application web(gestion des promotion tunisair)" />
                      
               </div>
         
            </div>

      </div>
    );
  }
}

export default App;
