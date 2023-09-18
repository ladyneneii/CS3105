import { useState, useRef, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { userSchema } from "../validations/UserValidation";
import "../index.css";

const Form = () => {
  const [isLoading, setIsLoading] = useState(true);
  const createUser = async (e: any) => {
    e.preventDefault();

    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      telnumber: e.target[3].value,
      date: e.target[4].value,
      gender: e.target[5].value,
      mother: e.target[6].value,
    };

    const isValid = await userSchema.isValid(formData);
    if (isValid) {
      setIsLoading(false);
      console.log(formData);
    } else {
      console.log("Invalid form input/s.");
    }
  };

  const [inputHeight, setInputHeight] = useState(0);

  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>(".form-control");

    if (input) {
      setInputHeight(input.getBoundingClientRect().height);
    }
  });

  return (
    <>
      <div className="row mt-5">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          {/* Start of form */}
          <form onSubmit={createUser} className="mx-auto">
            {/* NAME */}
            {isLoading ? (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name..."
                />
              </div>
            ) : (
              <Skeleton
                variant="rectangular"
                animation="wave"
                className="form-control"
                height={inputHeight}
              />
            )}

            {/* EMAIL */}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="password123"
              />
            </div>

            {/* TEL */}
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number..."
              />
            </div>

            {/* DATE */}
            <div className="mb-3">
              <input
                type="date"
                className="form-control"
                placeholder="Date of Birth..."
              />
            </div>

            {/* GENDER */}
            <div className="mb-3">
              <select className="form-select">
                <option disabled selected>
                  Select Gender...
                </option>
                <option value="nonbinary">Non-Binary</option>
                <option value="woman">Woman</option>
                <option value="man">Man</option>
                <option value="others">Others</option>
              </select>
            </div>

            {/* MOTHER */}
            <div className="mb-3">
              <label>Who is the true Floptropican Mother?</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Jiafei"
                  id="flexCheckDefault"
                />
                <label className="form-check-label">Jiafei</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Trisha"
                  id="flexCheckChecked"
                />
                <label className="form-check-label">Trisha</label>
              </div>
            </div>

            {/* SUBMIT */}
            <input type="submit" />
          </form>
          {/* End of form */}
        </div>
      </div>
    </>
  );
};

export default Form;
