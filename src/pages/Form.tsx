import { userSchema } from "../validations/UserValidation";

const Form = () => {
  const createUser = async (e) => {
    e.preventDefault();

    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name..." />
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
