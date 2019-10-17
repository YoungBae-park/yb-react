import React, { Component } from 'react';

class Content extends Component {
  render(){
    return (
      <article>
        <h2>Welcome</h2>
        Hello React.
      </article>

    )
  }
}
class  Content1 extends Component {
  render(){
    return (
      <article>
        <h2>Welcome</h2>
        Hello React.
      </article>

    )
  }
}


function App() {
  return (
    <div className="Content">
      <Content/>
      
      Hello React
    </div>
    <div className="Content1">
    <Content/>
    
    Hello React
  </div>
  );
}

export default App;
