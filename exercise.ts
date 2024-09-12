//1. check whether the number is odd or even
let _vnumber1: number=10;
let _vcek = _vnumber1%2;

function cekNumber(_number: number){
    if (_number%2 === 0) {
    return `${_number} is Odd Number`;
} else {
    return `${_number} is Even Number`;
};
}

console.log(cekNumber(8));


//2. check whether the number is prime number or not
// Bilangan Prima adalah bilangan asli >1 dan tidak habis  dibagi 2 atau bilangan itu sendiri

function cekPrima(_number2: number) {
//const _number2: number = 5
let isPrime: boolean = true;

if (_number2===1) {
        isPrime = false;
      } 
for (let i: number = 2; i < _number2; i++) {
if (_number2 % i === 0 && _number2!==i ) {
    isPrime = false;
    break;
  } 
}
return isPrime;
}

console.log(cekPrima(1));
  

//3. Find the sum of the numbers 1 to N
/**/
function _FindSummary(_number3: number) {
    let _hasilSum: string = `${_number3} -> `;
    let _sum: number=0;
    for (let i: number=1; i<=_number3; i++) {
        _sum= _sum+i;
        //_sum=1+i;

        //console.log(i+"+");
        _hasilSum += i === _number3 ? `${i} = ${_sum}` : ` ${i} + `;
    }

    return _hasilSum;
}

console.log(_FindSummary(3));


//4. Find Factiorial of a number
let _vnumber: number=4;
let _hasilFact = `${_vnumber}! -> `;
let _fact: number=1;
for (let i=_vnumber; i>=1; i--) {
    _fact *= i;

    _hasilFact += i === 1 ? `${i} = ${_fact} ` : ` ${i} x `;
}

console.log(_hasilFact);


//5. Print the first N fibonacci numbers
//0, 1, 1, 2, 3, 5, 8, 11, 19...
//= U(n-1) + U(n-2)


//function _fib(_number5: number) {
    const _number5: number= 7;
    let _n1 = 0;
    let _n2= 1;
    let _fibonacci: number=0;
    let _hasilFib = `${_number5} -> `;
    for (let i: number=1; i<=_number5; i++) {
        _fibonacci = _n1 + _n2;
        _n1= _n2;
        console.log(_n1);
        _n2=_fibonacci;
        console.log(_n2);
        console.log(_fibonacci);
        
        _fibonacci === 0 ? `0, ` : `${_n1}, `;
         console.log(_fibonacci);
    }
    //return _hasilFib;
//}


console.log(5);