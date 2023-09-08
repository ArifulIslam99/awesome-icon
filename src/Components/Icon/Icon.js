import React, { useState } from "react";
import "./Icon.css";
import Button from 'react-bootstrap/Button';
import IconModal from "../IconModal/IconModal";
const Icon = (props) => {
  const { fig } = props.icon;
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to open the modal with selected item's details
  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  return (
    <div className="icon">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
        onClick={() => openModal(props.icon)}
      >
        <img style={{ width: "50px", height: "50px" }} src={fig} alt="" />
        <p className="mt-2">{props.icon.class.slice(2)}</p>
      </div>
    <IconModal show={showModal} onHide={closeModal} icon={selectedItem}></IconModal>
    </div>
  );
};

export default Icon;
