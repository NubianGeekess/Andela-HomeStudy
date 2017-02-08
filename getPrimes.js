function getPrimes(num){
  var newArray = [];
  var e = 0;
	for (i = 2; i<=num; i++){
		if (i % 2 === 0 & i !== 2){e = 1;}
	    else if (i % 3 === 0 & i !== 3){e = 1;}
	    else if (i % 5 === 0 & i !== 5){e = 1;}
	    else if (i % 7 === 0 & i !== 7){e = 1;}
	    else{newArray.push(i);}
		
	}
	return newArray;
}
getPrimes(500);