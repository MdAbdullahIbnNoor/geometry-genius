// Triuangle Area Finder
document.getElementById('btn-triangle').addEventListener('click', function(){
    const baseValue = getPartValueById('base-input');

    const heightValue = getPartValueById('height-input');

    const area = 0.5 * baseValue * heightValue;

    setTextValueByID('area-display', area);
})

// Rectangle Area 
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const baseValue = getPartValueById('width-input');

    const heightValue = getPartValueById('length-input');

    const area = baseValue * heightValue;

    setTextValueByID('rectangle-display', area);
})

// Parallelogram Area
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const baseValue = getPartValueById('baseP-input');

    const heightValue = getPartValueById('heightP-input');

    const area = baseValue * heightValue;

    setTextValueByID('parallelogram-display', areaPlace);
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