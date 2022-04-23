# FTL Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's FTL Program. 

Submitted by: Yi Yang Wei

Time spent: 5 hours spent in total

Link to project: (code) https://glitch.com/edit/#!/brave-ahead-gallon (game) https://brave-ahead-gallon.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://user-images.githubusercontent.com/91094256/160330620-78f3a9c8-32c7-422a-889c-9011302fca7d.gif)
)
![](https://user-images.githubusercontent.com/91094256/160331221-8789f9a2-3cc1-46ed-8c22-f85483bc9945.gif)
)
![](https://user-images.githubusercontent.com/91094256/160331233-d977c97d-a2c1-40cf-aa1b-de4c23d01a07.gif)
![](https://user-images.githubusercontent.com/91094256/164799949-cd52cbcf-1b03-470b-8534-878dcc0adf0c.gif)

##The fourth gif is mainly used to present that there are more than four buttons and the button's shape get changed when pressed compared to my original implementation. 


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://codepen.io/Orajiaku/pen/NLomxZ
https://www.geeksforgeeks.org/how-to-show-images-on-click-using-html/
https://www.w3schools.com/html/html_images.asp
https://www.freecodecamp.org/news/learn-the-basics-the-css-position-property/#:~:text=What%20is%20the%20CSS%20position,an%20element%20on%20a%20page.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I encountered a few challenges while implementing the last step of the required features. When I looked at the pseudocode diagram for the guessing function, I was a little confused about the meaning of “turn over”.  I was able to understand the step by connecting the previous and latter steps and think about what should happen as an intermediate step. After we know the guess is correct and before we can conclude whether this turn is the last turn, we need to wait for the user to finish clicking the button. So I figure out the meaning of turn over by thinking about what the user is currently doing. Also, when doing the last step, my guess function is not running properly when I try to run it. I wrote my conditional statements a little differently than the given so when comparing my existing code with the hint I need to pay attention to the if and else statements. I need to negate some of the given conditional statement in order for the program to work. 
From SITE to FTL, I have added a few more features to make my app seems more interesting. One thing I did is to let the computer choose randomized pattern for each new game. I tried to do this when I was doing the prework for SITE, but I did not implemented it when in the final presentation because I did not think close enough about how to employ randomization in Javascript. Eventually, I was able to employ the randomization just like how I would do it in Python. Use the random function to generate number in the desired range and put them into a list for use. I was able to do this by thinking about how would I write the code in Python and eventually translated it into the syntax of Javascript.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
While implementing the optional features, I realized that in order to show a unique picture for each button, we need to define functions in the Javascript file and call the function in the html file in the corresponding element. But when searching online, I also saw some people choose to define their function in html. I am wondering what is the difference in functionality when the function is defined in html and Javascript. In addition, currently we are using html, css and javascript to present the frontend of a website, what exactly will we be doing for making the backend of the website. How are the frontend and backend connected?
In general, I think there are many things we can do with coding. We can write a simple program to help us solve simple math calculations, we can write applications which can be used on our mobile devices, and we can wirte code to setup a website that million people will use. What skills are need for these different field and is it possible to master in more than one field?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
First, I would revise the customization for the buttons because the current version is yet unfinished. Currently, I was able to display different images when clicking on different buttons. However, I didn’t figure out how to place the image behind each of the buttons exactly. I am thinking about setting a specific location for each of the images, but I am not sure what is the specific location for the buttons because when we use them on the html page, it seems like the location is automatically assigned rather than manually set. If I have additional time, I would like to search for a way to resolve this issue by linking the image and button directly to each other. I also tried to implement another optional feature that could give the user three strikes. However, my past implementation failed because there seems to be two calls to the playSequenceClue() function when the user had successful guesses in previous rounds and lost one strike for recalling more than one button. I tried to put the conditional statement in different places in the guess function but none of them seemed to work at the moment so I will definitely try to make a successful implementation if I have more time.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://cmu.zoom.us/rec/share/wn6xtN_jx93NYD20H-rSPHr_siLAsCr6ZvH1Nlpypf2VGfjDmdS6taJkA3Bqsue8.5n-OoKJ4FX87r4gv?startTime=1648447768000)


## License

    Copyright [Yi Yang Wei]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
