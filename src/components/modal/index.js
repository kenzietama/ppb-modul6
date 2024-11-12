import React from "react";
import "./index.css";

const placeholderImage = "https://via.placeholder.com/300";

export default function index({ isShow, data, onCancel }){
    const imageUrl = data?.i?.imageUrl || placeholderImage;

    return (
        <div className={!isShow ? "hidden" : ""}>
            <div className="modal-bg"></div>
            <div className="modal">
                { data && (
                    <img src={imageUrl} alt="sesuatu"/>
                )}
                <div className="modal-info">
                    <h3>Data Information</h3>
                    <p>Judul : {data?.l}</p>
                    <p>Platform : {data?.q}</p>
                    <p>Tahun Rilis : {data?.y}</p>
                    <p>Pemeran : {data?.s}</p>
                </div>
                <button className="close-button" onClick={onCancel}>Close</button>
            </div>
        </div>
    );
}
