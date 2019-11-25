# Would You Rather Project
Would you rather is a single page web application that allows users to post questions to the friends.

A "logged in" user can view unanswered questions by default on the homepage. These questions simply contain the two options so that the user isn't swayed by the poster or other user's answers. Once answered, the user is redirected to the question page where they can view details about who posted the question and how their friends voted. This view can also be seen in the "Answered" tab on the homepage.

In addition to voting, the web app also allows for asking questions. A simple form is used to input the two options. Once posted, the user is redirected to the homepage, where the new question will appear under the unanswered tab.

For friendly competition, a leaderboard keeps tabs on the questions asked and answered.

Lastly, a user always has the option to logout. Upon doing so (or if they never logged in), any click on the navigation links will show the login page. If a user types in an address that doesn't exist, they'll be routed to a 404 page.

Demonstrates competence in React and Redux. Users, Questions, and an "Auth User" are managed by the redux store. Components demonstrate code reusibility and interactivity.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


