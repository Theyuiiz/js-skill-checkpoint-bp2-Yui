// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

inventory.apple.quantity = 200
inventory.orange = { price: 20, quantity: 300}
console.log(inventory)

let totalOfInventory = 0;

for (let sum in inventory) {
    totalOfInventory += inventory[sum].price * inventory[sum].quantity
}
console.log(`Total inventory value: ${totalOfInventory} baht`)
