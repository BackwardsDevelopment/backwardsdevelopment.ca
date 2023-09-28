import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header, Lorem, MainPage } from './Components';
import reportWebVitals from './reportWebVitals';
import { NavigationBar } from './Components/Nav';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header tagline="Scripts, Designs, Mods, and Discord Bots" />
    <NavigationBar />
    <MainPage />
    <Lorem />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function scroll_event() {
  var nav = document.getElementById("nav");
  var scroll_ind = document.getElementById("scroll_indicator");
  var header = document.getElementById("header");
  var title = document.getElementById("title");

  console.log(header?.getBoundingClientRect().top)
  if (header?.getBoundingClientRect().top === 0) {
    scroll_ind?.classList.remove("hide");
    scroll_ind?.classList.add("show");
  } else {
    scroll_ind?.classList.remove("show");
    scroll_ind?.classList.add("hide");

  }

  if (nav?.getBoundingClientRect().top === 0) {
    title?.classList.remove("hidden")
  } else {
    title?.classList.add("hidden")
  }
}

document.addEventListener("scroll", scroll_event)