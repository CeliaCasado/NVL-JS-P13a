	//Declaro la variable con el array de números primos y las otras variables
	var numerosPrimos = new Array();
	var n;
	var numero;

	//Declaro la función que utilizaré para discriminar cuales son primos y cuales no
	function Primos(numero)
	{
		for (i = 2; i < numero; i++)
		{
			if (numero % i === 0)
			{
				return false;
			}
		}
		if (numero === 1)
		{
			return false;
		}
		numerosPrimos.push (numero);
		return;
	}

	//Defino la función que recoge los números primos
	function listaPrimos (n)
	{
		var j = 2;
		do
		{
			Primos(j);
			j++;
		}
		while (numerosPrimos.length < n + 1)
	}

	listaPrimos(100);

	alert (numerosPrimos);