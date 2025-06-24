export default function Form() {
  return (
    <section>
      <form id="formAdd">
        <label className="form-label" htmlFor="name">
          Name :
        </label>
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          id="name"
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
            value="Un specified"
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
