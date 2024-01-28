import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const customStylesA = {
  content: {
    content: "center",
    height: "80%",
    width: "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Problem2 = () => {
  const [modalAIsOpen, setAIsOpen] = useState(false);
  const [modalBIsOpen, setBIsOpen] = useState(false);
  const [Contants, setContacts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://contact.mediusware.com/api/contacts/?page=1`)
      .then((res) => setContacts(res.data.results));
  }, []);
  function openModalA() {
    setAIsOpen(true);
  }
  function closeModalA() {
    setAIsOpen(false);
  }
  function openModalB() {
    setBIsOpen(true);
  }
  function closeModalB() {
    setBIsOpen(false);
  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={openModalA}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={openModalB}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>
      {/* Modal A */}
      <Modal
        isOpen={modalAIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalA}
        style={customStylesA}
        contentLabel="Room Modal"
      >
        <div className="d-flex justify-content-end">
          <div
            onClick={closeModalA}
            className=" btn-close"
            aria-label="Close"
          ></div>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={openModalA}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={openModalB}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
          <button
            onClick={closeModalA}
            className="btn btn-lg btn-outline-danger"
            type="button"
          >
            Close
          </button>
        </div>
        {/* Data */}
        <div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Phone</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {Contants?.map((contact, index) => (
                <tr key={index}>
                  <td>{contact?.id}</td>
                  <td>{contact?.phone}</td>
                  <td>{contact?.country.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <label className="m-2">Only Even</label>
          <input type="checkbox" name="" id="" />
        </div>
      </Modal>
      {/* Modal B */}
      <Modal
        isOpen={modalBIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalB}
        style={customStylesA}
        contentLabel="Room Modal"
      >
        <div className="d-flex justify-content-end">
          <div onClick={closeModalB} className=" btn-close" aria-label="Close">
            s
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={openModalA}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={openModalB}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
          <button
            onClick={closeModalB}
            className="btn btn-lg btn-outline-danger"
            type="button"
          >
            Close
          </button>
        </div>
        {/* Data for modal B */}
        <div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Phone</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {Contants?.filter((contact) => contact.country.id === 2).map(
                (contact, index) => (
                  <tr key={index}>
                    <td>{contact?.id}</td>
                    <td>{contact?.phone}</td>
                    <td>{contact?.country.name}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div>
          <label className="m-2">Only Even</label>
          <input type="checkbox" name="" id="" />
        </div>
      </Modal>
    </div>
  );
};

export default Problem2;
