'use strict';

var myApp = {

	dataTypes: function (data){
				var answer;
				if(typeof(data) === 'string'){
						answer = data.length;
				}else if(data === undefined || data === null){
						answer = "no value";
				}else if(typeof(data) === 'boolean'){
					answer = data;
				}else if(typeof(data) === 'number'){
					if(data < 100){
						answer = "less than 100";
					}else if(data > 100){
						answer =  "more than 100";
					}else{ answer = "equal to 100";}
				}else if (Array.isArray(data)){
					data.length >= 2 ? answer = data[2] : answer = undefined;
				}else if(typeof(data) === 'function'){
					answer = data(true);
				}
				return answer;
	} 

}

module.exports = myApp;