import React, { useState } from "react";

export const Form = () => {
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

  const handleChange = (evt) => {
    const nuevoState = { ...formstate };
    nuevoState[`${evt.target.name}`] = evt.target.value;
    setFormstate(nuevoState);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var validate = true;
    for (const prop in formstate) {
      if (!formstate[prop].trim()) {
        // console.log(`${prop} dio false`);
        validate = false;
      }
    }

    console.log("validate", validate);
  };

  const { mascota, dueño, fecha, hora, sintomas } = formstate;

  return (
    <>
      <h2>Crea una cita</h2>
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
            required
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
