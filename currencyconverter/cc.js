var url = `https://api.exchangeratesapi.io/latest?base=`


//es6
async function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    let response = await fetch(`${url}${base}`,{method:'GET'});
    let data = await response.json()
    final = data.rates;
    final = (final[output]*parseFloat(amount))
    var result = `Converted Value of ${amount} ${base} is ${final} ${output}`;
    document.getElementById('converted').innerText=result  
}

//es5
/*function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        final = data.rates;
        final = (final[output]*parseFloat(amount))
        var result = `Converted Value of ${amount} ${base} is ${final} ${output}`;
        document.getElementById('converted').innerText=result
    })
}
*/