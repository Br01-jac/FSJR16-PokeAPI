import React from 'react'

export default function Card({ name, id, avatar }) {

    return (
        <>
            <div className="card" style={{ width: "12rem", margin: "5px", }}>
                <img src={avatar} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>

        </>
    )
}
