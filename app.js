var btnTranslate = document.querySelector("#btn-translate");
// The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.
// The Document querySelector() returns the first element within in the document that matches the specified selectors. For eg: here it returned the selector with id btn-translate which was the id given for button
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


function getTrabslateUrl(text) {
    return serverUrl + "?" + "text= " + text
}
function errorHandler(error){
    console.log("error occured" , error);
    alert("server is down! try again after sometime");
}



function clickHandler() {
    outputDiv.innerText = "aggjhdamhnsafhg " + txtInput.value;

    // when you have to check the value or assign it you use 
    // .value but when we have to acces inner text we use     .innerText
    var inputText = txtInput.value; //taking input
    //   processing output
    fetch(getTrabslateUrl(inputText))
        .then(res => res.json())
        .then(json => console.log(json.contents.translated))
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)