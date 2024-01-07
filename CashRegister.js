const currencyValues = {
    "PENNY" :1,
    "NICKEL" : 5,
    "DIME" : 10,
    "QUARTER" : 25,
    "ONE" :100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY" : 2000,
    "ONE HUNDRED": 10000
 }
 
 
 
 function checkCashRegister(price, cash, cid) {
 
 let changeOfSum = cash * 100 - price * 100;
 let changeOfSumCheck = changeOfSum;
 let change = [];
 let status = '';
 
 
 let cidOfSum = 0;
 let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();
 
 filteredCid.forEach( elem => {
 
 let current = elem[0];
 let currentSum = elem[1]*100;
 cidOfSum += currentSum;
 let amount = 0;
 
 while ( changeOfSum>= currencyValues[current]&& currentSum > 0)
 {
    amount += currencyValues[current];
    changeOfSum -= currencyValues[current];
    currentSum -=currencyValues[current];
 }
 
 if(amount !==0)
 {
   change.push([current,amount/100]);
 }
 
 });
 
  if( changeOfSum > 0)
  {
    status='INSUFFICIENT_FUNDS';
    change=[];
  }
  else if( changeOfSum ==0 && changeOfSumCheck == cidOfSum)
  {
    status = 'CLOSED';
    change=cid;
  }
  else{
    status='OPEN';
  }
 
  return {'status': status, 'change': change};
 }
 
 checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);