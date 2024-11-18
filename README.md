# Japan Culinary

## Project description
*Japan Culinary* is a website dedicated to Japanese cuisine where users can find recipes for traditional dishes, with detailed sections for each recipe.

## Main functions

### 1. Section with recipes and filtering
  - On a separate page there are recipes of Japanese cuisine with filtering by category (for example, Sweet, Drink, Hot Dish).
  - The filter selection is saved in `localStorage` so that the user filter settings remain unchanged when the page is reloaded.

### 2. Authentication (Login/logout/registration system)
  - **Registration**: Checking all information , saving data in `localStorage'.
  - **Login**: User data is saved in `localStorage` and displayed on reboot.
  - **Exit**: Data is deleted from `localStorage'.

### 3. Light/Dark Mode
  - The switch allows users to choose between a light and dark theme.
  - The selected theme is saved in `localStorage`, user selections are saved even when switching to other pages and updating the browser.

### 4. A multi-step feedback form
   - form for sending feedback, which is divided into several steps.
   - Enables input verification at each step.

### 5. Other elements
   - **Star rating system**: Users can rate recipes by choosing the number of stars.
   - **Accordion FAQ**: Frequently asked questions are slim in accordion format.
   - **Display Current Date and Time**: The current date and time are displayed every minute.
   - **Song Playback**: A button that plays an audio file when clicked.
   - **Form Validation**:To send recipes to users. Checks the recipe submission form so that the user provides information (name, category, description of the recipe).
   - **Reset Form Fields**:Resets the values of all input fields in the form when the reset button is pressed.
   - **Read More Toggle**: Toggles the visibility of additional content when the "Read More" link is clicked.
