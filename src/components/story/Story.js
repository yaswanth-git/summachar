import React, { useState } from "react";
import "./story.css";

export default function Story(props) {
  const { slides, modelNumber, index, setModelNumber, isFirst, isLast } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }
  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }
  function handleTouchEnd() {
    if (touchStart - touchEnd > 75) {
      if (currentSlide !== slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
    if (touchStart - touchEnd < -75) {
      if (currentSlide !== 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  }
  return (
    <>
      <div className="story-container">
        <img
          className="large-screen-image"
          alt="Not available"
          src={slides[0]}
          onClick={() => {
            setModelNumber(index);
          }}
        />
        <div className="story-heading">Story</div>
        <div className="slide">
          {slides.map((e, i) => {
            if (i === 0) {
              return (
                <>
                  <div
                    key={e}
                    className={`${i < currentSlide ? "image-wrapper" : ""}`}
                  ></div>
                  <div
                    key={i}
                    className={`image-wrapper ${
                      i === currentSlide - 1 ? "prev-slide" : ""
                    } ${i === currentSlide + 1 ? "next-slide" : ""}
              ${i === currentSlide ? "curr-slide" : ""}`}
                  >
                    <img
                      alt="not available"
                      src={e}
                      className="sliding-image"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    />
                  </div>
                </>
              );
            } else {
              return (
                <div
                  key={i}
                  className={`image-wrapper ${
                    i === currentSlide - 1 ? "prev-slide" : ""
                  } ${i === currentSlide + 1 ? "next-slide" : ""}
              ${i === currentSlide ? "curr-slide" : ""}`}
                >
                  <img
                    alt="not available"
                    src={e}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="sliding-image"
                  />
                </div>
              );
            }
          })}
        </div>
        <div className="progress-bar">
          {slides.map((e, indx) => (
            <div
              key={indx}
              className={`bar ${indx <= currentSlide && "reached-bar"}`}
            ></div>
          ))}
        </div>
      </div>
      {modelNumber === index && (
        <div className="model">
          <div
            className="background-drop"
            onClick={() => {
              setModelNumber(null);
              setCurrentSlide(0);
            }}
          ></div>
          <div className="outer-container">
            <div
              className={`model-reducer`}
              onClick={() => {
                setModelNumber(modelNumber - 1);
              }}
            >
              {isFirst ? "" : "<<"}
            </div>
            <div className="inner-container">
              <div
                className={`slide-reducer`}
                onClick={() => setCurrentSlide(currentSlide - 1)}
              >
                {currentSlide === 0 ? " " : "<"}
              </div>
              <div className="image-and-tracker">
                <div className="story-title">Story</div>
                <img
                  alt="not available"
                  src={slides[currentSlide]}
                  className="slide-image"
                />
                <div className="slide-tracker">
                  {slides.map((e, indx) => (
                    <div
                      key={indx}
                      className={`indicator ${
                        indx === currentSlide && "active-indicator"
                      }`}
                      onClick={() => setCurrentSlide(indx)}
                    ></div>
                  ))}
                </div>
              </div>
              <div
                className={`slide-increaser`}
                onClick={() => setCurrentSlide(currentSlide + 1)}
              >
                {currentSlide === slides.length - 1 ? " " : ">"}
              </div>
            </div>
            <div
              className={`model-increaser`}
              onClick={() => {
                setModelNumber(modelNumber + 1);
              }}
            >
              {isLast ? "" : ">>"}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
