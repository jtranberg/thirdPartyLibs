import axios from "axios";
import _ from "lodash";
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
    .then(json => console.log("wooho"))



