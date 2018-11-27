import React, { Component } from 'react';
import "./style.css";
import myimage from './swe.png';
import TodoList from './TodoList';


class Appo extends React.Component {
   render() {
      return (
         <div >
            <Header/>
            <br></br>
              <br></br>
              <br></br>
                <br></br>
                <br></br>
                  <br></br>
                  <br></br>
                    <br></br>
                    <br></br>
                      <br></br>



            <SlideShow/>
            <br></br>
              <br></br>
                <br></br>
                <br></br>

            <Menu/>
            <br></br>
              <br></br>
                <br></br>
                <TodoList/>
            <Art/>
            <DownSide/>
            <Bottom />
<TodoList/>
<TodoList/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1 className="App-header">Künstler Kollektiv AVA</h1>
         </div>
      );
   }
}

class SlideShow extends React.Component {
   render() {
      return (
        <center>
         <div className="center">

            <img className="Slidy" src={myimage}></img>

            </div>
            </center>
      );
   }
}

class Bottom extends React.Component {
   render() {
      return (
         <div >
          <h1 className="FlySHow"></h1>
              </div>
      );
   }
}

class Menu extends React.Component {
   render() {
      return (
         <div className="Menu" >
         <ul>
         <pre>
         <br></br>
            <li>    AVA < /li><br></br>
            <li>    ART < /li><br></br>
            <li>    BLOG</li><br></br>
            <li>    SHOP</li>
            </pre>
          </ul>
         </div>
      );
   }
}

class Art extends React.Component {
   render() {
      return (
         <div>



         </div>
      );
   }
}

class DownSide extends React.Component {
   render() {
      return (
         <div>
         <pre>

      <outside>  <m1>Impressum       Datenschutz        Hilfe           Support </m1></outside>
          </pre>

         </div>
      );
   }
}

export default Appo;
