"use strict"


let item = document.getElementById("item").value;
let price;
switch(item)
{
  case "Hat"
  case "Gloves"
    price = 15.95;
    break;
  case "Coat"
    price = 49.99;
    break;
  default:
    price = 0;
}