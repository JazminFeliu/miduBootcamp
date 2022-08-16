import "./App.css";
import Mensaje from "./Mensaje";

const Description = () => {
  return <p>Esta es la app del curso de fullstack bootcamp</p>;
};

const App = () => {
  const a = 2;
  const b = 3;

  return (
    <div className="App">
      <h1>Titulo de la App</h1>
      <h1>Titulo de la App</h1>
      <h1>Titulo de la App</h1>
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="green" message="en un curso" />
      <Mensaje color="yellow" message="de react" />
      <Description />
      <br />
      <strong>Estamos trabajan en ello</strong>
      <div>
        <p>El resultado es: </p>
        {a + b}
      </div>
    </div>
  );
};

export default App;
