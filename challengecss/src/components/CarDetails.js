import React from 'react'
import styles from './CarDetails.module.css'

const CarDetails = ({car}) => {

  return (
    <div>
        <h1>{car.name}</h1>
        <p>KM:{car.km}</p>
        <p>Cor:{car.color}</p>
    </div>
  )
}

export default CarDetails