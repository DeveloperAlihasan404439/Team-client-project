![Logo](https://raw.githubusercontent.com/DeveloperAlihasan404439/Team-client-project/development/src/assets/BannerL%26Logo/Logo%20icon.png)

# Swifty Mail

Redefining Email Management

## Introduction

Swifty Mail revolutionizes email management through its innovative approach to privacy and inbox organization. By offering disposable email addresses and a range of advanced features, Swifty Mail empowers users to navigate the digital landscape with confidence and ease.

## Solution to Real-Time Problems

In today's digital age, online privacy is paramount. Swifty Mail addresses common inbox challenges by providing temporary disposable email addresses, shielding users from spam and unwanted solicitation. This ensures a clutter-free and secure inbox experience.

## Technologies Utilized

| Frontend                                                                                                            | Backend                                                                                                                                                                          | Other Tools                                   |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| React.js, Daisy UI, Tailwind CSS, Leaflet.js, React Hook Form, Framer Motion, Swiper.js, and other React libraries. | Node.js, Express.js, MongoDB (Mongoose ORM), Firebase Authentication + Storage, AWS (faced issues with live link creation, hence commented), Stripe.js (for payment processing). | Tanstack (Formik), Axios (for HTTP requests). |

## Website Overview

Swifty Mail boasts a user-friendly interface with essential pages such as About Us, Help, Payment, and Forum. The platform's design incorporates captivating animations and interactive elements, enhancing user engagement and usability.

## Key Features

| Son | Title                             | Description                                                                                                                                                                                                       |
| --- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Temporary Disposable Email        | Instantly generate disposable email addresses for enhanced privacy and security.                                                                                                                                  |
| 2   | Community and Forum Section       | Access instant assistance and guidance on various website functionalities.                                                                                                                                        |
| 3   | Password Strength Checker         | Engage with a thriving community, post articles, comments, and interact with peers.                                                                                                                               |
| 4   | IP Address Tracker                | Evaluate and strengthen password security for premium users.                                                                                                                                                      |
| 5   | Notes Management System           | Obtain real-time information about online presence with a simple click.                                                                                                                                           |
| 6   | Cloud Storage Service             | Organize tasks and projects effortlessly with a Trello-like notes management system.                                                                                                                              |
| 7   | Role-Based System and Admin Panel | Swifty Mail implements a sophisticated role-based system, granting administrators comprehensive control over user management, article moderation, review management, and access to insightful website statistics. |

## Conclusion

Swifty Mail sets a new standard for inbox organization and online communication by prioritizing privacy, security, and user experience. With its innovative features and intuitive design, Swifty Mail paves the way for seamless email management. Experience the future of email management with Swifty Mail today!

## Demo 🔗 Link

| Link to demo                             | Link to Github Cliend Site                                                    | Link to Github Server Site                                                     |
| ---------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [demo](https://swift-mail-5a7d7.web.app) | [Cliend Site](https://github.com/DeveloperAlihasan404439/Team-client-project) | [Server Site](https://github.com/DeveloperAlihasan404439/Team-server-project-) |

This is a React project with [Create React App](https://create-react-app.dev/).

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/DeveloperAlihasan404439/Team-client-project
   cd Team-client-project
   ```
2. **Package install:**
   ```
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. **Environment Variables:**
   To run this project, you will need to add the following environment variables to your .env file <br>

   ```bash
   VITE_APIKEY
   VITE_AUTHDOMAIN
   VITE_PROJECTID
   VITE_STORAGEBUCKET
   VITE_MESSAGINGSENDERID
   VITE_APPID
   # or stripe
   VITE_Payment_Gateway_PK
   # or imgbb
   VITE_IMAGES_HOSTING_KEY

   ```

4. **Project run code:**
   ```
   npm start
   # or
   yarn start
   # or
   pnpm start
   ```
