let price = 19.5; 
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];
const moneyArray = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
let cashBackArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let totalMoneyAmount = cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1];

let showValues = false;
const total = document.getElementById("total");
total.textContent = `Total: $${price}`;
let changeDue = document.getElementById("change-due");

//REGISTER CONSTANTS
const pennies = document.getElementById("pennies");
const nickles = document.getElementById("nickles");
const dimes = document.getElementById("dimes");
const quarters = document.getElementById("quarters");
const oneDollars = document.getElementById("one-dollars");
const fiveDollars = document.getElementById("five-dollars");
const tenDollars = document.getElementById("ten-dollars");
const twentyDollars = document.getElementById("twenty-dollars");
const hundredDollars = document.getElementById("hundred-dollars");

//REGISTER VALUES
const updatedValues = () => {
pennies.textContent = `Pennies: $${cid[0][1]}`;
nickles.textContent = `Nickels: $${cid[1][1]}`;
dimes.textContent = `Dimes: $${cid[2][1]}`;
quarters.textContent = `Quarters: $${cid[3][1]}`;
oneDollars.textContent = `Ones: $${cid[4][1]}`;
fiveDollars.textContent = `Fives: $${cid[5][1]}`;
tenDollars.textContent = `Tens: $${cid[6][1]}`;
twentyDollars.textContent = `Twenties: $${cid[7][1]}`;
hundredDollars.textContent = `Hundreds: $${cid[8][1]}`;
}
updatedValues();
 
//OUTPUT VALUES
let status = document.getElementById("status");
const pennie = document.getElementById("penny");
const nickle = document.getElementById("nickle");
const dime = document.getElementById("dime");
const quarter = document.getElementById("quarter");
const oneDollar = document.getElementById("dollar");
const fiveDollar = document.getElementById("five-dollar");
const tenDollar = document.getElementById("ten-dollar");
const twentyDollar = document.getElementById("twenty-dollar");
const hundredDollar = document.getElementById("hundred-dollar");

const outputValues = () => {
  changeDue.textContent = `Status: ${currentStatus}`;

  pennie.textContent = cashBackArray[0] > 0 ? `PENNY: $${cashBackArray[0]}` : "";
  nickle.textContent = cashBackArray[1] > 0 ? `NICKEL: $${cashBackArray[1]}` : "";
  dime.textContent = cashBackArray[2] > 0 ? `DIME: $${cashBackArray[2]}` : "";
  quarter.textContent = cashBackArray[3] > 0 ? `QUARTER: $${cashBackArray[3]}` : "";
  oneDollar.textContent = cashBackArray[4] > 0 ? `ONE: $${cashBackArray[4]}` : "";
  fiveDollar.textContent = cashBackArray[5] > 0 ? `FIVE: $${cashBackArray[5]}` : "";
  tenDollar.textContent = cashBackArray[6] > 0 ? `TEN: $${cashBackArray[6]}` : "";
  twentyDollar.textContent = cashBackArray[7] > 0 ? `TWENTY: $${cashBackArray[7]}` : "";
  hundredDollar.textContent = cashBackArray[8] > 0 ? `ONE HUNDRED: $${cashBackArray[8]}` : "";

  cashBackArray.fill(0);
}


 
const input = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
let currentStatus = "";   

const moneyLogic = (num) => {
  cashBackArray.fill(0);
  if ((totalMoneyAmount - num) > 0){
  for (let i = 8; i > -1; i--){
    if (num >= moneyArray[i] && cid[i][1] > 0){
      const maximumDenominations = Math.min(Math.floor(num / moneyArray[i]), cid[i][1] / moneyArray[i]);
      //console.log(maximumDenominations);
      cashBackArray[i] = maximumDenominations * moneyArray[i].toFixed(2);
      //console.log(cashBackArray[i]);
      num = (num - cashBackArray[i]).toFixed(2); 
     
     // console.log(num); 
      cid[i][1] -= maximumDenominations * moneyArray[i];
      cid[i][1] = cid[i][1].toFixed(2);
      currentStatus = "OPEN";
      if (num === 0){
        break;
      }
    } else if (num >= moneyArray[i] && cid[i][1] <= 0){
      continue;
    }
  } 
  outputValues();
  updatedValues();
  } else if ((totalMoneyAmount - num) === 0) {
    changeDue.textContent = `Status: CLOSED`;
  } 
}; 

 
purchaseBtn.addEventListener("click",() => {
  const cashBack = parseFloat(input.value) - price;
  if ((totalMoneyAmount - cashBack) < 0) {
    alert("There is not enough money in the register!");
  } else if (cashBack < 0){
      changeDue.textContent = `Status: INSUFFICIENT FUNDS`;
    } else if (cashBack === 0 ) {
      changeDue.textContent = `Status: "CLOSED"`;
    } else {
      //console.log(totalMoneyAmount);
      moneyLogic(cashBack);
      totalMoneyAmount -= cashBack;
      console.log(totalMoneyAmount);
    }
  
} 
);


