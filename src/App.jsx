import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import ListOfCitas from "./components/ListOfCitas";
import {
  clearCitas,
  getCitas,
  saveCitas,
} from "./services/localStorageService";
import { requestConfirmation } from "./services/notificationService";
import { Header, Footer } from "../shared";

function App() {
  const [citas, setCitas] = useState(getCitas);

  useEffect(() => {
    saveCitas(citas);
  }, [citas]);

  const handleClearCitas = async () => {
    const confirmed = await requestConfirmation({
      title: "¿Limpiar todas las citas?",
      text: "Esta acción eliminará todas las citas guardadas y no se puede deshacer.",
      confirmButtonText: "Sí, limpiar citas",
      cancelButtonText: "Cancelar",
    });

    if (!confirmed) {
      return;
    }

    clearCitas();
    setCitas([]);
  };

  return (
    <div className="flex min-h-dvh flex-col justify-between">
      <Header
        title="Administrador de consultas veterinarias"
        variant="teal"
      />

      <div className="py-8">
        <div className="grid grid-cols-1 items-start gap-4 px-3 md:grid-cols-2">
          <div className="primary-background rounded-2xl px-4 py-3">
            <Form citas={citas} setCitas={setCitas} />
          </div>
          <div className="primary-background flex flex-col gap-y-2 rounded-2xl px-4 py-3">
            {citas.length === 0 ? (
              <h2 className="m-0 text-center text-3xl tracking-wide text-white">
                Agrega una cita para comenzar
              </h2>
            ) : (
              <h2 className="m-0 mb-3 text-center text-3xl tracking-wide text-white">
                Administra tus citas
              </h2>
            )}
            <div className="flex flex-col gap-3">
              <ListOfCitas citas={citas} setCitas={setCitas} />
              <button
                type="button"
                className="cursor-pointer self-end rounded border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-(--primary-color) disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleClearCitas}
                disabled={citas.length === 0}
                aria-label="Limpiar todas las citas"
              >
                Limpiar todas las citas
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer
        title="Administrador Citas Veterinario"
        description="Gestión de citas y pacientes para clínicas veterinarias."
        variant="teal"
      />
    </div>
  );
}

export default App;
