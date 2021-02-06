import React, { Component } from 'react';
import './App.css';                            //app css file
import $ from 'jquery';                        //import jquery library
import { BrowserRouter, Route, history } from 'react-router-dom';   //to transport between components
import Slider from './slider';                 //slider file
import Definition from './component1';         //deffiniton copm style file
import Departments from './component2';        //department comp file
import Loops from './component3';              //loop comp file
import Contact from './component4';            //contact comp file
import RightSide from './right-side';          //right-side comp file
import Tabels from './tabels';                 //tabels file
import Public_parts from './public-parts';     //public parts file
import Private_Part from './private-parts';    //private parts file
import Teachers from './teachers';             //teachers file img
import ShowGroups from './groups';             //group file
class App extends Component{
  //function to hide when click on link =>(right-side)
  hiedFunction = ()=>{
    $(document).ready(function(){
      var dep = $('.dep');
      var lop = $('.loops');
      var defin = $('.definition');
      $(dep,lop,defin).css('visibilty','hidden');
    })
  }
  //adding and remove class active on li when clicking on it to  change color =>(right-side)
  addRemoveClass = ()=>{
    $(document).ready(function(){
      $(document).on('click','ul li',function(){
        $(this).addClass('active').siblings().removeClass('active');
      })
    })
  }
  //toggle accordoin function when you click on groups links =>(groups file)
  toggleFun = ()=>{
    //to all buttons
    var acc = document.getElementsByClassName("bttn");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  render(){
    return(
      <BrowserRouter>
        <div className="app text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12"> <Slider darkMode={this.darkMode}/> </div>
              <div className="col-lg-11"> <Definition/> </div>
              <div className="clear-fix"></div>
              <div className="col-lg-11 "> <Departments/> </div>
              <div className="clear-fix"></div>
              <div className="col-lg-11 "> <Loops/> </div>
              <div className="clear-fix"></div>
              <div className="col-lg-12"> <Contact/> </div>
            </div>
            <div className="col right"> 
              <RightSide hideIt={this.hiedFunction} addRemoveClass={this.addRemoveClass}/>
              {/* stop it cause we have a group component has tabels <Route exact path="/tabels" component={()=><Tabels />}/>*/}
              {/*how to send function as a props inside a route */}
              <Route exact path="/group" component={()=> <ShowGroups toggleFun={this.toggleFun}/>}/>
              <Route exact path="/pub-parts" component={Public_parts}/>
              <Route exact path="/pri-parts" component={Private_Part}/>
              <Route exact path="/teacher" component={Teachers}/>       
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
