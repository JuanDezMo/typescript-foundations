console.log(`Entendiendo de funciones`);

console.log('Function Declaration Example');

function calculateTotal(price: number, tax: number) : number {
    return price * tax;
}

console.log(`Calculate Total : ${calculateTotal(10000, 0.15)}`)

console.log('Function Expression Example');
const calculateDiscount = function(price: number, discountPercent: number) : number {
    return price - (price * discountPercent);
}
console.log(`Calculate Discount: ${calculateDiscount(2200, 0.20)}`);

console.log('Arrow Functions Example');

const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const firstEmail: string = 'juand@email.com'
const secondEmail: string = 'juandemail.com'
console.log(`1. ValidateEmail for ${firstEmail}  - ${validateEmail(firstEmail)}`);
console.log(`2. ValidateEmail for ${secondEmail}  - ${validateEmail(secondEmail)}`);

console.log('\nDefault Parameters Example');

function createUser(name: string, role: string = 'user', isActive: boolean = true) {
    return {
        name,
        role, 
        isActive,
        createdAt: new Date()
    }
}

console.log(`1. Create User: `, createUser('Manuel'));
console.log(`2. Create User: `, createUser('Manuel', 'admin', false));