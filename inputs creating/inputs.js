layer = 0;
layer_name = 0;
err = 0;

const addNumber = document.getElementById("clickCount");
const showNum = document.getElementById("showMe");
addNumber.onclick = () => {
  showNum.value++;
};
function addInput  () {
    var firstInput, secondInput,thirdInput, errorText,clickcount ;
    var text = document.getElementById("text");
  
      
    
    if (layer != "n+1") {
        firstInput  = document.createElement("input");
        secondInput = document.createElement("input");
        thirdInput  = document.createElement("input");
        

        firstInput.type  = secondInput.type = "text";
        firstInput.name  = "first" + layer_name;
        secondInput.name = "second" + layer_name;
        thirdInput.name = "third" + layer_name;
        
        
        text.appendChild(firstInput);
        text.appendChild(secondInput);
        text.appendChild(thirdInput);
        text.appendChild(document.createElement("br"));
      
        layer += 1;
        layer_name+= 1;
        

    
    } else {
        if (err == 0) {
            text.appendChild(document.createElement("br"))
            text.appendChild(document.createTextNode("Adaugati maxim n+1 ingrediente."));
          
            err = 1;
        }
      
        document.form.add.disabled = true;

        
    }
};counter()
