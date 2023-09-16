import { useState } from "react";
import { Skeleton } from "@mui/material";
import { userSchema } from "../validations/UserValidation";

const Form = () => {
  const createUser = async (e: any) => {
    e.preventDefault();

    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    const isValid = await userSchema.isValid(formData);
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <form onSubmit={createUser}>
        {isLoading ? (
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name..." />
          </div>
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={345}
            height={100}
          />
        )}
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
