import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import Swal from "sweetalert2";

const Form = ({ citas, setCitas }) => {
  const nuevaFecha = new Date();
  const hoy_anio = `${nuevaFecha.getFullYear()}`;
  const hoy_mes = `${
    String(nuevaFecha.getMonth() + 1).length === 1
      ? "0" + String(nuevaFecha.getMonth() + 1)
      : nuevaFecha.getMonth() + 1
  }`;
  const hoy_dia = `${
    String(nuevaFecha.getDate()).length === 1
      ? "0" + String(nuevaFecha.getDate())
      : nuevaFecha.getDate()
  }`;
  const hoy = hoy_anio + "-" + hoy_mes + "-" + hoy_dia;

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
    //comprobando que la cita no sea sabado o domingo
    const diaSemanal = new Date(evt.target.value).getDay();
    const input_hora = document.querySelector('input[type="time"]');

    if (evt.target.type === "date") {
      if (diaSemanal === 5) {
        input_hora.min = "08:00";
        input_hora.max = "12:00";
        Swal.fire({
          title: "Info",
          text: "Las citas los días sábados deben ser entre las 08:00 y las 12:00",
          icon: "info",
          confirmButtonText: "Entendido",
        });
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
    Swal.fire({
      title: "Operacion exitosa",
      text: "Cita agregada correctamente",
      icon: "success",
      confirmButtonText: "OK",
    });
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
      <h2>Crea una cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form action="" method="GET" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Nombre mascota: </label>
          <input
            className="u-full-width"
            type="text"
            name="mascota"
            id=""
            placeholder="Nombre de la mascota"
            onChange={handleChange}
            value={mascota}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Nombre dueño: </label>
          <input
            className="u-full-width"
            type="text"
            name="dueño"
            id=""
            placeholder="Nombre del dueño"
            onChange={handleChange}
            value={dueño}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Fecha: </label>
          <input
            className="u-full-width"
            type="date"
            name="fecha"
            id=""
            min={hoy}
            onChange={handleChange}
            value={fecha}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Hora: </label>
          <input
            className="u-full-width"
            type="time"
            name="hora"
            min="08:00"
            max="19:00"
            id=""
            onChange={handleChange}
            value={hora}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Síntomas: </label>
          <textarea
            name="sintomas"
            id=""
            onChange={handleChange}
            value={sintomas}
          ></textarea>
        </div>

        <div className="form-group">
          <button type="submit" className="u-full-width button-primary">
            AGREGAR CITA
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
