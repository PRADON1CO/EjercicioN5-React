import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTareas = () => {
    const [nombreTarea, setNombreTarea] = useState("");
    const [tareas, setTareas] = useState(
      JSON.parse(localStorage.getItem("listaTareasKey")) || []
    );

    useEffect(() => {
      localStorage.setItem("listaTareasKey", JSON.stringify(tareas));
    }, [tareas]);

    const handleSubmit = (e)=>{
      e.preventDefault();
      setTareas([...tareas, nombreTarea]);
      setNombreTarea('');
      }
      
      const borrarTarea = (nombre)=>{
        const tareasActualizadas = tareas.filter((itemTarea)=> itemTarea !== nombre )
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
