console.log("Hello World")

var nama="Christian"
nama="chris"
console.log(nama)

let name="Gregorius"
name="Greg"
console.log(name)

const date="17 Desember 2004"
// date="14 November 2003"
console.log(date)

console.log(typeof(nama))

let weight=16
console.log(typeof(weight))

let weight2= 137526356516n
console.log(typeof(weight2))

let x= true
console.log(typeof(x))

let y
console.log(typeof(y))

let myObjek = {
    type:"BMW"
}

console.log(typeof(myObjek.type))

let number = [1, 2]
console.log(typeof(number[1]))

let tanggal = new Date("2-24-07-18")

let a = 3
let b = 6
let c = 3+6
console.log(c)

let d = "Hello"
let e = " World"
let f = d+e
console.log(f)
console.log(f.toUpperCase())
console.log(f.length)

console.log(a++)

let z = a-=b
console.log(z)

console.log(a==b)

let umur = 18
if (umur >= 18) {
    console.log("Boleh bikin sim")
}
else {
    console.log("Belum cukup umur")
}

umur >= 18 ? console.log("Boleh bikin sim") : console.log("Belum cukup umur")

let test = ["1", "2", "3"]
console.log(test.join())

function sum(t, u){
    return t+u
}

console.log(sum(2, 7))