import { useState } from 'react'
import Display from './Display'

export default function Counter() {
  // Cria um state chamado contador
  const [contador, setContador] = useState(0)

  return (
    <section>
      <h3>Contador</h3>

      {/* O pai controla o state e passa o valor via props */}
      <Display valor={contador} />

      {/* Atualização imutável do state */}
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </section>
  )
}