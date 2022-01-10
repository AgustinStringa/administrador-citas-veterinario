import React from "react";
import PropTypes from "prop-types";

const Cita = ({ mascota, dueño, fecha, hora, sintomas, id, eliminarCita }) => {
  return (
    <li className="cita">
      <p>
        Nombre mascota: <span>{mascota}</span>
      </p>
      <p>
        Nombre dueño: <span>{dueño}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Síntomas: <span>{sintomas}</span>
      </p>
      <button
        className="u-full-width"
        onClick={() => {
          eliminarCita(id);
        }}
      >
        Eliminar cita &times;
      </button>
    </li>
  );
};

Cita.propTypes = {
  mascota: PropTypes.string.isRequired,
  dueño: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  sintomas: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};
export default Cita;
