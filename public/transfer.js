const button = document.getElementById("convert");
const input = document.getElementById("input");
const output = document.getElementById("output");

button.addEventListener("click", function(){

    var value = input.value.trim()

    $.post('/endpoint', {query: value}, function(response) {
        const processedData = response; // store the response in a variable
        console.log(processedData); // do something with the processed data
        $(output).text(processedData);
      })
      .fail(function(error) {
        console.error(error);
      });
      
});