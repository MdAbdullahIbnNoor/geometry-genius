// Triuangle Area Finder
document.getElementById('btn-triangle').addEventListener('click', function(){
    const baseValue = getPartValueById('base-input');

    const heightValue = getPartValueById('height-input');

    const area = (0.5 * baseValue * heightValue).toFixed(2);

    setTextValueByID('area-display', area);
    
    addToCalculationEntry('Triangle', area);
})

// Rectangle Area 
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const baseValue = getPartValueById('width-input');

    const heightValue = getPartValueById('length-input');

    const area = (baseValue * heightValue).toFixed(2);

    setTextValueByID('rectangle-display', area);

    addToCalculationEntry('Rectangle', area);
})

// Parallelogram Area
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const baseValue = getPartValueById('baseP-input');

    const heightValue = getPartValueById('heightP-input');

    const area = (baseValue * heightValue).toFixed(2);

    setTextValueByID('parallelogram-display', area);

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area);
})

// Ellipse Area
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const baseValue = getPartValueById('ellipse-first-readius');

    const heightValue = getPartValueById('ellipse-second-readius');

    const area = (Math.PI * baseValue * heightValue).toFixed(2);

    setTextValueByID('ellipse-display', area);

    addToCalculationEntry('Ellipse', area);
})

// reusable function
function getPartValueById(elementId){
    const side = document.getElementById(elementId);
    const sideValue = side.value;
    return sideValue;
}

function setTextValueByID(elementId, value){
    const areaPlace = document.getElementById(elementId);
    areaPlace.innerText = value;
}

// Data Validation
/**
 * 1. Set the proper type validation of the input
 * 2. check type using typeof
 * 3. NaN means: Not a Number. isNan is checking wether the input is a number
 */
function inputValidOrNot(sideOne, sideTwo){
    if(isNaN(sideOne) || isNaN(sideTwo) ){
        alert('Please insert number');
        return; 
    }
}

// add to calculation entry
 function addToCalculationEntry(areaType, area){
     console.log(areaType+ ' ' + area + ' cm2');
    //  get the element shere you want to add the dynamic HTML
     const calculationEntry = document.getElementById('calculation-entry');

    // create the element you want to add
    const p = document.createElement('p');

    // get how many child there are
    const count = calculationEntry.childElementCount;

    // set inner html
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="mr-4 btn btn-sm btn-success text-white">Convert</button>`;

    // append the created element as the child of the parent
    calculationEntry.appendChild(p);
 }