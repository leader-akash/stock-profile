const initialPrice = document.querySelector("#initial-price");
const stock = document.querySelector("#no-of-stocks");
const currentPrice = document.querySelector("#current-price");
const button = document.querySelector("#button");
const result = document.querySelector("#output");


button.addEventListener('click', submitHandler);

function submitHandler(){
    let ip = Number(initialPrice.value);
    let qty = Number(stock.value);
    let curr = Number(currentPrice.value);

    calculateProfitLoss(ip, qty, curr);
}


function calculateProfitLoss(cost, quantity, sale){
    
    if(sale > cost){
        var profit = (sale-cost)*quantity;
      var profitPercentage = (profit/cost)*100;

      showOutput(`Yay! the profit is ${profit} 🎉 and the percentage is ${profitPercentage}%`);

      result.style.color = 'white';
      result.style.background = 'green';

      document.body.style.backgroundColor = 'gold';
      footer.style.backgroundColor = 'black';
      footer.style.color = 'white';

    }else if(cost > sale){
      var  loss = (cost - sale)*quantity;
      var  lossPercentage = (loss/cost)*100;
      showOutput(`ohh! the loss is ${loss} 😢and the percentage is ${lossPercentage}%`);
      result.style.color = 'white';
      result.style.background = 'red';
      document.body.style.backgroundColor = 'blue';
      footer.style.backgroundColor = 'orange';
      footer.style.color = 'white';
    }
    else{
        showOutput(`No pain no gain and no gain no pain !!`);
        result.style.color = 'blue';
      result.style.background = 'yellow';
      document.body.style.backgroundColor = 'rgb(236, 20, 20)';
      footer.style.backgroundColor = 'purple';
      footer.style.color = 'white';
    }   
}

function showOutput(message){
// function showOutput(message, status){
    
    // switch(status){
    //     case "Profit":
    //         result.innerHTML =message;
    //         break;
    //     case "Loss":
    //         result.innerHTML = message;
    //         break;
    //     case ""
    //         default:
    //         break;
    // }

    // *** or ****
    result.innerHTML = message;
}




