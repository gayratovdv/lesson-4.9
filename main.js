const array = ["non", "olma", "aziza", "Gul", "mashina"]
const palinDrom = []
const palinDromMas = []

for(const element of array) {
    if (element.split("").reverse().join("") === element) {
        palinDrom.push(element);
    }else {
        palinDromMas.push(element);
    }
}

console.log(palinDrom, ": palinDrom so'zli massiv");
console.log(palinDromMas, ": palinDrom bo'lmagan so'zli massiv");