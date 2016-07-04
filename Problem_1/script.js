var func = function(num) {
	var sum = 0;
	
    for (var i = 0; i < num; i++) {
		if (i % 3 === 0) {
			sum += i;
		} else if (i % 5 === 0) {
			sum += i;
		} 
	}
    return sum;
};

func(1000);
