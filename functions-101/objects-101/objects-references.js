let myAccount = {
    name: 'Andrew',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

//addIncome

let addIncome = function (account, amount) {
    account.income = account.income + amount
}
//reset account

let resetAccount = function (account) {
    account.expenses = 0,
    account.expenses = 0
}
// getAccountSummary

let getAccountSummary = function (account) {
   let balance = account.income - account.expenses
   return `Account for ${account.name} has ${balance}.  $${account.income} in income. ${account.expenses} in expenses`

}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 5.50)

console.log(getAccountSummary(myAccount))