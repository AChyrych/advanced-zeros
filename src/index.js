module.exports = function getZerosCount(number, base) {
		var j = 1;
		var i = 2;
		var a = new Array();
		do
			{
 				if ( base%i == 0 ){
  					a[j] = i;
  					j++;
  					base = base / i;
 				}
 				else{
  				i++;
 				}
			} 
		while (i < base);

		a[j] = i; // В массиве "a" содержатся вычисленные множители.
		var max = a.reduce(function(a,b){ // находим макс множитель
			return Math.max(a,b); 
		});
		var min = a.reduce(function(a,b){ // находим мин множитель
			return Math.min(a,b); 
		});

		var countMax = 0;
		var countMin = 0;
		var maxMn = max;
		var minMn = min;
		for (var i = 0; i < a.length; i++) {
  		maxMn == a[i] ? countMax++ : 0;
  		minMn == a[i] ? countMin++ : 0;
		}


		
		var zerosCountMax = 0;
		var z = 0;
		while (max < number) {
			z = Math.floor(number/max);
			zerosCountMax += z;
			max = max * maxMn; 
		}
		if (countMax > 1) {
			zerosCountMax = Math.floor(zerosCountMax/countMax);
		}
		var zerosCountMin = 0;
		
		
		while (min < number) {
			z = Math.floor(number/min);
			zerosCountMin += z;
			min = min * minMn;
		}
		if (countMin > 1) {
		zerosCountMin = Math.floor(zerosCountMin/countMin);
	}
		if (zerosCountMax < zerosCountMin) {
			return zerosCountMax;
		} else {
			return zerosCountMin;
		}
}