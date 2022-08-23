
const UserDetails = ({ nome, idade, profissao }) => {


    return (
        <div>
            <h2>
                <ul>
                    <li>
                        Nome: {nome}
                    </li>
                    <li>
                        Idade: {idade}
                    </li>
                    <li>
                        Profissão: {profissao}
                    </li>
                    <li>
                        {idade >= 18 ? (
                            <p>Pode tirar a carteira!</p>
                        ) : <p>Menor de idade</p>}
                    </li>

                </ul>

            </h2>
        </div>
    )
}

export default UserDetails