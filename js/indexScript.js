/* 
    Created on : Jul 29, 2021, 11:15:42 AM
    Author     : Zeeshan
*/

document.getElementById("addProduct").addEventListener("click", addNewProduct);
var count = 0;
function addNewProduct(){
    //create element tags for input fields
    const tableRow = createNewElement("productsTable", "tr", "productRow", 0);
    //text field 1 for product name
    const tableData1 = createNewElement(tableRow.className, "td", "tableData1", count);
    const productInput = createNewElement(tableData1.className, "input", "productName", count);
    productInput.type = "text";
    //Number field 1 for product quantity
    const tableData2 = createNewElement(tableRow.className, "td", "tableData2", count);
    const quantityInput = createNewElement(tableData2.className, "input", "quantity", count);
    //Number field 2 for product unit price
    const tableData3 = createNewElement(tableRow.className, "td", "tableData3", count);
    const unitPriceInput = createNewElement(tableData3.className, "input", "unitPrice", count);
    quantityInput.type = unitPriceInput.type = "Number";
    quantityInput.min = unitPriceInput.min = "1";
    count++;
}

//referenced function (reference in: addNewProduct())
function createNewElement(parentClassName, newElementTag, elementClassName, elementIndex) {
    var newElem = document.createElement(newElementTag);
    newElem.className = elementClassName;
    document.getElementsByClassName(parentClassName)[elementIndex].appendChild(newElem);
    return newElem;
}

//add event for calculate button
document.getElementById("calTotal").addEventListener("click", calculateTotal);

//controller function for calculate button
function calculateTotal() {
    //get html elements of three input field 
    const productNameInput = document.getElementsByClassName("productName");
    const unitPriceInputs = document.getElementsByClassName("unitPrice");
    const quantityInputs = document.getElementsByClassName("quantity");
    
    let total = 0;  //variale of result for total bill price 
    let numberOfElements = unitPriceInputs.length;  //get total number of input fields

    for(let i = 0; i < numberOfElements; i++ ){
        //get value from input fields of i'th field
        productName = productNameInput[i].value;
        unitPrice = unitPriceInputs[i].value;
        quantity = quantityInputs[i].value;

        //validate field value
        if(unitPrice != 0 && unitPrice !== null && quantity != 0 && quantity !== null) {
            //check for empty feild for product name field
            if(productName.toString() == "" || productName.toString().trim() == ""){
                productNameInput[i].style.border = "3px solid #FF0000";
                return;
            } else {
                productNameInput[i].style.border = "1px solid black";
            }
            total += (unitPrice * quantity);
        }
    }
    //hoisted variables declaration
    var unitPrice, quantity, productName;
    //show result
    document.getElementById("total").innerHTML = total;
}

//add event for clear Page button
document.getElementById("clearPage").addEventListener("click", clearPage);
//controller clear page button
function clearPage() {
    //get all new table rows which includes input fields
    let productFeilds = document.getElementsByClassName("productRow");
    let i = productFeilds.length - 1;   //get index of last table row element to remove
    //remove all input fields
    while(i >= 0) {
        productFeilds[i].remove();
        // productFeilds[i].parentNode.removeChild("productsTable");
        i--;
    }
    count = 0;
}