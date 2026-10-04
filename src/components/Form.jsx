import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import {
  showAppointmentCreated,
  showSaturdayInfo,
} from "../services/notificationService";
import { toISODateString, getDayOfWeek } from "../../shared";

const Form = ({ citas, setCitas }) => {
  const hoy = toISODateString(new Date());

  const [formstate, setFormstate] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const { mascota, dueño, fecha, hora, sintomas } = formstate;

  const handleChange = (evt) => {
    const nuevoState = { ...formstate };
    const diaSemanal = getDayOfWeek(evt.target.value);
    const input_hora = document.querySelector('input[type="time"]');

    if (evt.target.type === "date") {
      if (diaSemanal === 5) {
        input_hora.min = "08:00";
        input_hora.max = "12:00";
        showSaturdayInfo();
      } else {
        input_hora.min = "08:00";
        input_hora.max = "19:00";
      }
    }

    nuevoState[`${evt.target.name}`] = evt.target.value;
    setFormstate(nuevoState);
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      !mascota.trim() ||
      !dueño.trim() ||
      !fecha.trim() ||
      !hora.trim() ||
      !sintomas.trim()
    ) {
      setError(true);
      //si da error se finaliza el metodo, la unica forma de continuar es que la validación sea exitosa
      //si se espera para comprobar por el state error no funcionará, ya que en algunas ocasiones el state no llega a actualizarse en el momento de usarse.
      return;
    }
    setError(false);

    formstate.id = v4();
    /**
     * crear la cita
     */
    setCitas([...citas, { formstate }]);
    showAppointmentCreated();
    /**
     * reiniciar el form
     */
    setFormstate({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2 className="m-0 mb-3 text-center text-4xl tracking-wide text-white">
        Crea una cita
      </h2>
      {error ? (
        <p className="secondary-background p-4 text-center text-2xl text-(--primary-color)">
          Todos los campos son obligatorios
        </p>
      ) : null}
      <form action="" method="GET" onSubmit={handleSubmit}>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
              htmlFor="mascota"
            >
              Nombre mascota:
            </label>
            <input
              className="appearance-none block w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              type="text"
              name="mascota"
              id="mascota"
              placeholder="Nombre de la mascota"
              onChange={handleChange}
              value={mascota}
            />
          </div>

          <div className="w-full px-3 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
              htmlFor="dueño"
            >
              Nombre dueño:
            </label>
            <input
              className="appearance-none block w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              type="text"
              name="dueño"
              id="dueño"
              placeholder="Nombre del dueño"
              onChange={handleChange}
              value={dueño}
            />
          </div>
        </div>

        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
              htmlFor="fecha"
            >
              Fecha:
            </label>
            <input
              className="appearance-none block w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              type="date"
              name="fecha"
              id="fecha"
              min={hoy}
              onChange={handleChange}
              value={fecha}
            />
          </div>

          <div className="w-full px-3 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
              htmlFor="hora"
            >
              Hora:
            </label>
            <input
              className="appearance-none block w-full rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              type="time"
              name="hora"
              min="08:00"
              max="19:00"
              id="hora"
              onChange={handleChange}
              value={hora}
            />
          </div>
        </div>

        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
              htmlFor="sintomas"
            >
              Síntomas:
            </label>
            <textarea
              className="appearance-none block w-full resize-y rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              name="sintomas"
              id="sintomas"
              onChange={handleChange}
              value={sintomas}
            ></textarea>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap justify-end">
          <button
            type="submit"
            className="secondary-background cursor-pointer rounded px-4 py-2 font-bold text-(--primary-color) hover:brightness-95 focus:outline-none focus:shadow-outline"
          >
            Agregar cita
          </button>
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  citas: PropTypes.array.isRequired,
  setCitas: PropTypes.func.isRequired,
};

export default Form;
