const Modal = {
  // A função Toogle substitui open e close sendo mais semântico.
  open() {
    // Abrir modal
    // Adcionar a class active ao modal
    document
      .querySelector('.modal-overlay')
      .classList
      .add('active')
  },
  close() {
    // fechar o modal
    document
      .querySelector('.modal-overlay')
      .classList
      .remove('active')
  }
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '28/09/2021',
  },
  {
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '28/09/2021',
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '28/09/2021',
  },
]
// Eu preciso somar as entradas
// sepois eu preciso somar as saídas e
// remover das entradas o valor das saídas
// assim, eu terei o total

const Transaction = {
  incomes() {
    // somar as entradas
  },
  expenses() {
    // somar as saídas
  },
  total() {
    // entradas - saídas
  }
}
// Substituir os dados do HTML com os dados do JS

const DOM = {
  innerHTMLTransaction() {
    const html = `
    <tr>
      <td class="description">Luz</td>
      <td class="expense">- R$ 500,00</td>
      <td class="date">23/01/2021</td>
      <th><img src="./assets/minus.svg" alt="Remover Transação"></th>
    </tr>
    `
  }
}
