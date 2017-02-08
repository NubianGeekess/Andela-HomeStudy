function getPrimes(num){
  var newArray = [];
  var e = 0;
	for (i = 2; i<=num; i++){
		if (i % 2 === 0 & i !== 2){continue;}
	    else if (i % 3 === 0 & i !== 3){continue;}
	    else if (i % 5 === 0 & i !== 5){continue;}
	    else if (i % 7 === 0 & i !== 7){continue;}
	    else if (i % 11 === 0 & i !== 11){continue;}
	    else if (i % 13 === 0 & i !== 13){continue;}
	    else if (i % 17 === 0 & i !== 17){continue;}
	    else if (i % 19 === 0 & i !== 19){continue;}
	    else{newArray.push(i);}
		
	}
	return newArray;
}
getPrimes(100);