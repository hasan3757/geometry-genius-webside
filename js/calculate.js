// trigle
function calculateTrigleArea(){
    // base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);

    // height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    // calculate area
    const area = 0.5 * base * height;
    console.log(area);

    // display area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

// rectangle
function calculateRectangleArea(){
    // base2
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleBaseTest = rectangleBaseInput.value;
    const base2 = parseFloat(rectangleBaseTest);
    console.log(base2);

    // height2
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeightText = rectangleHeightInput.value;
    const height2 = parseFloat(rectangleHeightText);
    console.log(height2);

    // calculate area2
    const area2 = base2 * height2
    console.log(area2);

    // display area2
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area2;
}