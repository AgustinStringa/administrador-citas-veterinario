import React from "react";
import PropTypes from "prop-types";

const Cita = ({ mascota, dueño, fecha, hora, sintomas, id, eliminarCita }) => {
  return (
    <li className="border-b border-[#e1e1e1] bg-white p-8 text-black rounded-2xl">
      <p className="mb-3 font-bold">
        Nombre mascota: <span className="font-normal">{mascota}</span>
      </p>
      <p className="mb-3 font-bold">
        Nombre dueño: <span className="font-normal">{dueño}</span>
      </p>
      <p className="mb-3 font-bold">
        Fecha: <span className="font-normal">{fecha}</span>
      </p>
      <p className="mb-3 font-bold">
        Hora: <span className="font-normal">{hora}</span>
      </p>
      <p className="mb-3 font-bold">
        Síntomas: <span className="font-normal">{sintomas}</span>
      </p>
      <button
        className="mt-4 rounded cursor-pointer border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        onClick={() => {
          eliminarCita(id);
        }}
      >
        Eliminar cita
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
