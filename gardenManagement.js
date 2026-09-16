const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;
function calculateTax(amount) {
    const taxRate = 0.08;
    return amount * taxRate;
}function convertToUpperCase(text) {
    return text.convertToUpperCase();  
}

function isPalindrome(word) {
    const cleanWord = word.toLowerCase();
    
    const reverseWord = cleanWord.split('').reverse().join('');
    retucn cleanWord === reverseWord;
}

function calculateDiscountedPrice(originalPrice, discountpercentage) {
    const disAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}
