


const min = 1
const max = 12

const minTwo = 0
const maxTwo = 6

const randomOne = Math.ceil(Math.random() * (max - min) + min)
const randomTwo = Math.ceil(Math.random() * (maxTwo - minTwo) + minTwo)

const sum = randomOne + randomTwo

document.write(`
<table>
<tr>
	<th>Випадковий номер місяця</th>
	<td>${randomOne}</td>
</tr>
<tr>
	<th>Випадковий номер дня</th>
	<td>${randomOne}</td>
</tr>
<tr>
	<th>Сума</th>
	<td>${sum}</td>
	
</tr>
<th>Я не знаю що він творить(</th>
</table>
`)
