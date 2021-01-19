// Takes object (read: json) with API query parameters and returns query string
export function objToQueryString(obj) {
  const keyValuePairs = [];
  for (let i = 0; i < Object.keys(obj).length; i += 1) {
    keyValuePairs.push(
      `${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(Object.values(obj)[i])}`
    );
  }
  return '?' + keyValuePairs.join('&');
}

// Found this on Stack Overflow
export function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};

// Function to convert reward price to text... very hacky lol!
export function rewardPriceToText(price) {
  return (price == 0) ? 'ZERO'
  : (price == 1) ? 'ONE'
  : (price == 2) ? 'TWO'
  : (price == 3) ? 'THREE'
  : (price == 4) ? 'FOUR'
  : (price == 5) ? 'FIVE'
  : (price == 6) ? 'SIX'
  : (price == 7) ? 'SEVEN'
  : (price == 8) ? 'EIGHT'
  : (price == 9) ? 'NINE'
  : (price == 10) ? 'TEN'
  : String(price)
}

export function spendingCountToText(price) {
  return (price == 1) ? 'One'
  : (price == 2) ? 'Two'
  : (price == 3) ? 'Three'
  : (price == 4) ? 'Four'
  : (price == 5) ? 'Five'
  : (price == 6) ? 'Six'
  : (price == 7) ? 'Seven'
  : (price == 8) ? 'Eight'
  : (price == 9) ? 'Nine'
  : (price == 10) ? 'Ten'
  : String(price)
}

export function filterTransactionData(transactions, filter) {

  const result = []

  switch (filter) {
    case 'ALL':
      return transactions

    case 'FREQUENT':
      transactions.forEach(function(item) {
        if(result.find(resultItem => resultItem.merchant == item.merchant) === undefined) {
          result.push({
            merchant: item.merchant,
            icon: item.icon,
            count: 0,
            amount: 0,
          })
        }
        const resultItemObject = result.find(resultItem => resultItem.merchant == item.merchant)
        resultItemObject.amount += item.amount
        resultItemObject.count += 1
      })
      result.sort((a, b) => b.count - a.count)
      return result

    case 'LARGE':
      return transactions.sort((a, b) => b.amount - a.amount)

    case 'CATEGORIES':
      transactions.forEach(function(item) {
        if(result.find(resultItem => resultItem.category == item.category) === undefined) {
          result.push({
            category: item.category,
            icon: getIconFromCategory(item.category),
            count: 0,
            amount: 0,
          })
        }
        const resultItemObject = result.find(resultItem => resultItem.category == item.category)
        resultItemObject.amount += item.amount
        resultItemObject.count += 1
      })
      result.sort((a, b) => b.amount - a.amount)
      return result

    default:
      return transactions
  }
}

export function getIconFromCategory (category) {
  const categoryMap = {
    'Travel':'travel',
    'Food & Drink':'foodanddrink',
    'Shopping':'shopping',
    'Entertainment':'entertainment',
    'Bills & Utilities':'billsandutilities',
    'Professional Services':'professionalservices',
    'Groceries':'groceries',
    'Gas':'gas',
    'Health & Wellness':'healthandwellness',
    'Home':'home',
    'Personal':'personal',
  }
  return categoryMap[category]
}

import { Dimensions, Platform } from 'react-native';

// IPHONE X CHECKER FUNCTION FROM SO
export function isIphoneX() {
  const dim = Dimensions.get('window')

  function isIPhoneXSize(dim) {
    return dim.height == 812 || dim.width == 812;
  }
  
  function isIPhoneXrSize(dim) {
    return dim.height == 896 || dim.width == 896;
  }
  
  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  )
}

