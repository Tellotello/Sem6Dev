import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/api/notes";

const NotasLista = ({ notas }) => {
  //el componente toma como props las notas del componente padre

  //estilos de los elementos de la lista
  const estiloNota = {
    color: "blue",
    fontSize: 16,
    border: "1px solid black",
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  };

  const estiloLista = {
    listStyleType: "none",
    padding: 0,
  };

  //mapeamos sobre el arreglo de notas y creamos un elemento li por cada nota
  //definimos el estilo en linea
  return (
    <ul style={estiloLista}>
      {notas.map((nota) => (
        <li key={nota.id} style={estiloNota}>
          {nota.content}
        </li>
      ))}
    </ul>
  );
};

export default NotasLista;
