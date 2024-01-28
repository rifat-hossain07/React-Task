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
  const [modalCIsOpen, setCIsOpen] = useState(false);
  const [showEvenIds, setShowEvenIds] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [Contacts, setContacts] = useState([]);
  const [oneContacts, setoneContacts] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://contact.mediusware.com/api/contacts/?page=1&search=${searchTerm}`
      )
      .then((res) => setContacts(res.data.results));
  }, [searchTerm]);
  function openModalA() {
    setBIsOpen(false);
    setAIsOpen(true);
  }
  function closeModalA() {
    setAIsOpen(false);
  }
  function openModalB() {
    setAIsOpen(false);
    setBIsOpen(true);
  }
  function closeModalB() {
    setBIsOpen(false);
  }
  function openModalC() {
    setCIsOpen(true);
  }
  function closeModalC() {
    setCIsOpen(false);
  }
  const handleChange = () => {
    setShowEvenIds(!showEvenIds);
  };
  console.log(Contacts);
  const filteredData = showEvenIds
    ? Contacts.filter((item) => item.id % 2 === 0)
    : Contacts;
  const handleContacts = (id) => {
    openModalC();
    const NewContact = Contacts.find((contact) => contact.id === id);
    console.log(NewContact);
    setoneContacts(NewContact);
    console.log(oneContacts);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            style={{
              color: "#46139f",
            }}
            onClick={openModalA}
            className="btn btn-lg "
            type="button"
          >
            All Contacts
          </button>
          <button
            style={{
              color: "#ff7f50",
            }}
            onClick={openModalB}
            className="btn btn-lg "
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
            style={{
              color: "#46139f",
            }}
            onClick={openModalA}
            className="btn btn-lg"
            type="button"
          >
            All Contacts
          </button>
          <button
            style={{
              color: "#ff7f50",
            }}
            onClick={openModalB}
            className="btn btn-lg "
            type="button"
          >
            US Contacts
          </button>
          <button
            style={{
              borderColor: "#46139f",
            }}
            onClick={closeModalA}
            className="btn btn-lg "
            type="button"
          >
            Close
          </button>
        </div>
        {/* Search */}
        <div>
          <input
            type="search"
            placeholder="Search by Phone"
            value={searchTerm}
            onChange={handleSearch}
          />
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
              {filteredData?.map((contact, index) => (
                <tr onClick={() => handleContacts(contact?.id)} key={index}>
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
          <input
            type="checkbox"
            id="showEvenIdsCheckbox"
            onChange={handleChange}
            checked={showEvenIds}
          />
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
          <div
            onClick={closeModalB}
            className=" btn-close"
            aria-label="Close"
          ></div>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button
            style={{
              color: "#46139f",
            }}
            onClick={openModalA}
            className="btn btn-lg "
            type="button"
          >
            All Contacts
          </button>
          <button
            style={{
              color: "#ff7f50",
            }}
            onClick={openModalB}
            className="btn btn-lg "
            type="button"
          >
            US Contacts
          </button>
          <button
            style={{
              borderColor: "#46139f",
            }}
            onClick={closeModalB}
            className="btn btn-lg"
            type="button"
          >
            Close
          </button>
        </div>
        {/* Search */}
        <div>
          <input
            type="search"
            placeholder="Search by Phone"
            value={searchTerm}
            onChange={handleSearch}
          />
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
              {filteredData
                ?.filter((contact) => contact.country.id === 2)
                .map((contact, index) => (
                  <tr onClick={() => handleContacts(contact?.id)} key={index}>
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
          <input
            type="checkbox"
            id="showEvenBCheckbox"
            onChange={handleChange}
            checked={showEvenIds}
          />
        </div>
      </Modal>
      {/* Modal C */}
      <Modal
        isOpen={modalCIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalC}
        style={customStylesA}
        contentLabel="Room Modal"
      >
        <div className="d-flex justify-content-end">
          <div onClick={closeModalC} className=" btn-close" aria-label="Close">
            s
          </div>
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
              {/* {oneContacts?.map((contact, index) => ( */}
              <tr>
                <td>{oneContacts?.id}</td>
                <td>{oneContacts?.phone}</td>
                <td>{oneContacts?.country?.name}</td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  );
};

export default Problem2;
