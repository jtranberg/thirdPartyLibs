"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// axios
// .get("https://jsonplaceholder.typicode.com/users/1")
// .then((res ) => {
//     console.log("woohoo!!");
//     })
//     .catch((e) => {
//         console.log("error", e);
//     });
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .then(json => console.log("wooho"));
