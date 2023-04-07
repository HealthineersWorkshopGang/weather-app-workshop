# HealthineersGang's Weather App

###### _**Speakers**: Tomas Lukac, Martin Kovacik, Christian Scipa_

#### This is the 5 part series workshop where we create simple weather app and introduce students to React and Redux.

- [Workshop 1](#workshop-1-21022023)
- [Workshop 2](#workshop-2-07032023)
- [Workshop 3](#workshop-3-21032023)
- [Workshop 4](#workshop-4-03042023)
- [Workshop 5](#workshop-5-17042023)

---

### Workshop 1: 21/02/2023

In the beginning we prepare our workspaces for development by installing:

1.  **NodeJS**: You can dowload it from [Node JS download page](https://nodejs.org/en/download/)

    - Check if the NodeJS is correctly installed by running next command in terminal:

      ```sh
      node -v
      ```

    - This would also install npm, you can check your version with:

      ```sh
      npm -v
      ```

2.  **Yarn**: After downloading Node, we install with command:
    ```sh
    npm i -D yarn
    yarn -v
    ```

First workshop introduces React components. We learn how to divide app into components, prepare basic component structure of the app.

> :warning: **This repo was created after first workshop**: I made some folder structure changes, added some stylings (which are not the things we would like to focus in this series). Everything can be trackable via commit logs.

### Workshop 2: 07/03/2023

###### _Pre workshop preparation:_

We are using [OpenWeatherMap API](https://openweathermap.org/api) and for following the second workshop properly, you need to [register](https://home.openweathermap.org/users/sign_in) and optain the API KEY. Registration is free of charge and we can use up to 1000 requests per day.

### Workshop 3: 21/03/2023

We are continuing on our app, we can search for location and display some weather date

### Workshop 4: 03/04/2023

We introduced Redux for state managements. You can follow their tutorial on [Redux toolkit](https://redux-toolkit.js.org/introduction/getting-started)

For good working with Redux, it recommended to add [Redux Dev Tools](https://www.google.com/search?q=redux+dev+tool) to your web browser.

### Workshop 5: 17/04/2023

The last workshop! We will devide this into 2 parts. The first part will be about the topic of your selection ie useContext or app optimization. The second part will be your own work based on task like:

- As a user, I want location list and search bar to clear after selecting the city
- As a user, I want to save api calls by adding geoData to cache (localStorage) for already searched locations.
- As a user, I want to see top three searched locations display. (Bonus: store in cache). 
- As a user, I want the weather data to be displayed after clicking on one of the top three locations.
- and maybe more ...
