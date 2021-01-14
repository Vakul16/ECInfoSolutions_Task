import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
class App extends Component {
  state = {
       tasks: [
          {name:" ", category:"DesignObject", bgcolor: "red", className : "imageClass"},
          {name:"iPhone11", category:"DesignObject", bgcolor:"pink", className : "textClass"},
          {name:"$ 820", category:"DesignObject", bgcolor:"skyblue", className : "priceClass"},
          {name:"Source Code", category:"DesignObject", bgcolor:"green", className : "sourceClass"},
          {name:"Expiration Date", category:"DesignObject", bgcolor:"orange", className : "expirationClass"},
          {name:" ",category:"DesignObject", className : "qrCode"},
          {name:" ",category:"complete", className : "barCode"}
        ]
  }

  onDragStart = (e, id) => {
      console.log('dragstart:',id);
      e.dataTransfer.setData("id", id);
  }

  onDragOver = (e) => {
      e.preventDefault();
  }

  onDrop = (e, cate) => {
     let id = e.dataTransfer.getData("id");
     
     let tasks = this.state.tasks.filter((task) => {
         if (task.name === id) {
             task.category = cate;
         }
         return task;
     });

     this.setState({
         ...this.state,
         tasks
     });
  }

  render() {
      var tasks = {
          DesignObject: [],
          complete: []
      }
      // looping through all tasks and creating a div for every task item and storing it in the res categories
      this.state.tasks.forEach ((t) => {
          tasks[t.category].push(
              <div key={t.name} 

                  onDragStart = {(e) => this.onDragStart(e, t.name)}
                  draggable
                  className={"draggable "+t.className}
                  style = {{backgroundColor: t.bgcolor},{width : t.width},{height: t.height},{className : t.className}}
                  // style = {{borderRadius : t.radius}}
                  // style = {{width : t.width}}
                  // style = {{height: t.width}}
              >

                  {t.name}
              </div>
          );
      });

      return (
          <div className="container-drag">
              <div className="DesignObject"
                  onDragOver={(e)=>this.onDragOver(e)}
                  onDrop={(e)=>{this.onDrop(e, "DesignObject")}}>
                  <span className="task-header">Design Object</span>
                  {tasks.DesignObject}
              </div>
              <div className="droppable" 
                  onDragOver={(e)=>this.onDragOver(e)}
                  onDrop={(e)=>this.onDrop(e, "complete")}>
                   <span className="task-header">Drawing Palette</span>
                   {tasks.complete}
              </div>
          </div>
      );
  }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }