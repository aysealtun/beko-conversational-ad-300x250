# Beko Conversational Ad (300x250)

**Live Demo:** [https://aysealtun.github.io/beko-conversational-ad-300x250/](https://aysealtun.github.io/beko-conversational-ad-300x250/)

## Preview
![Banner Preview](images/preview.gif)

## Installation and Usage

### 1. Local Development
To run this project on your local machine:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/aysealtun/beko-conversational-ad-300x250
    cd beko-conversational-ad-300x250
    ```
2.  **Open index.html**:
    *   Simple way: Double-click `index.html`.
    *   **Recommended**: Use a local server (e.g., VS Code **Live Server** or `npx serve .`) to avoid CORS issues.

## Project Description
This is an interactive conversational ad banner for Beko, designed to guide users through a series of questions to recommend the ideal laundry machine.

## Project Structure

- `index.html`: Main HTML structure.
- `css/style.css`: Styling and layout, including UI flash prevention.
- `js/main.js`: Core logic, animations, and tracking.
- `images/`: Asset folder for backgrounds and product images.
- `fonts/`: Custom brand fonts.

## Tech Stack

- **GSAP (GreenSock Animation Platform)**: Used for DOM element manipulation and initial state setup.
- **Anime.js**: Used for complex timeline animations and transitions between frames.
- **SplitText**: Used for text animations (via GSAP).

## Key Features

### 1. Interactive Questionnaire
The ad progresses through several frames (F1-F8) based on user interactions:
- **F1**: Welcome / CTA.
- **F2-F4**: Choice questions (Preferences, Strengths, Colors).
- **F5-F8**: Results based on user selection.

### 2. UI Flash Prevention
The ad uses a combination of CSS (`visibility: hidden` on `#content`) and JavaScript (`setupDOMElements`) to ensure that no elements flash on the screen before the initial animation is ready to start.

### 3. Functional Click Tracking
Click tracking is managed via a centralized configuration in `main.js`. This allows for easy updates to tracking IDs and category (`cat`) values without code duplication.

```javascript
const trackingConfig = [
    { ids: ['bg', 'logo', ...], cat: 'wmcon002' },
    // more entries...
];
```

## How to Edit

### Changing Tracking
To update tracking IDs or categories, modify the `trackingConfig` array at the top of `js/main.js`.

### Changing ClickTags
ClickTags are defined in the head of `index.html`. Update these variables to point to the correct product pages.
