function calculateMoney(ticketSale){
  const ticketPrice = 120
  const guardPrice = 500
  const staffPrice = 400
  if(ticketSale <0){
    return 'Invalid Number'
  }else{
    const outPrice =guardPrice + staffPrice;
  const tickets = ticketPrice*ticketSale
  remaining = tickets - outPrice
  return remaining;
  }
}




function checkName(name){
  if (typeof name !== 'string'){
    return'invalid'
  }else{
    const end = name[name.length -1]
  const letters = ['a','y', 'i', 'e', 'o', 'u', 'w']
    if(letters.includes(end)){
      return 'Good name'
    }else{
      return 'Bad name'
    }
  }
}



function deleteInvalids(numbers){
  let valids = []
  for(const number of numbers){
    if(typeof number === 'number' && !isNaN(number)){
      valids.push(number)
    }
  }
  return valids;
}





function password(obj){
  const {name,birth,site} = obj;
  const password = site + '#' +name+'@'+birth
  return password;
}





function monthlySavings(arr,livingCost){
  if(!Array.isArray(arr) || typeof livingCost !== 'number'){
         return 'invalid input'
       }
       let allIncome = 0;
       for(let i=0; i<arr.length; i++){
        if(allIncome = allIncome + arr[i]>3000){
          return arr[i]-(arr[i]*0.2)
        }else{
          return arr[i]
        }
       }
       let remainingIncome = allIncome - livingCost;
       if(remainingIncome <= 0){
            return 'earn money'
           }else{
             return remainingIncome;
           }

}
