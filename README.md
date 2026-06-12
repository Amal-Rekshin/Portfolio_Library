# Personal Portfolio Website

## Overview
This project is a personal portfolio website showcasing my skills, experience, and contact information. It includes multiple sections such as Home, About Me, Certificates, and Contact. The website is built with **HTML**, **CSS**, **Bootstrap**, and **JavaScript** and is designed to be fully responsive and user-friendly.

## Features
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices.
- **Smooth Navigation**: Interactive navigation menu with seamless transitions between sections.
- **Home Section**: Introduces myself and highlights my role as a Frontend Developer.
- **About Section**: Provides a detailed overview of my expertise in frontend development and UI/UX design.
- **Certificates Section**: Displays a gallery of my certifications.
- **Contact Section**: Includes contact details with links to LinkedIn, GitHub, and email.
- **Animations**: Enhanced with Animate.css for a polished user experience.

## Demo
[Live Demo](https://rekshin-portfolio.netlify.app/)

## File Structure
```
portfolio-website/
├── index.html        # Main HTML file
├── style.css         # Main stylesheet
├── styless.css       # Additional styles
├── script.js         # JavaScript for section navigation
├── img/              # Images and assets
├── README.md         # Documentation
```

## Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Edge, Firefox).

## Sections

### 1. **Home**
- Displays an introduction with a brief description of my skills and a call-to-action button linking to the About section.

### 2. **About Me**
- Highlights my experience as a Frontend Developer and UI/UX Designer.
- Emphasizes my focus on responsive design, accessibility, and staying updated with industry trends.

### 3. **Certificates**
- A gallery showcasing my certifications with images of each certificate.

### 4. **Contact Me**
- Includes clickable links for phone, email, LinkedIn, and GitHub profiles.
- Utilizes Font Awesome icons for enhanced visuals.

## Technologies Used
- **HTML5**: For structuring the web pages.
- **CSS3**: For styling and layout.
- **Bootstrap 5**: For responsiveness and UI components.
- **JavaScript**: For navigation and interactivity.
- **Animate.css**: For animations.
- **Font Awesome**: For icons.

## Code Functionality

### Navigation Logic
The `script.js` file handles navigation by showing or hiding sections based on user interactions:
```javascript
home.onclick = function() {
    b1.style.display = 'block';
    b2.style.display = 'none';
    b3.style.display = 'none';
    b4.style.display = 'none';
};
```
- Clicking a menu item dynamically updates the displayed section.

### Animations
- Integrated animations using Animate.css for smooth transitions between content.

## License
This project is licensed under the MIT License.

## Acknowledgments
- Special thanks to [Bootstrap](https://getbootstrap.com/) and [Animate.css](https://animate.style/) for providing the tools to create a modern design.

