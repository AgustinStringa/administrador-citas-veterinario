import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form'
import ListOfCitas from './components/ListOfCitas';


function App() {
  var citasAlmacenadas = JSON.parse(localStorage.getItem('citas'));
  if (!citasAlmacenadas) {
    citasAlmacenadas = [];
  }

  const [citas, setCitas] = useState(citasAlmacenadas);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas])

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
