// contar quantos números pares e quantos números ímpares nós temos entre 0 e 100

		let totalNumerosPares = 0
		let totalNumerosImpares = 0

		// laço de repetição
		
		for (let contador = 0; contador <= 100; contador++) {
			if (contador % 2 === 0) {
				totalNumerosPares++
			} else {
				totalNumerosImpares++
			}
		}
		console.log(`O total de números pares entre 0 e 100 é ${totalNumerosPares} e o total de números ímpares nesse mesmo intervalo é ${totalNumerosImpares}`)