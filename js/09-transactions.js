import transactionHistory from './data/transactions.js'

// console.log(transactionHistory)
const makeTransactionRowMarkup = transaction => {
    const { id, amount, date, business, type, name, account } = transaction
    return `
    <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
    </tr>
    `
};
console.log(makeTransactionRowMarkup(transactionHistory[0]));

const tableEl = document.querySelector('.js-transaction-table');

const transactionTableRows = transactionHistory
    .map(makeTransactionRowMarkup)
    .join('');

    tableEl.insertAdjacentHTML('beforeend', transactionTableRows  )
console.log(transactionTableRows) 