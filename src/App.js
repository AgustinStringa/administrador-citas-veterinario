import React, { Fragment, useState } from 'react';
import { Form } from './components/Form'


function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <h1>Administrador de consultas</h1>

      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
