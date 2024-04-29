import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTareas = () => {
    const [nombreTarea, setNombreTarea] = useState("");
    const [tareas, setTareas] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault();
      // tareas.push(nombreTarea)
      setTareas([...tareas, nombreTarea]); //operador spread
      //limpiar el input
      setNombreTarea('');
      }
      
      const borrarTarea = (nombre)=>{
        const tareasActualizadas = tareas.filter((itemTarea)=> itemTarea !== nombre )
        // actualizar el state tareas
        setTareas(tareasActualizadas);
      }

  return (
    <section>
      <Form onSubmit={handleSubmit}> 
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e) => setNombreTarea(e.target.value)}
            value={nombreTarea}
          />
          <Button variant="primary" className="mx-2 btn-dark" type="submit">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-light"></Form.Text>
      </Form>
      <ListaTareas tareasProps = {tareas} borrarTarea = {borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
