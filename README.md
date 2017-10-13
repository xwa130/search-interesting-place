# Features
- When user searches
  - place addresses are highlighted in map
  - place information are displayed in list
- When user clicks the marker, the name of the place is displayed in an info box
- When user clicks the list panel, the address is centered in map and the info box is poped up
- When user clicks the star in the list panel, this place is saved as a favorite place. User could check it in `FAVORITES` page.
- When user clicks the star again, the favorite status is cancelled. 
- When user clicks the menu in the top left, user could see the source code.

# Technical highlight
In this app, I used `vue` as my front end framework, `vuex` as a store, `vue-router` as a front end router, `vuetify` as my style framework, `vue2-google-maps` as my tool to leverage google-maps in vue and `webpack/webpack-dev-server` as my compiler. 

# Usage
Run the following commands: 
```
git clone git@github.com:xwa130/search-interesting-place.git && cd search-interesting-place && npm i
```
Then create `.env.js` file to save your own `GOOGLE-API` key similar to what it does in `.env.example.js`. In the end, run `npm start`.
Viola~