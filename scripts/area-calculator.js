// Triuangle Area Finder
document.getElementById('btn-triangle').addEventListener('click', function(){
    const baseValue = getPartValueById('base-input');

    const heightValue = getPartValueById('height-input');

    const area = (0.5 * baseValue * heightValue).toFixed(2);

    setTextValueByID('area-display', area);
})

// Rectangle Area 
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const baseValue = getPartValueById('width-input');

    const heightValue = getPartValueById('length-input');

    const area = (baseValue * heightValue).toFixed(2);

    setTextValueByID('rectangle-display', area);
})

// Parallelogram Area
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const baseValue = getPartValueById('baseP-input');

    const heightValue = getPartValueById('heightP-input');

    const area = (baseValue * heightValue).toFixed(2);

    setTextValueByID('parallelogram-display', area);
})

// Ellipse Area
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const baseValue = getPartValueById('ellipse-first-readius');

    const heightValue = getPartValueById('ellipse-second-readius');

    const area = (Math.PI * baseValue * heightValue).toFixed(2);

    setTextValueByID('ellipse-display', area);
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