import React from "react";
import { useState } from "react";

const ReviewFormRadio = ({ chars, char, index }) => {
  const userRatingRadioVals = {
    Size: [
      "A size too small",
      "1/2 a size too small",
      "Perfect",
      "1/2 a size too big",
      "A size too big",
    ],
    Width: [
      "Too narrow",
      "Slightly narrow",
      "Perfect",
      "Slightly wide",
      "Too wide",
    ],
    Comfort: [
      "Uncomfortable",
      "Slightly uncomfortable",
      "Ok",
      "Comfortable",
      "Perfect",
    ],
    Quality: [
      "Poor",
      "Below average",
      "What I expected",
      "Pretty great",
      "Perfect",
    ],
    Length: [
      "Runs short",
      "Runs slightly short",
      "Perfect",
      "Runs slightly long",
      "Runs long",
    ],
    Fit: [
      "Runs tight",
      "Runs slightly tight",
      "Perfect",
      "Runs slightly long",
      "Runs long",
    ],
  };

  const [radioTitle, setRadioTitle] = useState("none selected");
  let handleTitle = (e) => {
    console.log(e.target.value);
    setRadioTitle(e.target.value);
  };

  return (
    <div className="RR_review-form-radio">
      <span className="RR_review-form-radio-title">{char}: </span>
      <div className="RR_radio-btns-title">
        <span className="RR_radio-selection-meaning">{radioTitle}</span>
        {[0, 1, 2, 3, 4].map((charRadio, i) => {
          return (
            <div className="RR_review-form-radio-btn" key={i}>
              <input
                type="radio"
                name={`${char}-form`}
                value={`${userRatingRadioVals[char][i]}`}
                onChange={(e) => handleTitle(e)}
              ></input>
              <label>
                {i === 0 || i === 4 ? userRatingRadioVals[char][i] : null}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewFormRadio;