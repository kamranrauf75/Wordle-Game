# Wordle Game Application

This is a full stack (MERN) application for playing the game Wordle. The application includes additional features along with the functionality of the game. Below are the details of the application and its pages.

## Pages

The application consists of the following pages:

1. Homepage
2. Login page
3. Sign-up page
4. Leaderboard page
5. Game page
6. History page

## Sign-up page 

This page allows users to create a new account. It contains a simple form where users enter their desired username and password. Upon signing up, the system checks if the username already exists in the database. If the username is unique, the account is created, and the credentials are stored in the database. After successful signup, users are redirected to the login page.

## Login page

The login page is the default page of the application. It includes a form where users enter their username and password. If the entered credentials match an existing user in the database, the login is successful, and the user is redirected to the homepage. If the login is unsuccessful, an alert is shown. The login page also includes a sign-up link that redirects users to the sign-up page.

Note: Users cannot access the homepage, leaderboard page, game page, or history page without logging in.

## Homepage 

The homepage displays the username of the logged-in user and includes four buttons:

1. Logout: Logs out the user, removes the stored state, and redirects to the login page.
2. Leaderboard: Redirects the user to the leaderboard page.
3. Game: Redirects the user to the game page where they can play the Wordle game.
4. History: Redirects the user to the history page.

## Game page 

The game page allows users to play the Wordle game. It displays a 6x5 empty board. To start the game, a 5-letter word is generated using the provided API: https://random-word-api.herokuapp.com/word?length=5. Each game uses a new word from this API.

Users can make guesses by entering words in a form and submitting them. The entered word is validated to ensure it has the correct length (5 letters). If the word is valid, it is placed on the board with colored markers according to the game rules. Words that contain no matching letters are not accepted.

After each turn, the board is updated with the user's guesses. If the user guesses the word correctly within 6 tries, they win the game. In both cases (win or lose), the following actions occur:
1. The form is disabled to prevent further input.
2. The board, game result (win/lose), and the word to guess are stored in the database.
3. A refresh button is displayed, allowing the user to reset the game and play again.

## History page 

The history page displays the game history of the logged-in user. It shows the 6x5 board for each game, filled with the user's guesses during that game. The page also indicates whether the user won or lost and displays the word they had to guess. The username of the logged-in user is also displayed.

## Leaderboard page 

The leaderboard page shows the rankings of all users based on the number of successful games. Users are listed in descending order, starting from the highest number of successful games.

All pages (leaderboard, game, and history) have a back button that allows users to navigate back to the homepage.

