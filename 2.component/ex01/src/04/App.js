import React from 'react';
import MyComponent from './MyComponent'

function App() {
  return (
    <div id='App'>
      <MyComponent
        props02={10}
        props03={true}
        props04={{no:1, name:'둘리'}}
        props05={['hello', 'world', 'react.js', 'es6']}
        props06={() => '함수'}
        props07={10}
        props08={[true, false, true, true]}
        props09={{no:1, name:'둘리', email:'dooly@gmail.com'}}/>
    </div>
  );
}

export default App;
