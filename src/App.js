import React from 'react';
import { Counter } from './components/Counter';
import './index.css';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header>
          <h1>Counter Class Component</h1>
        </header>

        <main>
          <Counter/>
        </main>
        
        <footer>
          <p>
            Developed by:{' '} 
            <strong>
              <a href="https://cezarcozta.com">César A. Costa</a>
            </strong>
          </p>
        </footer>
        
      </div>
    );
  }
}

export default App;
