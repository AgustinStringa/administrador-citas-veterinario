import React, { Fragment } from 'react';
import { Form } from './components/Form'


function App() {
  return (
    <>
      <h1>Administrador de consultas</h1>

      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
