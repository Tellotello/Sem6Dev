import React, { useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/api/notes";

const NotasFormulario = ({ addNota, nuevaNota, handleNotaChange }) => {
  //el componente toma como props las funciones y estados del componente padre

  //estilos de los elementos del formulario
  const estiloForm = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0",
  };

  const estiloInput = {
    marginBottom: 10,
  };

  const estiloBoton = {
    backgroundColor: "green",
    color: "white",
    padding: 10,
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  };

  return (
    <form style={estiloForm} onSubmit={addNota}>
      <input
        style={estiloInput}
        type="text"
        placeholder="Ingresa la nota"
        value={nuevaNota}
        onChange={handleNotaChange}
      />
      <button style={estiloBoton} type="submit">
        Save
      </button>
    </form>
  );
};

export default NotasFormulario;
