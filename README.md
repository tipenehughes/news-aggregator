<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">News Aggregator App :newspaper:</h3>

  <p align="center">
    News Aggregator that displays dynamic local and international news articles, local weather, a selection of current stock prices, and a reddit feed!    
    <br />
    <br />
    :round_pushpin:<a href="https://news-aggregator-react.netlify.app/">View Demo</a>
  <br/>
    Note: To view full app including news articles you will need to run in a local environment due to API provider restrictions
  </p>
</p>

<br/>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#description-ledger">Description</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-wrench">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage-mag">Usage</a></li>    
    <li><a href="#contact-mailbox_with_mail">Contact</a></li>
    <li><a href="#acknowledgements-clap">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Description :ledger:

<br/>

[![Project image][project-image]](src/Assets/Thumbnails/news.png)

<br/>

Every morning, I have too many tabs open scouring through a ton of different websites trying to get the info I need to start the day. I built this app to solve that problem by bringing all of the info I need in to one place. This app displays current news from New Zealand and the US, along with up to date local weather, current prices for stocks I follow, and a feed from r/frugalmalefashion to keep on top of any deals! 

A list of resources used are mentioned in the acknowledgements.

Keep reading to see more about this project!

### Built With 

* [React](https://reactjs.org/)
* [CSS Modules](https://github.com/css-modules/css-modules)
* [React Router](https://reactrouter.com/)
* [React Query](https://react-query.tanstack.com/)


<!-- GETTING STARTED -->
## Getting Started :wrench:

Follow these steps to get a local copy up and running.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
1. Get free API Keys from <a href="https://newsapi.org/">NewsAPI</a>, <a href="https://developers.google.com/maps/documentation/geocoding/get-api-key">Google</a> and <a href="https://openweathermap.org/appid">OpenWeather</a>
2. Clone the repo
   ```sh
   git clone https://github.com/tipenehughes/news-aggregator
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API keys in ```config.js``` in the ```public``` directory
3. Run the app
   ```sh
   npm start
   ```

<!-- USAGE EXAMPLES -->
## Usage :mag:

:round_pushpin:<a href="https://news-aggregator-react.netlify.app/">View Live Demo Here!</a>
<br/>
<br/>
[![News gif][news-gif]](src/img/Thumbnails/news.gif)
<br />
:point_up: This app displays news, along with local weather, stock prices, and a reddit feed. News can be sorted by topic and country (currently NZ and US) 
<br/>
<br />
[![Dark gif][dark-gif]](src/img/Thumbnails/dark.gif)
<br />
:point_up: Dark theme and Reddit feed demonstration 

<!-- CONTACT -->
## Contact :mailbox_with_mail:

[![LinkedIn][linkedin-shield]][linkedin-url]

:e-mail: tipenehughes@gmail.com

Project Link: [https://news-aggregator-react.netlify.app/](https://news-aggregator-react.netlify.app/)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements :clap:
* [News API](https://newsapi.org/)
* [OpenWeather API](https://openweathermap.org/)
* [Reddit](https://www.reddit.com/)
* [Font Awesome](https://fontawesome.com/)



<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=2867B2
[linkedin-url]: https://www.linkedin.com/in/tipene-hughes/
[project-image]: src/img/Thumbnails/news.png
[news-gif]: src/img/Thumbnails/news.gif
[dark-gif]: src/img/Thumbnails/dark.gif
