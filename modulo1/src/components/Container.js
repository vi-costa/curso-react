import React from 'react'

// para o pai herdar do filho é necessário o {children}
function Container({children}) {
  return (
    <div>
        <h2>Este é o título do container!</h2>
        {children}</div>
  )
}

export default Container