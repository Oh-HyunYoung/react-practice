import React from 'react';

function App() {
  return (
    <div>
      <h2>01</h2>
      <p>JSX Tutorial - 특징1: HTML과 차이점</p>
      {
        /*
        1. 속성은 Camel Case
        */
      }
      <input type='text' maxLength='10'/>
      
      {
        /*
        2. Element는 꼭 닫는다.
        */
      }
      <br/>
      <hr/>
      <img src=''/>

      {
        /*
        3. JSX Element의 속성 이름은 DOM API와 일치한다.
          <h4 class='header' id='title'>타이틀</h4>
          document.getElementById('title).className
        */
      }

      <h4 className='header' id='title'>타이틀</h4>

    </div>
  );
}

export default App;
