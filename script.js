









document.getElementById("run").addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Wilrijk&appid=2e2fe963c26dcc725c148744c25388b1")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));


});