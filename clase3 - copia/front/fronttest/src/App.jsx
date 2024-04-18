import { useState, useEffect } from "react";
import axios from "axios";
import NotasHeader from "./components/NotasHeader";
import NotasLista from "./components/NotasLista";
import NotasFormulario from "./components/NotasFormulario";
const baseUrl = "http://localhost:3001/api/notes";

const App = () => {
  /*
    componentes:
    1. header
    2. la lista de notas
    3. el formulario para agregar notas
  */

  // Definidores de estado, se usan para virtualizar los cambios en el DOM
  const [nuevaNota, setNuevaNota] = useState(""); // el estado del contenido de la nota actual, se guarda en un string vacio
  const [notas, setNotas] = useState([]); // el estado de las notas, se guarda en un arreglo inicialmente

  // hook de useEffect, se llama una vez cuando se renderiza el componente
  // llama a la API para obtener todas las notas en un json, y guarda el resultado en el estado de las notas como un arreglo
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNotas(response.data);
    });
  }, []);

  // handler de cambio de la nota, se llama para cambiar el contenido de la nota cuando se modifica el campo de texto
  const handleNotaChange = (event) => {
    setNuevaNota(event.target.value);
  };

  // funcion de agregar nota, le llega el evento cuando se usa el boton de submit del formulario
  // crea un objeto con el contenido de la nota, la fecha actual y un valor booleano aleatorio
  // hace la solicitud POST al api, lo agrega al arreglo de notas, y resettea el contenido de la nota
  const addNota = (event) => {
    event.preventDefault();
    const notaObject = {
      content: nuevaNota,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    axios.post(baseUrl, notaObject).then((response) => {
      setNotas(notas.concat(response.data));
      setNuevaNota("");
    });
  };

  return (
    <div>
      <NotasHeader />
      <NotasLista notas={notas} />
      <NotasFormulario
        // pasamos las funciones y estados como props a los componentes
        addNota={addNota}
        nuevaNota={nuevaNota}
        handleNotaChange={handleNotaChange}
      />
    </div>
  );
};

export default App;
