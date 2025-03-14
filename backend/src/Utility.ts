export const generateRandomId = () => {
    return Math.random().toString(16).substring(2, 15);
    // This will generate a random number between 0 to 1 and then convert that number to hexadecimal form and then remove the first two characters and return the next 13 characters
}