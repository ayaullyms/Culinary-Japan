# Japan Culinary

## Project description
*Japan Culinary* is a website dedicated to Japanese cuisine where users can find recipes for traditional dishes, with detailed sections for each recipe.

## Main functions

### 1. Section with recipes and filtering
  - On a separate page there are recipes of Japanese cuisine with filtering by category (for example, Sweet, Drink, Hot Dish).
  - The filter selection is saved in `localStorage` so that the user filter settings remain unchanged when the page is reloaded.

### 2. User authentication
  - An entry/exit system that stores user information in `localStorage'.
  - After logging in, the user's data is saved in `localStorage`, which allows you to save authorizations when the page is reloaded.
  - When logging out, the user's data is cleared from the `localStorage`.

###3. Light/Dark Mode
  - The switch allows users to choose between a light and dark theme.
  - The selected theme is saved in `localStorage`, user selections are saved even when switching to other pages and updating the browser.

### 4. A multi-step feedback form
   - form for sending feedback, which is divided into several steps.
   - Enables input verification at each step.

### 5. Other elements
   - **Random background color change**: Random background color generator for variety.
   - **Star rating system**: Users can rate recipes by choosing the number of stars.
   - **Pop-up subscription form**: for subscribing to the site's blog. 
   - **Accordion FAQ**: Frequently asked questions are slim in accordion format.
