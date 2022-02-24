

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Requirements
For this assignment you should create three JavaScript files:

### src/helpers.js
This file should export two array helper functions:

#### choice(items): 
returns a randomly selected item from array of items

#### remove(items, item):
removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
src/foods.js


This file should export this array of fruits:

    [
    "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎",
    "🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑",
    ];
### src/index.js
This file should import the fruits and both array helpers. It should then:


Randomly draw a fruit from the array
Log the message “I’d like one RANDOMFRUIT, please.”
Log the message “Here you go: RANDOMFRUIT”
Log the message “Delicious! May I have another?”
Remove the fruit from the array of fruits
Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
Testing This
Run this with npm start and you should see something like this in your browser console:

    I'd like one 🍉, please

    Here you go: 🍉

    Delicious! May I have another?

I'm sorry, we're all out. We have 14 left.