import React, { Fragment, useState } from 'react';
import { Form } from './components/Form'
import { ListOfCitas } from './components/ListOfCitas';


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
          <div className='one-half column'>
            {citas.length === 0 ? <h2>Agrega una cita para comenzar</h2> : <h2>Administra tus citas</h2>}
            <ListOfCitas citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
