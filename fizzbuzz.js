function fizzbuzz(max_val) {
    var fbBool = false;
    for(var i = 0; i <= max_val; i++) {
        if(i % 4 == 0) {
            if(i % 6 == 0) {
                console.log('fizzbuzz');
            }
            else {
                console.log('fizz');
            }
        }
        else if(i % 6 == 0) {
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}

var num = 100;
fizzbuzz(num);