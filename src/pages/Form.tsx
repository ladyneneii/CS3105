const Form = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name..."
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="password123"
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
