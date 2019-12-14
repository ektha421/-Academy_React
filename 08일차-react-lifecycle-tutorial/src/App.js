import React from 'react';
import MyLifeCycle from './MyLifeCycle';
import MySimpleJQuery from './MySimpleJQuery';
import MyJQueryChosen from './MyJQueryChosen';
import MyJQuerySlick from './MyJQuerySlick';

function App() {
  return (
    <div className="App">
      <h1>react-lifecycle-tutorial</h1>

      <MyLifeCycle />

      <MySimpleJQuery />

      <MyJQuerySlick />

      <MyJQueryChosen onChange={value => console.log("value:", value)}>
        <option>vanilla</option>
        <option>chocolate</option>
        <option>strawberry</option>
      </MyJQueryChosen>
    </div>
  );
}

export default App;
