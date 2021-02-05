var temp = new XMLHttpRequest()
temp.open("GET","https://restcountries.eu/rest/v2",true);
temp.send();
temp.onload = function () {
  var data = JSON.parse(this.response);


  //Countries of Asia
let countriesofasia = data.filter((x) => x.region == 'Asia');
console.log(countriesofasia)

 //countries population < 2Lakhs
 let countriesPop = data.filter((z) => z.population<200000);
 console.log(countriesPop)
 
  //country name capital and flags
  data.forEach(element => {
    console.log(`${element.name} - ${element.capital} - ${element.flag}`);
  });

  //total population 
  let totalPop = data.reduce((sum, currentvalue) => sum+currentvalue.population,0);
  console.log(`Total Population : ${totalPop}`);
 

//US Dollars useing countries
console.log(data.filter(country => {
  let currencies = country.currencies;
  for (let curr of currencies) {
    if (curr.code == "USD")
    return country;
  }
}))

}

