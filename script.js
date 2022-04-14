//XML-HTTP
//rest countries
//the output of this api is an of JSON object
//we hav 4 steps in performing the operations


//step01: create a XHR object(intract with server)
//var variable
//req/request/user defined name
var request =new XMLHttpRequest();


//step02:create a connection/extracting the info
//HTTP METHOD :GET
//API url:
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

//step03:sending a connection
request.send();

//step04:once the data successfully loaded (onload) from the server
//we hav to convert string to object(JSON)
request.onload=function(){
var data=JSON.parse(request.response);
console.log(data);
for(var i=0;i<data.length;i++){
    //console.log(data[i].name,data[i].capital);
    console.log(`country:${data[i].name} capital:${data[i].capital}`);
    console.log(`Latitude:${data[i].latlng[0]} Longitude:${data[i].latlng[1]}`)
    console.log(`flag:${data[i].flag}`)
}

}
//print the details
 
//q1:print the countryname of all the countries in console

//q2:from the above question also print country name along with their capitals

//template literals
//ES6

//q3:  print the latitude & longitude value along with country name

//print the country flag