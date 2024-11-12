import React from "react";
import "./index.css";

const placeholderImage = "https://via.placeholder.com/150";

export default function index({ data, onClick }) {
    const imageUrl = data?.i?.imageUrl || placeholderImage;

    return (
        <div className="card" onClick={onClick}>
            {data ? (
                <>
                    <figure>
                        <img src={imageUrl} alt={data.l} />
                    </figure>
                    <div className="card-info">
                        <h3>{data.l}</h3>
                        <p>{data.q}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
