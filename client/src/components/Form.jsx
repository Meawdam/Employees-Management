import { useState } from "react";

export default function Form({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    wage: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: "", position: "", wage: "", gender: "" });
  };

  return (
    <section>
      <form id="formAdd" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="name">
          Name :
        </label>
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="form-label" htmlFor="position">
          Position :
        </label>
        <input
          className="form-control mb-3"
          type="text"
          name="position"
          id="position"
          value={formData.position}
          onChange={handleChange}
          required
        />

        <label className="form-label" htmlFor="wage">
          Wage :
        </label>
        <input
          className="form-control mb-3"
          type="number"
          name="wage"
          id="wage"
          value={formData.wage}
          onChange={handleChange}
          required
        />

        <label className="form-label d-block mb-2">Gender :</label>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="unspecified"
            value="Not specified"
            checked={formData.gender === "Not specified"}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="unspecified">
            Not specified
          </label>
        </div>

        <button className="btn btn-success mt-4 d-block" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
