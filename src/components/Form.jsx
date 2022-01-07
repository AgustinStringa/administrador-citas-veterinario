import React, { useState } from "react";
import { v4 } from "uuid";

export const Form = ({ citas, setCitas }) => {
  const nuevaFecha = new Date();
  const hoy = `${nuevaFecha.getFullYear()}/${
    nuevaFecha.getMonth() + 1
  }/${nuevaFecha.getDate()}`;

  const pasado = `${nuevaFecha.getFullYear()}/${nuevaFecha.getMonth() + 1}/${
    nuevaFecha.getDate() + 2
  }`;

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
    alert("la cita se ha agregado correctamente");
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
            placeholder="Nombre de tu mascota"
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
            max={pasado}
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
