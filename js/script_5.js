

const actualDay = new Date()

const today = new Date(
	actualDay.getFullYear(),
	actualDay.getMonth(),
	actualDay.getDate()
)

let different = actualDay - today

const getSeconds = different / 1000

const hours = parseInt(getSeconds / 3600)
const minutes = parseInt(getSeconds / 60) - hours * 60
const seconds= parseInt(getSeconds - hours * 60 - minutes * 60) % 60

document.write(
	`	<table>
	<tr>
		<th>Секунд від початку доби</th>
		<td>${getSeconds.toFixed(0)}</td>
	</tr>
	<tr>
		<th>Кількість годин</th>
		<td>${hours}</td>
	</tr><tr>
		<th>Кількість хвилин</th>
		<td>${minutes}</td>
	</tr><tr>
		<th>Кількість секунд</th>
		<td>${seconds}</td>
	</tr>
</table>`
)
