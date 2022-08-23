
const CarDetails = ({ brand, km, color, newCar }) => {
    return (
        <div>
            <h2>
                <ul>
                    <li>
                        Marca: {brand}
                    </li>
                    <li>
                        Marca: {km}
                    </li>
                    <li>
                        Marca: {color}
                    </li>

                    {newCar && <li>Este carro é novo!</li>}


                </ul>

            </h2>
        </div>
    )
}
export default CarDetails