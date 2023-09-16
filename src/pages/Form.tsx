import { useState, useRef, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { userSchema } from "../validations/UserValidation";
import "../index.css";

const Form = () => {
  const createUser = async (e: any) => {
    e.preventDefault();

    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
  };

  const [isLoading, setIsLoading] = useState(false);
  // const [inputDimensions, setInputDimensions] = useState({
  //   width: 0,
  //   height: 0,
  // });
  // const inputRef = useRef<HTMLInputElement | null>(null);

  // useEffect(() => {
  //   if (inputRef.current) {
  //     const { width, height } = inputRef.current.getBoundingClientRect();
  //     setInputDimensions({ width, height });
  //     console.log(inputDimensions.width, inputDimensions.height);
  //   }
  // }, []);

  return (
    <>
      <form onSubmit={createUser}>
        {isLoading ? (
          <div className="mb-3">
            <input
              type="text"
              className="form-control form__input"
              placeholder="Name..."
              style={{ width: "400px" /* other CSS properties here */ }}
              // ref={inputRef}
            />
          </div>
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={400}
            height={38}
          />
        )}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
            style={{ width: "400px" /* other CSS properties here */ }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="password123"
            style={{ width: "400px" /* other CSS properties here */ }}
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
