


const a = parseFloat(prompt('Введіть перше число')),
	b = parseFloat(prompt('Введіть друге число'))

let sum = a + b,
	mult = a * b,
	div = a / b

document.write(`
       <table border="2px">
        <tbody>
        	<tr>
        		<td>
        		  ${sum}
        		</td>
        		<td>
        			${mult}
        		</td>
        		<td>
        			${div.toFixed(3)}
        		</td>
        	</tr>
        </tbody>
       </table>
`)

