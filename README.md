# G-News Webpage

Welcome to the News Search Webpage! This project is built with **ReactJS (Typescript)**, and it allows users to search for news articles, filter by categories, dates, and more. It integrates with the **GNews API** to fetch news data, and offers features like pagination, multi-language support (English and Chinese), dark mode, and more.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Additional Features Implemented](#additional-features-implemented)
- [Deployment](#deployment)
- [Demo](#demo)
- [Checklist](#checklist)
- [Contact](#contact)
  
## Setup Instructions

To run this project locally, follow these steps:

### 1. Clone the Repository

```
git clone git@github.com:chakriyaP/hatohub-GNews.git
```
### 2. Install Dependencies
Navigate to the project directory and install the necessary dependencies:

```
cd <project-directory>
yarn install
```

### 3. Run the Project
After installing the dependencies, start the development server:

```
yarn start
```
Open your browser and go to http://localhost:3000 to view the application.

## Technologies Used
This project uses the following libraries and technologies:

- **ReactJS** (with TypeScript)
- **Ant Design** for UI components
- **Ant Design Icons**
- **Axios** for API calls
- **Day.js** for date handling
- **i18next** for internationalization
- **Styled Components** for CSS-in-JS styling


## API Integration
This project utilizes the GNews API to fetch news data. You will need an API key, which you can obtain by registering for a free account at [GNews.io](https://gnews.io/docs/v4?javascript#top-headlines-http-request).

### Data Handling for Published Date
- The API's `/top-headlines` endpoint does not support filtering by `publishedAt`. As a result, the frontend sorts the data by `publishedAt` after fetching it.
- The `/search` endpoint supports filtering by `publishedAt`, but it only allows filtering by category. Therefore, the project uses the `/top-headlines` endpoint and performs the sorting by `publishedAt` on the frontend.

### Pagination
- Since the API's free plan limits results to only 10 items per request, pagination is handled entirely on the frontend.

## Additional Features Implemented
- **Multi-Language Support**: The app can dynamically switch [languages](https://gnews.io/docs/v4?javascript#languages), filtering news based on the selected language.
- **Dark Mode**: A dark mode toggle is available, allowing users to switch between light and dark themes.
- **Source Links**: Added clickable links to the source of each news article.

## Deployment
The project has been deployed on Vercel, and you can access the live website here:

- [GNews Webpage](https://g-news-one.vercel.app/)

Please note that if you encounter missing data, it could be due to API usage limits on my API key 🙇🏻‍♀️

## Demo

https://github.com/user-attachments/assets/06e4d26a-2005-4a1b-a739-f10e4933e772

https://github.com/user-attachments/assets/148db64d-93a3-4cb6-9118-4a87a482897a

## Checklist
Here’s a list of features and functionalities implemented in the project:
- Search news from GNews API
- Pagination support with client-side management
- Filter news by category
- Filter news by date/time range
- Sort articles by `publishedAt`
- Multi-language support [languages](https://gnews.io/docs/v4?javascript#languages)
- Display article cards with image, date, title, description, and source
- Dark mode toggle
- Added links to the source of each news article
- Deployed to Vercel: [GNews Webpage](https://g-news-one.vercel.app/)

## Contact
For any questions or issues, feel free to reach out to me at kimchakriya91@gmail.com.

