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
  const [textHeight, setTextHeight] = useState(0);
  const [questionTextWidth, setQuestionTextWidth] = useState(0);
  const [optionWidth, setOptionWidth] = useState(0);

  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>(".form-control");
    const mother__label =
      document.querySelector<HTMLInputElement>("#mother__label");
    const formCheckInput =
      document.querySelector<HTMLInputElement>(".form-check-input");
    const formCheckLabel =
      document.querySelector<HTMLInputElement>(".form-check-label");

    if (input) {
      setInputHeight(input.getBoundingClientRect().height);
    }
    if (mother__label) {
      let textHeight = mother__label.getBoundingClientRect().height;
      let questionTextWidth = mother__label.getBoundingClientRect().width;
      setTextHeight(textHeight);
      setQuestionTextWidth(questionTextWidth);
      if (formCheckInput && formCheckLabel) {
        let optionCheckWidth = formCheckInput.getBoundingClientRect().width;
        let optionLabelWidth = formCheckLabel.getBoundingClientRect().width;
        setOptionWidth(optionCheckWidth + optionLabelWidth);
      }
    }
  });

  return (
    <>
      <div className="row mt-5">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          {/* Start of form */}
          <form onSubmit={createUser} className="mx-auto">
            {/* NAME */}
            <div className="mb-3">
              {isLoading ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name..."
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  className="form-control"
                  height={inputHeight}
                />
              )}
            </div>

            {/* EMAIL */}
            <div className="mb-3">
              {isLoading ? (
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  className="form-control"
                  height={inputHeight}
                />
              )}
            </div>

            {/* PASSWORD */}
            <div className="mb-3">
              {isLoading ? (
                <input
                  type="password"
                  className="form-control"
                  placeholder="password123"
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  className="form-control"
                  height={inputHeight}
                />
              )}
            </div>

            {/* TEL */}
            <div className="mb-3">
              {isLoading ? (
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number..."
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  className="form-control"
                  height={inputHeight}
                />
              )}
            </div>

            {/* DATE */}
            <div className="mb-3">
              {isLoading ? (
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of Birth..."
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  className="form-control"
                  height={inputHeight}
                />
              )}
            </div>

            {/* GENDER */}
            <div className="mb-3">
              {isLoading ? (
                <select className="form-select">
                  <option disabled selected>
                    Select Gender...
                  </option>
                  <option value="nonbinary">Non-Binary</option>
                  <option value="woman">Woman</option>
                  <option value="man">Man</option>
                  <option value="others">Others</option>
                </select>
              ) : (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  className="form-control"
                  height={inputHeight}
                />
              )}
            </div>

            {/* MOTHER */}
            <div className="mb-3" id="checkedMother">
              {isLoading ? (
                <>
                  <label id="mother__label">
                    Who is the true Floptropican Mother?
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Jiafei"
                      id="mother__jiafei"
                    />
                    <label className="form-check-label">Jiafei</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Trisha"
                      id="mother__trisha"
                    />
                    <label className="form-check-label">Trisha</label>
                  </div>
                </>
              ) : (
                <>
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    className="form-control"
                    height={textHeight}
                    width={questionTextWidth}
                  />
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    className="form-control"
                    height={textHeight}
                    width={optionWidth}
                  />
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    className="form-control"
                    height={textHeight}
                    width={optionWidth}
                  />
                </>
              )}
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
