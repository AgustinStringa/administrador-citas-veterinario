import React, { Fragment } from "react";
import Cita from "./Cita";
import PropTypes from "prop-types";

const ListOfCitas = ({ citas, setCitas }) => {
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.formstate.id !== id);
    setCitas(nuevasCitas);
  };

  if (citas.length === 0) {
    return <p className="alerta-info">Aquí se mostraran tus citas</p>;
  } else {
    return (
      <>
        <ul className="lista-citas">
          {citas.map((cita) => (
            <Cita
              key={cita.formstate.id}
              id={cita.formstate.id}
              mascota={cita.formstate.mascota}
              dueño={cita.formstate.dueño}
              fecha={cita.formstate.fecha}
              hora={cita.formstate.hora}
              sintomas={cita.formstate.sintomas}
              eliminarCita={eliminarCita}
            />
          ))}
        </ul>
      </>
    );
  }
};

ListOfCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  setCitas: PropTypes.func.isRequired,
};

export default ListOfCitas;
