import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import ListOfCitas from "./components/ListOfCitas";
import { getCitas, saveCitas } from "./services/localStorageService";

function App() {
  const [citas, setCitas] = useState(getCitas);

  useEffect(() => {
    saveCitas(citas);
  }, [citas]);

  return (
    <>
      <h1 className="bg-white mx-0 p-4 text-center font-[Staatliches] text-4xl uppercase tracking-wide text-[#373131]">
        Administrador de consultas veterinarias
      </h1>

      <div className="pt-12">
        <div className="grid grid-cols-1 items-start gap-4 px-3 md:grid-cols-2">
          <div className="rounded-2xl bg-[#373131] px-4 py-3">
            <Form citas={citas} setCitas={setCitas} />
          </div>
          <div className="rounded-2xl bg-[#373131] px-4 py-3 flex flex-col gap-y-2">
            {citas.length === 0 ? (
              <h2 className="m-0 text-center font-[Staatliches] text-4xl uppercase tracking-wide text-white">
                Agrega una cita para comenzar
              </h2>
            ) : (
              <h2 className="m-0 text-center font-[Staatliches] text-4xl uppercase tracking-wide text-white">
                Administra tus citas
              </h2>
            )}
            <ListOfCitas citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
