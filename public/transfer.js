const button = document.getElementById("convert");
const input = document.getElementById("input");

button.addEventListener("click", function(){

    var value = input.value.trim()
    // need to make ajax request actually work
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/endpoint", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "value": "hello",
        value: "hi"
    }));

    // $.post("/endpoint", { query: "test" });

});