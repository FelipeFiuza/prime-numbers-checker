document.getElementById('checkBtn').onclick = function () {
    
    "use strict";

    document.getElementById("checkBtn").disabled = "true";

    document.getElementById("userNumber").disabled = "true";
    
    var start = new Date().getTime(),

        userNumber = parseInt(document.getElementById('userNumber').value, 10),

        divisors = [],

        loopdiv = 2,

        quotient = 0,

        sqRoot = Math.pow(userNumber, 1 / 2),

        increment = 1,

        operations = 1,
        
        i = 0,

        divList = "",

        divLeng = 0,
        
        end = 0,

        timeTaken = 0,
        
        pbtn = "",
        
        j = 0;

    if (userNumber % 2 !== 0) {

        loopdiv = 3;

        increment = 2;

    }

    while (loopdiv <= sqRoot) {

        if (userNumber % loopdiv === 0) {

            quotient = userNumber / loopdiv;

            divisors.push(loopdiv);

            if (quotient !== loopdiv) {

                divisors.push(quotient);
            }

            operations += 1;

            loopdiv += increment;

        } else {

            operations += 1;

            loopdiv += increment;

        }

    }

    divLeng = divisors.length;

    while (i < divLeng) {

        divList += "<div class='result'>" + divisors[i] + "</div> , ";

        i += 1;

    }

    end = new Date().getTime();

    timeTaken = end - start;

    if (userNumber >= 1) {

        if (userNumber === 1) {

            document.getElementById('firstAnswer').innerHTML = "<br>The number  1  is not prime because it's not divisible by more than one number!";

            document.getElementById('fourthAnswer').innerHTML = "It was needed " + operations + " operations and it took " + timeTaken + " miliseconds to calculate this number!";

        } else if (divisors.length === 0) {

            document.getElementById('firstAnswer').innerHTML = "<br>The number  <div class = 'tested'> " + userNumber + " </div>  is prime because it's only divisible by itself and  1!";

            document.getElementById('fourthAnswer').innerHTML = "It was needed " + operations + " operations and it took " + timeTaken + " miliseconds to calculate this number!";

        } else {

            document.getElementById('firstAnswer').innerHTML = "<br>The number  <div class = 'tested'> " + userNumber + " </div>  is not prime because it's also divisible by<br> " + divList + "<br>and  1!<br>That's a total of " + (divLeng + 2) + " divisor(s)";

            document.getElementById('secondAnswer').innerHTML = "Note that if you have two numbers on a line, when you multiply them the result will be the checked number!";

            document.getElementById('thirdAnswer').innerHTML = "If one number appears lonely on the last line (excluding the line with the 'and 1!'), it's the checked number's square root!";
            
            document.getElementById('fourthAnswer').innerHTML = "It was needed " + operations + " operations and it took " + timeTaken + " miliseconds to calculate this number!";

        }

        pbtn = document.getElementsByClassName("hidden");

        while (j < pbtn.length) {

            pbtn[j].style.display = "inline-block";

            j += 1;

        }

    }

};

document.getElementById("nextPrime").onclick = function () {
    
    "use strict";

    document.getElementById("nextPrime").disabled = "true";

    var start = new Date().getTime(),

        primeCandidate = parseInt(document.getElementById('userNumber').value, 10),
    
        operations = 1,
        
        end = 0,
    
        timeTaken = 0,
    
        loopdiv = 3,

        sqRoot = 0,

        primeSearch = true,

        divfound = false,
    
        scroll = "";

    primeCandidate += 1;

    if (primeCandidate <= 2) {

        end = new Date().getTime();
        
        timeTaken = end - start;

        document.getElementById('answerPrime').innerHTML += "<br><br>The next prime number is <br>  <div class = 'tested'> " + primeCandidate + " </div>It was needed " + operations + " operations and it took " + timeTaken + " miliseconds to calculate this number!";
        
        return;

    }

    if (primeCandidate === 3) {

        end = new Date().getTime();
        
        timeTaken = end - start;

        document.getElementById('answerPrime').innerHTML += "<br><br>The next prime number is <br>  <div class = 'tested'> " + primeCandidate + " </div>It was needed " + operations + " operations and it took " + timeTaken + " miliseconds to calculate this number!";
        
        return;

    }

    if (primeCandidate % 2 === 0) {

        primeCandidate += 1;

    }
        
    sqRoot = Math.pow(primeCandidate, 1 / 2);
    
    while (primeSearch) {

        while (loopdiv <= sqRoot && !divfound) {

            if (primeCandidate % loopdiv === 0) {

                primeCandidate += 2;

                divfound = true;

                operations += 1;

            } else {

                loopdiv += 2;

                operations += 1;

            }

        }

        if (!divfound) {

            primeSearch = false;

        } else {

            loopdiv = 3;

            sqRoot = Math.pow(primeCandidate, 1 / 2);

            divfound = false;

        }
    
    }

    end = new Date().getTime();
    
    timeTaken = end - start;

    document.getElementById('answerPrime').innerHTML += "<br><br>The next prime number is <br>  <div class = 'tested'> " + primeCandidate + " </div>It was needed " + operations + " operations and it took " + timeTaken + " miliseconds to calculate this number!";

    scroll = document.getElementById('answerPrime');

    window.scrollTo(scroll.offsetLeft, scroll.offsetTop);

};

document.getElementById("prevPrime").onclick = function () {

    "use strict";
    
    document.getElementById("prevPrime").disabled = "true";

    var start = new Date().getTime(),

        primeCandidate = parseInt(document.getElementById('userNumber').value, 10),
    
        loopdiv = 3,

        sqRoot = 0,

        primeSearch = true,

        divfound = false,
    
        operations = 1,
    
        end = 0,

        timeTaken = 0,
        
        scroll = "";

    primeCandidate -= 1;

    if (primeCandidate < 2) {

        end = new Date().getTime();
        
        timeTaken = end - start;

        document.getElementById('answerPrime').innerHTML += "<br><br>There is no prime number below <br>  <div class = 'tested'>  2  </div>It was needed " + operations + " operations and it took " + timeTaken + " miliseconds to calculate this number!";

        return;

    }

    if (primeCandidate === 2) {

        end = new Date().getTime();
        
        timeTaken = end - start;

        document.getElementById('answerPrime').innerHTML += "<br><br>The previous prime number is <br>  <div class = 'tested'> " + primeCandidate + " </div>It was needed " + operations + " operations and it took " + timeTaken + " miliseconds to calculate this number!";

        return;

    }

    if (primeCandidate % 2 === 0) {

        primeCandidate -= 1;

    }
    
    sqRoot = Math.pow(primeCandidate, 1 / 2);
    
    while (primeSearch) {

        while (loopdiv <= sqRoot && !divfound) {

            if (primeCandidate % loopdiv === 0) {

                primeCandidate -= 2;

                divfound = true;

                operations += 1;

            } else {

                loopdiv += 2;

                operations += 1;

            }

        }

        if (!divfound) {

            primeSearch = false;

        } else {

            loopdiv = 3;

            sqRoot = Math.pow(primeCandidate, 1 / 2);

            divfound = false;

        }

    }

    end = new Date().getTime();

    timeTaken = end - start;

    document.getElementById('answerPrime').innerHTML += "<br><br>The previous prime number is <br>  <div class = 'tested'> " + primeCandidate + " </div>It was needed " + operations + " operations and it took " + timeTaken + " miliseconds to calculate this number!";

    scroll = document.getElementById('answerPrime');

    window.scrollTo(scroll.offsetLeft, scroll.offsetTop);

};