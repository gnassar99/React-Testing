import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../likes";

// Este test se usa para probar que por defecto el componente muestra en el párrafo el valor "Likes: 0"
test("Defecto: Likes: 0", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

// Este test se usa para probar que el botón Like incrementa el valor del párrafo en 1
test("Botón Like incrementa el valor del párrafo en 1", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"))
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

// Este test se usa para probar que el botón Like incrementa el valor del párrafo en 2
test("Botón Like incrementa el valor del párrafo en 2", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"))
    fireEvent.click(screen.getByText("Like"))
    expect(screen.getByText("Likes: 2")).toBeInTheDocument();
});

// Este test se usa para probar que el botón Dislike decrementa el valor del párrafo en 1
test("Botón Dislike decrementa el valor del párrafo en 1", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Dislike"))
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
});

// Este test se usa para probar que el botón Dislike decrementa el valor del párrafo después de haber incrementado el valor del párrafo en 1
test("Botón Dislike decrementa el valor del párrafo después de haber incrementado el valor del párrafo en 2", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"))
    fireEvent.click(screen.getByText("Like"))
    fireEvent.click(screen.getByText("Dislike"))
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});