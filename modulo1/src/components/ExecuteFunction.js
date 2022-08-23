import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick = {myFunction}>
            Clique aqui para executar uma função!
        </button>
    </div>
  )
}

export default ExecuteFunction