import React from 'react'

export default function Card({ name,avatar,fondo }) {
    return (
        <>
        <div className="card" style={{ width: "12rem", margin: "5px",backgroundColor:`${fondo}`,color:"white" }}>
                <img src={avatar} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>

        </>
    )
}
