const button = document.getElementById("convert");
const input = document.getElementById("input");
const output = document.getElementById("output");

button.addEventListener("click", function(){

    var value = input.value.trim()

    $.post('/endpoint', {query: value}, function(response) {
        const processedData = response;
        console.log(processedData);
        $(output).text(processedData);
        localStorage.setItem("latest", processedData);
      })
      .fail(function(error) {
        console.error(error);
        localStorage.setItem("Error", error);
      });
      
});