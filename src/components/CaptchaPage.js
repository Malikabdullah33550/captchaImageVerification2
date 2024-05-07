import React, { useEffect, useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { MdHeadphones } from "react-icons/md";
import { RiRefreshLine } from "react-icons/ri";

const captchaImageArray = [
  "cat1.jpg",
  "cat2.jpg",
  "cat3.jpg",
  "horse1.jpg",
  "horse2.jpg",
  "horse3.jpg",
  "dog1.jpg",
  "dog2.jpg",
  "dog3.jpg",
];

const CaptchaPage = () => {
  const randomizeImages = () => {
    captchaImageArray.sort(() => Math.random() - 0.5);
  };
  useEffect(() => {
    randomizeImages();
  }, []);

  const [selectionType, setSelectionType] = useState("cat");
  const [selectedImages, setSelectedImages] = useState([]);

  const imageClicked = (photo) => {
    if (selectedImages.includes(photo)) {
      setSelectedImages(
        selectedImages.filter((image) => image !== photo)
      )
      console.log(selectedImages);
    } else {
      setSelectedImages([...selectedImages, photo]);
      console.log(selectedImages)
    }
  }
    return (
      <>
        <div className="captchaMainDiv">
          <div className="topDiv">
            <h2>Please confirm if you are Human</h2>
            <p>
              Please click on all of the
              <b>
                <u>{selectionType}</u>
              </b>
              images and hit the submit button
            </p>
          </div>
          <div className="imageSection">
            {captchaImageArray.map((captchaimages, index) => {
              return (
                <img
                  className="captchaImages"
                  key={index}
                  src={captchaimages}
                  alt={`Image ${index + 1}`}
                  onClick={() => imageClicked(captchaimages)}
                  style={{
                    border: selectedImages.includes(captchaimages)
                      ? "2px solid blue"
                      : "2px solid transparent",
                  }}
                />
              );
            })}
          </div>
          <div className="bottomSection">
            <div className="iconSection">
              <RiRefreshLine size={30} />
              <IoIosInformationCircle size={30} />
              <MdHeadphones size={30} />
            </div>
            <button className="confirmButton">Confirm</button>
          </div>
        </div>
      </>
    );
  };
export default CaptchaPage;
