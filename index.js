
function convertToBase10(value, base) {
    const val=parseInt(value, base);
    console.log(`${value} ${base} ${val}`)
    return val
}

function lagrangeInterpolation(points) {
    let constantTerm = 0;

    for (let i = 0; i < points.length; i++) {
        let xi = points[i].x;
        let yi = points[i].y;

      
        let li = 1;
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                li *= (0 - points[j].x) / (xi - points[j].x);
            }
        }

       
        constantTerm += li * yi;
    }

    return constantTerm;
}


function findConstantTerm(jsonInput) {
    let points = [];

   
    const n = jsonInput.keys.n;
    const k = jsonInput.keys.k;

   
    for (let key in jsonInput) {
        if (key !== 'keys') {
            let x = parseInt(key);
            let base = parseInt(jsonInput[key].base); 
            let value = jsonInput[key].value; 

          
            let y = convertToBase10(value, base);

            
            points.push({ x: x, y: y });
        }
    }


    const constantTerm = lagrangeInterpolation(points);

    return constantTerm;
}


const tc1 ={
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}//2.99

const tc2={
    "keys": {
        "n": 9,
        "k": 6
    },
    "1": {
        "base": "10",
        "value": "28735619723837"
    },
    "2": {
        "base": "16",
        "value": "1A228867F0CA"
    },
    "3": {
        "base": "12",
        "value": "32811A4AA0B7B"
    },
    "4": {
        "base": "11",
        "value": "917978721331A"
    },
    "5": {
        "base": "16",
        "value": "1A22886782E1"
    },
    "6": {
        "base": "10",
        "value": "28735619654702"
    },
    "7": {
        "base": "14",
        "value": "71AB5070CC4B"
    },
    "8": {
        "base": "9",
        "value": "122662581541670"
    },
    "9": {
        "base": "8",
        "value": "642121030037605"
    }
}//33198405829208








const result = findConstantTerm(tc1);
console.log("The constant term (f(0)) is:", result);
