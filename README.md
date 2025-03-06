
# Git User Finder

## Overview

Git User Finder is a simple yet powerful application that allows users to search for GitHub profiles using their usernames. The app fetches and displays user details, including their bio, latest repositories, and other relevant information, using the GitHub API.

This project is powered by **Octokit**, a GitHub client library, to interact seamlessly with GitHub's API and retrieve user data efficiently.

## Features

* 🔍 **Search GitHub Users** - Find any GitHub user by entering their username.
* 📜 **User Details** - Displays the user's bio, location, followers, and following count.
* 📂 **Latest Repositories** - Fetches and shows the latest repositories of the user.
* ⭐ **Repository Stats** - Displays repository stars, forks, and language used.
* 🎨 **User-Friendly UI** - Simple and intuitive interface.

## Technologies Used

* **React** - Frontend framework for building the UI.
* **Vite** - Fast build tool for React applications.
* **Octokit** - GitHub API client for fetching user data.
* **GitHub API** - To retrieve user and repository information.

## Installation

To set up the project on your local machine, follow these steps:

1. **Clone the Repository:**
   ```
   git clone https://github.com/yourusername/git-user-finder.git
   cd git-user-finder
   ```
2. **Install Dependencies:**
   ```
   npm install
   ```
3. **Run the Application:**
   ```
   npm run dev
   ```

## Usage

1. Enter a GitHub username in the search bar.
2. Click the "Search" button.
3. View user details, including their bio, repositories, and stats.

## Example

## API Usage

This app uses the **GitHub API** via **Octokit** to fetch data. You might need a GitHub personal access token if you exceed the rate limit.

Example API call:

```
import { Octokit } from "octokit";

const octokit = new Octokit();
octokit.request('GET /users/{username}', {
  username: 'octocat'
}).then(response => console.log(response.data));
```
