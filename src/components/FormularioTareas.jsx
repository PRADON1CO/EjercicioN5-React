import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTareas = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={50}
          />
          <Button variant="primary" className="mx-2 btn-dark" type="submit">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-light"></Form.Text>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
