const moment = require("moment");

const name = "Hello";
const date = moment().format("DD/MM/YYYY hh:mm a");
const future = moment().add(3, "days");

console.log(future.format("DD/MM/YYYY"));

// 25/01/2022 12:45 PM
