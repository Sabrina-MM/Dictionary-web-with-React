import React from "react";
import "../App.css";

export default function PhotoGallery({ photos }) {
  console.log(photos);
  if (photos) {
    return (
      <section className="Photos">
        <div className="row">
          <h3 className="text-center">
            Photos <i className="fas fa-camera-retro"></i>
          </h3>
          {photos.map((photo, index) => {
            return (
              <div key={index} className="col-md-4">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt=""
                    className="img-fluid mt-4 rounded shadow"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else return null;
}
