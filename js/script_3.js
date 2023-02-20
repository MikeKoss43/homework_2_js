

const TAX = 5
const price = parseInt(prompt('Введіть вартісь товару'))
const quantity = parseInt(prompt('Введіть кількість товару'))
const totalPrice = price * quantity
const tax = (totalPrice / 100) * TAX

document.write(`
  <table>
  <tr>
  	<td>Вартість одиниці товару</td>
  	<td>${price}</td>
  </tr>
  <tr>
  	<td>Кількість товару</td>
  	<td>${quantity}</td>
  </tr><tr>
  	<td>Загальна вартісь</td>
  	<td>${totalPrice}</td>
  </tr><tr>
  	<td>ПДВ(Подиви!)</td>
  	<td>${tax}</td>
  </tr>
  </table>
`)
