import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import "./IconModal.css"
function IconModal(props) {
  const resource = props.icon;
  if (resource === null) {
    return <div></div>;
  }

  const handleDownloadClick = (imageUrl) => {
    // Create an anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = "";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  let currentRotation = 0;
  function handleRotation ()
  { 
    currentRotation+= 45;
    const image = document.getElementById('image');
    image.style.transform = `rotate(${currentRotation}deg)`;
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {resource.class.slice(2)}
        </Modal.Title>
        <p className="ms-5 ps-5 pt-3 fst-italic">Unicode: 0AN{resource.id}</p>
      </Modal.Header>
      <Modal.Body className="w-75 mx-auto">
        <img
        id="image"
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid bisque",
            padding: "20px",
          }}
          src={props.icon.fig}
          alt=""
          className="mt-5"
        />

        <div className="inside-container mt-5">
          <div>
            <p
              style={{
                fontFamily: "monospace",
                fontStyle: "italic",
                fontSize: "1.1em",
              }}
            >
              Use this icon on your project!
            </p>
            <section
              style={{
                fontWeight: "bolder",
                border: "1px solid blue",
                width: "55%",
                height: "60px",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {`<i class="fa-svg fa-${resource.class
                .toLowerCase()
                .slice(2)}"></i>`}
            </section>
          </div>
          <div>
            <Button
              className="m-2 btn-success"
              onClick={() => handleDownloadClick(resource.fig)}
            >
              {" "}
              <FontAwesomeIcon icon={faFileDownload} size="xl" />{" "}
            </Button>

            <Button className="btn-danger" onClick={handleRotation}>Rotate Image</Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IconModal;
