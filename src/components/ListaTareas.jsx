import { ListGroup } from "react-bootstrap";
import ItenTareas from "./ItenTareas";

const ListaTareas = ({ tareasProps, borrarTarea }) => {
  return (
    <ListGroup>
      {
        tareasProps.map((tarea, indice)=> <ItenTareas key={indice} itemTarea={tarea} borrarTarea={borrarTarea}></ItenTareas>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
