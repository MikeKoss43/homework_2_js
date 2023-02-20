

const quantityFirst = parseFloat(prompt('Введіть кількість товару №1'))
const priceFirst = parseFloat(prompt('Введіть вартість товару №1')).toFixed(2)

const quantitySecond = parseFloat(prompt('Введіть кількість товару №2'))
const priceSecond = parseFloat(prompt('Введіть вартість товару №2')).toFixed(2)

const quantityThird = parseFloat(prompt('Введіть кількість товару №3'))
const priceThird = parseFloat(prompt('Введіть вартість товару №3')).toFixed(2)

const firsTotal = (quantityFirst * priceFirst).toFixed(2)
const secondTotal = (quantitySecond * priceSecond).toFixed(2)
const thirdTotal = (quantityThird * priceThird).toFixed(2)

const total = (parseFloat(firsTotal) + parseFloat(secondTotal) + parseFloat(thirdTotal)).toFixed(2)

document.write(`
<table>

<tr>
	<th>Товар №1</th>
	<th>${priceFirst}$</th>
	<th> x ${quantityFirst}шт</th>
	<th> --- ${firsTotal}$</th>
</tr>

<tr>
	<th>Товар №2</th>
	<th>${priceSecond}$</th>
	<th> x ${quantitySecond}шт</th>
	<th> --- ${secondTotal}$</th>
</tr>

<tr>
	<th>Товар №3</th>
	<th>${priceThird}$</th>
	<th> x ${quantityThird}шт</th>
	<th> --- ${thirdTotal}$</th>
</tr>
<tr>
<th>Сума покупки: ${total}$</th>
</tr>
</table>

<p>не вистачило мене на розмітку</p>
`)
