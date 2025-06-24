export default function Form() {
  return (
    <section>
      <form id="formAdd">
        <label className="form-label" htmlFor="name">
          Name :
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          required
        />
        <label className="form-label" htmlFor="position">
          Position :
        </label>
        <input
          className="form-control"
          type="text"
          name="position"
          id="position"
          required
        />
        <label className="form-label" htmlFor="wage">
          Wage :
        </label>
        <input
          className="form-control"
          type="number"
          name="wage"
          id="wage"
          required
        />
        <label className="form-label d-block m-2">Gender :</label>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
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
            value="female"
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        <button className="btn btn-success mt-3 d-block" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
