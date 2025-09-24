import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ReportPage(props) {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true); // Mostrar la modal al enviar
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#ffffffff', margin: '2rem' }}>{props.saludo}</h1>
      <form className="row col-8 mx-auto g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label"></label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Asunto:" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label"></label>
          <select id="inputState" className="form-select">
            <option defaultValue>Prioridad:</option>
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="inputDetail" className="form-label"></label>
          <textarea
            className="form-control"
            id="inputDetail"
            placeholder="Detalle:"
            rows={5}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label"></label>
          <input type="text" className="form-control" id="inputCity" placeholder="Adjuntar archivo:" />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Button type="submit" variant="dark">
            Enviar
          </Button>
        </div>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img
    src="https://icons.getbootstrap.com/assets/icons/check-circle.svg"
    alt="icono éxito"
    width="24"
    height="24"
    style={{ marginRight: '8px', verticalAlign: 'middle' }}
  />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Tu reporte fue registrado con éxito.
Podrás dar seguimiento en la sección de
Mis tickets.</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ReportPage;