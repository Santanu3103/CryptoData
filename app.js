const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false/10";

// Usind .then() method  

// fetch(url).then(response => {
    
//     return response.json();
//   })
  
//   .then(data =>{
        
//         data.forEach( value =>{
        
//         const tablebody = document.querySelector('tbody');
//         let tr =  document.createElement('tr');
//         tablebody.appendChild(tr);
// if(value.price_change_24h > 0)
//      {
//         tr.innerHTML=`<td style="height:70px" ><img src=${value.image} style="width:25px">  ${value.name}</td> <td>${value.symbol}</td> <td>$${value.current_price}</td> <td>$${value.total_volume}</td> <td style="color:#00FF00">${value.price_change_24h}%</td> <td>MKT Cap : $${value.market_cap}</td>`;

//      }
//      else{
//         tr.innerHTML=`<td style="height:70px" ><img src=${value.image} style="width:25px">  ${value.name}</td> <td>${value.symbol}</td> <td>$${value.current_price}</td> <td>$${value.total_volume}</td> <td style="color:red">${value.price_change_24h}%</td> <td>MKT Cap : $${value.market_cap}</td>`;

//      }
//         })
//     })
//     .catch(err =>{
//        console.log(err);
//     }) 

//     .finally( ()=>{

//         console.log("Sucess");

//     })
  
// using async await 

var data = null;
async function getData(url,table) {

    const tablebody = table.querySelector('tbody');

    const response = await fetch(url);
    data = await response.json();
    console.log(data);
    
    const newdata =  await data.map(element => {

        element.symbol = element.symbol.toUpperCase();
       
          return element;
              });

 console.log(newdata);

 newdata.forEach(value =>{
     let tr =  document.createElement('tr');
     tr.classList.add("table-dark");
     tablebody.appendChild(tr);
     if(value.price_change_24h> 0)
     {
      value.price_change_24h=value.price_change_24h.toFixed(2); 
        tr.innerHTML=`<td><img src=${value.image} style="width:25px">  ${value.name}</td> <td>${value.symbol}</td> <td>$${value.current_price}</td> <td>$${value.total_volume}</td> <td style="color:#00FF00">${value.price_change_24h}%</td> <td>MKT Cap : $${value.market_cap}</td>`;

     }
     else{
      value.price_change_24h=value.price_change_24h.toFixed(2);
        tr.innerHTML=`<td style="height:70px "><img src=${value.image} style="width:25px">  ${value.name}</td> <td>${value.symbol}</td> <td>$${value.current_price}</td> <td>$${value.total_volume}</td> <td style="color:red">${value.price_change_24h}%</td> <td>MKT Cap : $${value.market_cap}</td>`;

     }
  })
   
    

}

getData(url,document.querySelector("table"))
