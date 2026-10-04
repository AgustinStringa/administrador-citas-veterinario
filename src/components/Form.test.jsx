import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Form from "./Form";

vi.mock("sweetalert2", () => ({
  default: {
    fire: vi.fn(),
  },
}));

describe("Form (administrador-citas-veterinario)", () => {
  const setCitasMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("el input de fecha tiene el atributo min con la fecha actual en formato YYYY-MM-DD", () => {
    render(<Form citas={[]} setCitas={setCitasMock} />);
    const fechaInput = screen.getByLabelText(/Fecha:/i);

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const expectedToday = `${year}-${month}-${day}`;

    expect(fechaInput).toHaveAttribute("min", expectedToday);
  });

  it("ajusta el rango horario a 08:00-12:00 cuando se selecciona un sábado", () => {
    render(<Form citas={[]} setCitas={setCitasMock} />);
    const fechaInput = screen.getByLabelText(/Fecha:/i);
    const horaInput = screen.getByLabelText(/Hora:/i);

    // Disparar selección de sábado (ejemplo: 2026-10-10 es sábado)
    fireEvent.change(fechaInput, { target: { name: "fecha", value: "2026-10-10", type: "date" } });

    expect(horaInput).toHaveAttribute("min", "08:00");
    expect(horaInput).toHaveAttribute("max", "12:00");
  });

  it("ajusta el rango horario a 08:00-19:00 cuando se selecciona un día de semana", () => {
    render(<Form citas={[]} setCitas={setCitasMock} />);
    const fechaInput = screen.getByLabelText(/Fecha:/i);
    const horaInput = screen.getByLabelText(/Hora:/i);

    // Disparar selección de lunes (ejemplo: 2026-10-05 es lunes)
    fireEvent.change(fechaInput, { target: { name: "fecha", value: "2026-10-05", type: "date" } });

    expect(horaInput).toHaveAttribute("min", "08:00");
    expect(horaInput).toHaveAttribute("max", "19:00");
  });
});
