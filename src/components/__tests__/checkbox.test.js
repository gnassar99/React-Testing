import { render, screen, fireEvent } from "@testing-library/react"
import Checkbox from "../checkbox";


// Este test se usa para probar que el label del checkbox se renderiza correctamente
test("Defaults to Inactive label", () => {
    render(<Checkbox labelActive="Active" labelInactive="Inactive" />);
    expect(screen.getByLabelText("Inactive")).toBeInTheDocument();
});

// Este test se usa para probar que el checkbox no esta seleccionado por defecto
test("Checkbox inactive by default", () => {
    render(<Checkbox labelActive="Active" labelInactive="Inactive" />);
    const cb = screen.getByTestId("cb");
    expect(cb).toBeInTheDocument();
    expect(cb).not.toBeChecked();
}
);

// Este test se usa para probar que el estado del checkbox cambia cuando se hace click en el
test("Checkbox status and label changes when clicked", () => {
    render(<Checkbox labelActive="Active" labelInactive="Inactive"/>);
    fireEvent.click(screen.getByLabelText("Inactive"))

    expect(screen.getByLabelText("Active")).toBeInTheDocument();

    const cb = screen.getByTestId("cb");
    expect(cb).toBeInTheDocument();
    expect(cb).toBeChecked();
  });