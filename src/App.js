import React, { Fragment } from 'react';
import { Form } from './components/Form'


function App() {
  return (
    <>
      <h1>Administrador de consultas</h1>

      <div className='container'>
        Mirando el grid de skeleton
        <div className='row'>
          <div className='one-half column'>
            Columna 1 de la row
          </div>
          <div className='one-half column'>
            Columna 2 de la row
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            Acá iría el form
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
