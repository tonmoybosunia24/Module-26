function calculateTraingleArea(){
       const traingleBaseinput = document.getElementById("traingle-base")
       const traingleBaseText = traingleBaseinput.value;
       const base = parseFloat(traingleBaseText)
       // console.log(base)
       const traingleHeightInput = document.getElementById("traingle-height");
       const traingleHeightText = traingleHeightInput.value;
       const height = parseFloat(traingleHeightText)
       // console.log(height)
       const area = 0.5 * base * height;
       // console.log(area)
       const traingleAreaspan = document.getElementById("traingle-Area");
       traingleAreaspan.innerText = area;
}
function calculateRectengleArea(){
       const rectengleinput = document.getElementById("rectangle-width");
       const rectengleWidthText = rectengleinput.value;
       const width = parseFloat(rectengleWidthText)
       
       const rectangleHeightInput = document.getElementById("rectangle-height");
       const rectangleHeightText = rectangleHeightInput.value;
       const height = parseFloat(rectangleHeightText);
       console.log(height);

       const rectanglearea = width * height;
       const rectangleOutputSpan = document.getElementById("rectangle-Area");
       rectangleOutputSpan.innerText = rectanglearea;
}
function calculatePerallelogramArea(){
       const PerallelogramwidthInput = document.getElementById("Perallelogram-base");
       const PerallelogramWidthText = PerallelogramwidthInput.value;
       const Perallelogramwidth = parseFloat(PerallelogramWidthText);

       const PerallelogramHeightInput = document.getElementById("Perallelogram-height");
       const PerallelogramHeightText = PerallelogramHeightInput.value;
       const PerallelogramHeight = parseFloat(PerallelogramHeightText)

       const PerallelogramArea = Perallelogramwidth * PerallelogramHeight;
       const PerallelogramOutputSpan = document.getElementById("Perallelogram-Area");
       PerallelogramOutputSpan.innerText = PerallelogramArea;
}
function getInputValueById(InputFieldId){
       const InputField = document.getElementById(InputFieldId);
       const inputValueText = InputField.value;
       const inputValue = parseFloat(inputValueText);
       return inputValue;
}
function setElement(Element, text){
       const element = document.getElementById(Element);
       element.innerText = text;
}
function calculateRhombusArea(){
       const base = getInputValueById("Rhombus-base")
       const height = getInputValueById("Rhombus-height")
       const RhoumbusArea = 0.5 * base * height;
       setElement("Rhombus-Area", RhoumbusArea);
}
function calculatePentagonArea(){
       const base = getInputValueById("Pentagon-base");
       const height = getInputValueById("Pentagon-height");
       const PentagonArea = base * height;
       setElement("Pentagon-Area", PentagonArea)
}
function calculateEllipseArea(){
       const base = getInputValueById("Ellipse-base");
       const height = getInputValueById("Ellipse-height");
       const EllipseArea = 3.1416 * base * height;
       const EllipseAreaOutputSpan = document.getElementById("Ellipse-Area")
       EllipseAreaOutputSpan.innerText = EllipseArea;
}
