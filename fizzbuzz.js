function fizzbuzzBool(fbBool) {
    var text = 'bool';

    if(fbBool) {
        return text;
    }
    return "";
}

function fizzbuzz(max_val) {
    var fbBool = false;
    for(var i = 0; i <= max_val; i++) {
        fbBool = false;
        if(i % 5 == 0) {
            fbBool = true;
        }
        if(i % 4 == 0) {
            if(i % 6 == 0) {
                console.log('fizzbuzz' + fizzbuzzBool(fbBool));
            }
            else {
                console.log('fizz' + fizzbuzzBool(fbBool));
            }
        }
        else if(i % 6 == 0) {
            console.log('buzz' + fizzbuzzBool(fbBool));
        }
        else {
            if(fbBool) {
                console.log(fizzbuzzBool(fbBool));
            }
            else {
                console.log(i);
            }
        }
    }
}

var num = 100;
fizzbuzz(num);