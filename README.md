# Photo App | Vue

Photo App is made on Vue.js with using **Unsplash API**. It consist of 4 pages - Home, Collections, Topics and Stats. Each page has a search field in the header, which shows a picture based on the search query. 

**Home page** displays 18 random photos; when you click one it opens a modal with shows the author's name, amount of likes and downloads, and also camera details. 

**Collections** page displays 12 cards, which represent collections in different topics and show information about the author and amount of photos; cards are NOT clickable. 

**Topics** page is almost identical to the Collections with one difference - it provides a possibility to order cards based on the features, position and time they were made.

**Stats** page simply displays a chart, which shows the amount of new developers and new photographers per month.

The project is made on CSS framework **Bulma** with using **Chart.js**.

Read my [article on Medium](https://bit.ly/3Ezy3Yi) about the project.

Live demo on my [Github Pages](https://ni4yja.github.io/photo-app/)
======================================================================

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
