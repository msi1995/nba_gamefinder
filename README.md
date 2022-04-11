![image](https://user-images.githubusercontent.com/63132397/162613296-740da611-d5e6-452c-84b3-153020f28957.png)


# Alkira UI Engineer Takehome

To the devs at Alkira who review my implementation, thank you for the opportunity. I included just a few comments in areas of the code that I know may have room for improvement, but I did not want to spend an unrealistic amount of time on the takehome.

I used a third-party side panel (https://www.npmjs.com/package/react-sliding-side-panel) that ended up not functioning as well as I would have liked. You'll notice a slight delay when closing the sidebar. I tried to fix this for a bit, but wasn't able to find a quick solution.

I added a bit of extra flair to the design, such as a scroll for the table instead of pages, as well as some loading indicators for data retrieval for the side panel -- hopefully this is okay.

Finally, I added some very basic Cypress tests to ensure the dynamically generated rows in the table and the side panel exist (the api is working). I have never used Cypress; I imagine there are better ways to do this like mocking the response and seeing how it is handled. It's something I'd need to learn more about.

Run the tests with npm test.


Thanks!



## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm install`
### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Runs the two basic Cypress tests.
