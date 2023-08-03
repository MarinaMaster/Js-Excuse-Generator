/* eslint-disable */
import "bootstrap";
import "./style.css";
import { generateExcuse } from "../generator.js";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let excuse = generateExcuse();
  let h1 = document.querySelector("#excuse");
  h1.textContent = excuse;
  console.log("Hello Rigo from the console!");
};
