import { useState } from 'react'

// Produtos de exemplo que o botão vai adicionando, na ordem
const CATALOGO = [
  { nome: 'Caneta', preco: 3.5 },
  { nome: 'Caderno', preco: 18.9 },
  { nome: 'Mochila', preco: 129.9 },
  { nome: 'Mouse', preco: 59.9 },
  { nome: 'Teclado', preco: 89.9 }
]

const formatarPreco = valor =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ProdutoList() {
  const [produtos, setProdutos] = useState([])

  function adicionarProduto() {
    const modelo = CATALOGO[produtos.length % CATALOGO.length]
    const novoProduto = { id: Date.now() + produtos.length, ...modelo }

    // Cria nova lista (imutabilidade)
    setProdutos([...produtos, novoProduto])
  }

  // Valor derivado do state (não precisa de useEffect)
  const total = produtos.reduce((soma, p) => soma + p.preco, 0)

  return (
    <section>
      <h3>Produtos</h3>

      <button onClick={adicionarProduto}>Adicionar Produto</button>

      <ul>
        {produtos.map(p => (
          <li key={p.id}>
            {p.nome} — {formatarPreco(p.preco)}
          </li>
        ))}
      </ul>

      <p>Total de produtos: {produtos.length}</p>
      <p>Soma dos preços: {formatarPreco(total)}</p>
    </section>
  )
}