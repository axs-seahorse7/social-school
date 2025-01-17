function generateUniqueID() {
    // Generate a random 4-character string (uppercase letters)
    const randomString = Array(4)
      .fill()
      .map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
      .join("");
      const lstString = randomString.slice(0,2)
  
    // Generate a random 4-digit number
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
  
    // Get the last two digits of the current year
    const year = new Date().getFullYear().toString().slice(-2);
    
    return `${randomString}-${randomNumber}-${year+lstString}`;
  }
  
  export default generateUniqueID;