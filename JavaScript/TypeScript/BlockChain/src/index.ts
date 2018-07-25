const SayHi = (name:string, age:number, gender:string): string => {
    return `hello ${name}, you are ${age}!, you are a ${gender}`
}

console.log(SayHi("jason", 20, "male"));

export{};