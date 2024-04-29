import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import FormularioTareas from './components/FormularioTareas';

function App() {

  return (
    <>
      <Container className='my-4 mainPage'>
        <h1>Lista De Tareas</h1>
        <FormularioTareas></FormularioTareas>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App
