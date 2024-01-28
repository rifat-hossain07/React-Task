import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [datas, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target;
    const name = input.name.value;
    const status = input.status.value;
    const newData = { name, status };
    setData((prevData) => [...prevData, newData]);
  };
  const handleClick = (val) => {
    setShow(val);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
                required
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>

            {show === "active" && (
              <tbody>
                {datas
                  ?.filter(
                    (data) =>
                      data.status === "active" || data.status === "Active"
                  )
                  .map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.status}</td>
                    </tr>
                  ))}
              </tbody>
            )}

            {show === "completed" && (
              <tbody>
                {datas
                  ?.filter(
                    (data) =>
                      data.status === "completed" || data.status === "Completed"
                  )
                  .map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.status}</td>
                    </tr>
                  ))}
              </tbody>
            )}

            {show === "all" && (
              <tbody>
                {datas
                  ?.sort((a, b) => {
                    if (a.status === "active" && b.status !== "active") {
                      return -1;
                    }
                    if (a.status !== "active" && b.status === "active") {
                      return 1;
                    }
                    if (a.status === "completed" && b.status !== "completed") {
                      return -1;
                    }
                    if (a.status !== "completed" && b.status === "completed") {
                      return 1;
                    }
                    return 0;
                  })
                  .map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.status}</td>
                    </tr>
                  ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
