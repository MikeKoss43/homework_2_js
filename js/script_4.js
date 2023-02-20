

const cmLong = parseInt(prompt('Введіть довжину(см)'))

let meterLong = cmLong / 100
let kmLong = cmLong / 100000

document.write(`<table>
<tr>
	<td>${cmLong} сантиметр(ів) = ${meterLong} метр(ів)</td>
</tr>
<tr>
	<td>${cmLong} сантиметр(ів) = ${kmLong} кілометр(ів)</td>
</tr>
</table>`)
