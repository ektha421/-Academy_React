import React from 'react';
import MyInlineCss from './MyInlineCss';
import MyCssClass from './MyCssClass';
import MyCssModule from './MyCssModule';
import MyScss from './MyScss';
import MyScssModule from './MyScssModule';
import MyStyledComponent1 from './MyStyledComponent1';
import MyStyledComponent2 from './MyStyledComponent2';

function App() {
  return (
    <div>
      <h1>React CSS Tutorial</h1>

      <MyInlineCss/>
      <MyCssClass/>
      <MyCssModule/>
      <MyScss/>
      <MyScssModule/>
      <MyStyledComponent1/>
      <MyStyledComponent2/>
    </div>
  );
}

export default App;
