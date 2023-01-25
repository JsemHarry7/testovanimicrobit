// console.log(control.deviceSerialNumber())
// console.log(Utility.encodeSerial())
// // console.log(Utility.decodeSerial)

// radio.onReceivedValue(function(name: string, value: number) {
//     if (Utility.decodeSerial(name) === control.deviceSerialNumber())
//     {
//         //new code is in value
//     }

//     if (name === "grp")
//     {
//         //new GroupId recieved...
//     }
// })

let nahoda = 0.5363245295; // <0; 1)

let nahodaCeil = Math.ceil(1000 * nahoda); // <0; 1000> ! (0; 1000>
let nahodaRound = Math.round(1000 * nahoda); //<0; 1000>
let nahodaFloor = Math.floor(1000 * nahoda); //<0; 1000) | <0; 999>