/* eslint-disable */
import "bootstrap";
import "./style.css";
import { excuses } from "../generator.js";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var excuse = excuses();
  var h1 = document.querySelector("#excuse");
  h1.textContent = excuse;
  console.log("Hello Rigo from the console!");
};
