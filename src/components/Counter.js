import React from 'react';

export class Counter extends React.Component {
   constructor(props) {
     super(props);
     this.state = { counter: 0 };
   }
 
   increment(){
     this.setState(prevState => ({
       counter: prevState.counter + 1
     }));
   }
   zero(){
     this.setState({
       counter: 0
     });
   }
   decrement(){
     this.setState(prevState => ({
       counter: prevState.counter - 1
     }));
   }
 
   render(){
     return (
       <div className="Counter">
         <header><h2>Counter</h2></header>
         
         <main>
           <h3>{this.state.counter}</h3>
         </main>
         
         <footer>
           <button 
             onClick={
               () => this.increment()
             }
           > + </button>
           <button
             onClick={
               () => this.zero()
             }
           > 0 </button>
           <button
             onClick={
               () => this.decrement()
             }
           > - </button>
         </footer>
       </div>
     );
   }
 }