import React, { useState } from "react";
import PropTypes from "prop-types";

const Cita = ({ mascota, dueño, fecha, hora, sintomas, id, eliminarCita }) => {
  const [abierta, setAbierta] = useState(false);

  return (
    <li className="rounded-2xl border-b border-gray-200 bg-white p-5 text-black">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-bold text-[var(--primary-color)]"
        aria-expanded={abierta}
        onClick={() => setAbierta(!abierta)}
      >
        <span className="truncate">{mascota}</span>
        <span aria-hidden="true" className="text-2xl leading-none">
          {abierta ? "-" : "+"}
        </span>
      </button>

      {abierta ? (
        <div className="appointment-details mt-4 border-t border-gray-200 pt-4">
          <p className="mb-3 font-bold">
            Nombre dueño: <span className="font-normal">{dueño}</span>
          </p>
          <p className="mb-3 font-bold">
            Fecha: <span className="font-normal">{fecha}</span>
          </p>
          <p className="mb-3 font-bold">
            Hora: <span className="font-normal">{hora}</span>
          </p>
          <p className="mb-3 font-bold break-words">
            Síntomas: <span className="font-normal">{sintomas}</span>
          </p>
          <button
            type="button"
            className="secondary-action mt-2 cursor-pointer rounded border bg-transparent px-4 py-2 font-semibold hover:border-transparent"
            onClick={() => eliminarCita(id)}
          >
            Eliminar cita
          </button>
        </div>
      ) : null}
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
