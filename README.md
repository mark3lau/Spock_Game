# **GAME OF SPOCK**

## <u>1. Introduction</u>
The objective of this project was to create an interactive front-end site that would respond to a user's actions using Javascript, HTML and CSS. Game of Spock is an extension of the popular Rock, Paper, Scissors game that the user can play against the computer. The difference with the Game of Spock is that it has four extra options: Lizard, Spock, Love and Devil. Lizard and Spock are game options that were made popular by the TV programme 'The Big Bang Theory' and form the 'Easy Spock' level of the game with five options to choose from. Love and Devil options are for the 'Hard Devil' level to the game where there are seven options to choose from. The site is targeted towards players who want to play an extended version of the traditional Rock, Paper, Scissors game and play online against the Computer. 
<hr>

## <u>2. User Stories</u>
As a user who wants to learn and play an extension of the Rock, Paper, Scissors game, I want to navigate the game page with minimum effort and easily understand how to play the game from the instructions. I want to be able to have fun playing against the computer and try and beat it with a higher score.

### **End user goal:** 
To understand the rules of the Game of Spock and to try and beat the Computer in the Game of Spock with a higher score.

### **Acceptance criteria:**
The landing page to include instructions to the rules of the Game of Spock.
An input box for the user to choose a username before they progress to the game itself.
The user can choose between different levels of difficulty.
A scoreboard that keeps track of the score.
A message that indicates whether the user has won, lost or drawn each round of the game.

### **Measurement of success:**
A landing page with clear instructions explaining to the user before they get onto the game page what the rules of the game are. 
A simple input section for the user to input their username on the landing page. The chosen username to be instantly implemented onto the game page and for the user to be taken there directly having clicked the submit button.
A user can choose between difficulty levels easily that will add to the enjoyment of the game by the user. 
When the user chooses an option, a result message will display immediately to inform the user as to whether the result is a win, lose or draw, and the scoreboard will update immediately depending on the result. There will be an acknowledgement of the choice chosen and the score updating using a visual display of colour and/or audio.
The game will be fully responsive from large screen widths to small mobile screen widths. 

<hr>

## <u>3. Features</u>

### **Header**
There is a fixed header featured on both the landing page and game page with the game title displayed. The header is also a shortcut to refresh the page and take the user back to the landing page to restart the game.

### <i>**Landing page**</i>

![landing-page](docs/screenshots/landing-page.png "Landing page")

### **Rules images**
There is one image that shows the rules for the Easy Spock level of the game using the five choices of Rock, Paper, Scissors, Spock and Lizard. The second image to the right shows the rules of the game for the Hard Devil level of the game, with the Love and Devil choices added to the five choices of the Easy Spock level.

### **Username input box**
There is a clearly indicated input box underneath the rules images for the user to enter their username for the game.

### **Level options**
There are two level options, Easy Spock and Hard Devil, to the game which are not displayed until the user has entered a username. The user must click one of the options to proceed to the game page. 

![landing-page-levels](docs/screenshots/landing-page-levels.png "Landing page with levels")
![landing-page-levels](docs/screenshots/landing-page_level-selected.png "Landing page with level selected")

### <i>**Game page**</i>

### **Username and computer name**
The user's chosen username will be displayed on the left side of the page, and the Computer's name is displayed on the right.

![easy-game-page](docs/screenshots/easy-game-page_ready.png "Easy game page")

### **Scoreboard**
The scoreboard is positioned in the middle of the screen, with the scores updating as the user plays the game. The player's score in the scoreboard will light up in a green colour when the user wins a round, and the computer's score will light up in red when the user loses. For a drawn game, there are no colours displayed.

### **Results message**
The user will be greeted with the message "Ready?" when they first land on the game page. This will then display three different types of messages as the user plays the game, one each for winning, losing or drawing a round against the computer.

![game-page-results](docs/screenshots/game-page_win.png "Win result")
![game-page-results](docs/screenshots/game-page_lose.png "Lose result")
![game-page-results](docs/screenshots/game-page_draw.png "Draw result")

### **User choices for game**
For the Easy Spock game, the user will have five choices to choose from between Rock, Paper, Scissors, Lizard and Spock. For the Hard Devil level, there will be the addition of the Love and Devil choices. These choices will be represented by icons towards the bottom of the screen. There is also a "Make your move" message below the choices to indicate to the user that they have to click on a choice to start the game.

![game-page-results](docs/screenshots/ "Draw result")

### **Restart the game**
The user can click on the game title Game of Spock in the header which will refresh the page and take the user back to the landing page to restart the game.

<hr>

## <u>4. Future features</u>

### **Sets of games**
A feature that allows the user to play to a pre-determined high number, for example the first to reach 21 points. Then a separate scoreboard to keep track of the amount of sets the player has won or lost against the computer. This will add an extra layer of competitiveness to the game and overall enjoyment to the user. 

### **Two player game**
Include an option for two users to play against each other instead of the game being a one player game against the computer. This additional feature would look to split the screen and for the controls for user choices to be input through the keyboard.

### **Timer**
To add a timer element to the game. This could be achieved by either adding a countdown timer before the player makes a choice each time, for example a 3, 2, 1 countdown. Or a countdown timer for the user to try and beat the computer before the timer reaches zero. This feature could work nicely alongside the "Sets of games" feature mentioned earlier.
<hr>

## <u>5. Typography and color scheme</u>
I chose a dark background and a light pink colour scheme. I wanted to associate the colour scheme to Star Trek and the acknowledgement of Spock as being a main part of the game. The dark background has an added "galaxy/space" effect with tiny specks of white light to represent distant galaxies and the night sky. The light pink is a nice contrast to the dark background and makes the text legible. There is also a light blue colour that's used that gives an extra layer of aesthetics to the site and again is very legible against the dark background. The main font is "press start 2p" which is reminiscent of the 1990s arcade games, this is only used for the game title and text that are large enough so that it's easy to read. For scoreboard text and messages this is in "space grotesk" font which is easier to read for the user and keeps with the "space" theme.
<hr>

## <u>6. Wireframes</u>
Wireframes were created using Balsamiq to outline what the site would look like, from the layout of the Landing page to the Game page and updating scoreboard and results messages. I've also outlined the layout for desktop and mobile screen widths.

#### **Large and medium screen widths**

![home-page-1](docs/wireframes/home-page-1.png "Home page 1")
![home-page-2](docs/wireframes/home-page-2.png "Home page 2")
![join-us-page](docs/wireframes/join-us-page.png "Join us page")
![tennis-courts-page-1](docs/wireframes/tennis-courts-page-1.png "Tennis courts page 1")
![tennis-courts-page-2](docs/wireframes/tennis-courts-page-2.png "Tennis courts page 2")

#### **Small screen widths (mobile)**

![home-page-1-390px](docs/wireframes/home-page%201-390px.png "Home page 1 390px")
![home-page-2-390px](docs/wireframes/home-page%202-390px.png "Home page 2 390px")
![home-page-3-390px](docs/wireframes/home-page%203-390px.png "Home page 3 390px")
![join-us-page-1-390px](docs/wireframes/join-us-page%201-390px.png "Join us page 1 390px")
![join-us-page-2-390px](docs/wireframes/join-us-page%202-390px.png "Join us page 2 390px")
![tennis-courts-page-1-390px](docs/wireframes/tennis-courts-page-1-390px.png "Tennis courts page 1 390px")
![tennis-courts-page-2-390px](docs/wireframes/tennis-courts-page-2-390px.png "Tennis courts page 2 390px")
![tennis-courts-page-3-390px](docs/wireframes/tennis-courts-page-3-390px.png "Tennis courts page 3 390px")
![tennis-courts-page-4-390px](docs/wireframes/tennis-courts-page-4-390px.png "Tennis courts page 4 390px")

<hr>

## <u>7. Technology</u>
HTML and CSS were used to give the site it's core text and styling structures.
JavaScript was used to run the interactive parts of the game, including but not limited to the score updates, generating the random computer choice and the logic determining the win, lose and draw outcomes.
Two fonts were chosen from Google Fonts for the text styles of the site.
The icons for the player choices were taken from Font Awesome.
The audio files for the win and lose noises were taken from Mixkit.
Gitpod was the application chosen to develop the site.
The site has been deployed on Github pages. 
<hr>

## <u>8. Testing</u>

   ### **Code validation**
   HTML and CSS. Small errors were found and have been corrected since when the codes were put through the [W3C validator](https://validator.w3.org/) for HTML and [Jigsaw validator](https://jigsaw.w3.org/css-validator/) for CSS.

   The JavaScript code was put through the [JShint validator](https://jshint.com/) with minor errors such as unnecessary semicolons that have now been rectified.

   ### **Test cases (user story based with screenshots)**

   #### **Desktop**

   ##### Landing page
   As the user is on the landing page, the user is shown the game title in the header, and two images underneath with the rules of the game. There is a message that informs the user to enter a username in a text box, where the pointer is focused on the text box already as the landing page loads. The user has to enter text into the text box before the options for the two difficulty levels are displayed on the page, Easy Spock and Hard Devil. 

   ![nav-bar-highlight](docs/screenshots/home-button-highlight.png "Nav bar highlight")

   ![social-media-link-highlight](docs/screenshots/twitter-highlight.png "Social media link highlight")

   ##### Game page
   When the user gets to the game page, the username that was typed into the text box on the landing page will appear on the left side of the screen. In between the username and computer name, there is a scoreboard that indicates the scores for the player and the computer. Underneath the scoreboard is a "Ready?" message, the choices the user needs to make which are represented as icons, and another message to promt the user to make the first move to start the game. 
   When the user hovers over the icons, the icons will "pop" out and is highlighted with a blue border. When the user clicks on a choice, the game starts immediately and the score will automatically update and the results message will appear to show the user whether they have won that round or not. If the user has won a round, the user's score in the scoreboard will light up green. If the user has lost the round, the computer's score in the scoreboard will light up red. If it's a draw, it will only be indicated through the results message.
   If the user clicks on the game title in the header, this will refresh the page and take the user to the landing page to restart the game.

   ![join-us-error-message](docs/screenshots/join-us-error-message.png "Join us page error message")

   #### **Mobile** 
   For a mobile width of 390px, the rules images are stacked on top of each other. The heading, images and text are all made smaller to fit the screen size better. In the game page, the icons, messages and names are all made smaller. The transformation of the icons when the user hovers over an icon has also been made smaller to minimise the movement of the icons from one row to another.

   ![home-page-390px](docs/screenshots/home-page-390px.png "Home page 390px")
   ![join-us-page-390px](docs/screenshots/join-us-page-390px.png "Join Us page 390px")
   ![thank-you-page-390px](docs/screenshots/thank-you-page-390px.png "Thank You page 390px")
   ![tennis-courts-page-390px](docs/screenshots/tennis-courts-page-390px.png "Tennis Courts page 390px")

   ### **Fixed bugs**
   A loadlevels function and a keydown event listener was added to JavaScript in order to prompt the user to enter a username in the text box before progressing to the game page. Before this, the user was able to click on a difficulty level straight away before typing anything into the text box.
   
   When I was incorporating a second option for the difficulty level, I started by trying to run two functions to generate the computer choices for the Easy and Hard games. However, in the Easy game the computer was still generating the Hard choices of Love and Devil which should not have been part of the Easy game. To fix the bug, I created only one function to generate the computer choice, and created arrays for easy and hard choices in addition to an empty array option for controls. This helped to simplify the code and allowed the computer to generate choices for the Easy and Hard levels separately.

   I had not included the playerChoice and computerChoice arguments within the win(), draw() and lose() functions that were nested within the game function. This resulted in both the player and computer scores updating at the same time whether the player won or lost. This was easily rectified by including the arguments within these functions.

   ### **Unfixed bugs**
   If a user enters text into the input box, the difficulty levels will appear on the screen. But if the user then deletes text from the input box and then clicks one of the difficulty levels, they can still progress to the game page without a username.
   
   ### **Supported screens and browsers**
   The site is fully supported for large, medium and small screen widths from widths larger than 1480px to small screens of 390px. The images and texts have all been adjusted so that the user experience is unaffected for different screen sizes.
<hr>

## <u>9. Deployment</u>

   ### **Gitpod**
   The site was developed using Gitpod. In order to access the Gitpod workspace, follow the steps below:
   
   In Github repository, select the mark3lau/Spock_Game.
   Click on the green Gitpod button near the top of the repository page, this will open the Gitpod workspace.
   Inside the workspace, you can generate the web page of the Spock Game by typing into the terminal "python3 -m http.server".

   ### **Github**
   The site was deployed to Github pages. The steps to deploy are as follows:

   In Github repository, navigate to the Settings tab.
   In the section 'Source', select the Main option and click Save.
   Once Save has been clicked, the page will automatically refresh.
   Scroll to the Github pages section where the live link can be found.

   The live link can be found here - https://mark3lau.github.io/Spock_Game/

<hr>

## <u>10. Credits</u>

   ### **Content**
   The icons for the player choices in the game page were taken from [Font Awesome](https://fontawesome.com/).
   The fonts for the site were taken from [Google Fonts](https://fonts.google.com/).
   The code for the starry night effect background for the site was taken from Marsei who posted on 26th November 2015 on [Stack Overflow](https://stackoverflow.com/questions/33948011/creating-a-starry-background-in-css).
    
   ### **Media**
   The rules image for the Easy Spock level with the five options, Rock, Paper, Scissors, Lizard and Spock, was taken from the [Juice Bubble](https://juicebubble.co.za/product/rock-paper-scissors-lizard-spock/) website. 
   The rules image for the Hard Devil level with seven options including the Love and Devil options, was taken from a blog post by Maddish on [Zebra Tiger Fish](http://zebratigerfish.blogspot.com/2018/02/a-seven-pointed-expansion-rock-paper.html).
   The audio files for when the user wins and loses a game were taken from [Mixkit](https://mixkit.co/free-stock-video/audio/).