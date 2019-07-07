
const url = 'https://bootcamptech.azurewebsites.net/api/getTemperature';  
fetch(url)
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(data)
    // Here you get the data to modify as you please
    document.getElementById("temperature1").innerHTML  =parseInt (data[0].temperature)+"&#8451;";
    document.getElementById("temperature2").innerHTML  =parseInt (data[1].temperature)+"&#8451;" ;
    document.getElementById("temperature3").innerHTML  =parseInt (data[2].temperature)+"&#8451;";
    document.getElementById("temperature4").innerHTML  =parseInt (data[3].temperature)+"&#8451;";
    document.getElementById("temperature5").innerHTML  =parseInt (data[4].temperature)+"&#8451;";
    })
  

