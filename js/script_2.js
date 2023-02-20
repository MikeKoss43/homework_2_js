

const currentYear = new Date().getFullYear()
const userYear = parseInt(prompt('Введіть рік і отримаете вік'))

const diff = currentYear - userYear

document.write(`Вік когось або чогось на сьогоднішній день ${diff} введено ${userYear}`)
