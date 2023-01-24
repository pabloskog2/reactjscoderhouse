import Carousel from 'react-bootstrap/Carousel';
import notebook from "../images/notebook.jpeg";
import smartphones from "../images/smartphones.webp";
import smartwatches from "../images/smartwatches.jpeg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={smartwatches}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Smartwatches</h3>
          <p>Los mejores relojes inteligentes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={smartphones}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Smartphones</h3>
          <p>Compra tu celular liberado de última generación.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={notebook}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Notebooks</h3>
          <p>
            Los computadores personales con los mejores rendimientos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;