# Dummy User Dash - Project Instructions
If you follow all of these, you are **very** likely to get the job. Please note that if you're experienced in Angular, it shouldn't take you longer than 3 to 4 hours to complete these tasks, as they're pretty basic.

This is supposed to mimic a MEAN stack app. You are going to do all your work inside /client, but you are to use a running NodeJS server to fetch the users. Most of your work is to be done in the "components", "pages" and "services" folders.

When done, create a new repository with your work, and share it with us.

1. **Run the backend NodeJS server** (you will use it to fetch /users data)
2. **Add backendUrl** (figure out what that is) as env variable
3. **Modify UsersService** to include a function that gets users from http://${backendUrl}/users
4. **Include schema for User** based only on the filtered user data returned by /users, as can be seen in the server.js file
5. **Create a /dash page** (in /pages) that will look like and behave the image and video below.
    - **Follow the image and the video to apply styles and colors:**
        - **Image**: https://gyazo.com/813e6d243ec9e0202e784efc6c22947c
        - **Video**: (without the modal window implementation in 5.9., you still **must** implement that): https://app.usebubbles.com/jSKtCYusixx79phna9dpMr 

    - 5.1. The dash page should have a container that has an H1 heading that says Users on the left hand side, and two buttons on the right hand side: "Filter 30+ On/Off" (with on/off toggled as shown in the video) and "Add User". On mobile these are all rendered one per "line", vertically. Use flexbox.
    - 5.2. Utilize UsersService to fetch all users on DashComponent OnInit, have them sorted by Age (desc)
    - 5.3. Create a new table component, that will be displayed in the Dash page, underneath the H1 and buttons container
    - 5.4. The table component gets the users array as input from the Dash Component, and renders users as shown in the image linked in 5, and in the video
    - 5.5. The user's "State" in the table component should show the state's name instead of the abbreviation received from the backend, and the state should be rendered as shown in the image/video. Use the us-states service.
    - 5.6. The user's "Age" should be contained in a box and have a conditional color background (orange for 30+, green for under 30), as shown in the video.
    - 5.7. Clicking on the "Filter" button should toggle one single filter on: If on, it will only show users Age 30 or more. If off, it will show all users, including any users that were previously added.
    - 5.8. The table header must be not be part of the scrollable area and is to remain above the table data, and the scrollbar on the table body must be the same shade of blue as the toolbar, with a width of 10px
    - 5.9. Create a new modal window component that will be opened when the user clicks "Add User", and can be closed when clicking outside of the modal window component
        - 5.9.1. When clicking "Add User", you are prompted for the following values in a new modal window: First name, Last name, Profile image URL, age (numeric input) - all but the Profile image URL are required values
        - 5.9.2. Display Toastr success/error messages depending on whether the user is successfully added or if there's something wrong with the input values
        - 5.9.3. If the user was successfully added, it should be pushed to the top of the users table (no backend or DB call necessary), and instantly rendered as such