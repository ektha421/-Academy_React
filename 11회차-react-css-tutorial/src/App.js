import React from 'react';
import MyInlineCss from './MyInlineCss';
import MyCssClass from './MyCssClass';
import MyCssModule from './MyCssModule';
import MyScss from './MyScss';
import MyScssModule from './MyScssModule';
import MyStyledComponent from './MyStyledComponent';

function App() {
  return (
    <div>
      <h1>React CSS Tutorial</h1>

      <MyInlineCss/>
      <MyCssClass/>
      <MyCssModule/>
      <MyScss/>
      <MyScssModule/>
      <MyStyledComponent/>
    </div>
  );
}

export default App;
