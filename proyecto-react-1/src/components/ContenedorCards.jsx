import React from 'react'
import Card from './Card'

export default function ContenedorCards({arregloPokemons}) {

  return (
    <>
   <div className="contenedor-cards">
                {arregloPokemons.map((el) => (
                
                    <Card key={el.id} name={el.name} avatar={el.avatar} />
                ))}
            </div>
    </>
  )
}
