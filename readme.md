Welcome to Starr's Book Lair! This is a book review website, that focuses mainly on science fiction and fantasy.  You will notice that there are eight pages that come together to make the whole site. Not all of the project requirements can be found on the home page. So let me point you in the right direction. 

*****************2023 UPDATE FOR WEB DEV 2***************************
Goal>> The Goal for this project was to have a digital record of all of the books that have been read this year.  As any avid readers know, not every book that is read will have a full review. Those that have a full review are linked on the review page. The booklog page contains this table. I also wanted to add a place within the website where you can learn more about the books- as the reviews will contain the actual book summary. If you would like to know more about a book that has a review or that has been read but not reviewed, you can use the book information page to find out more via the search bar.<<

There have been 2 pages added to this website for this course's project: 2023 Book Log and Book Information. 

***********************************Features*****************************
A. Use arrays, objects, sets or maps to store or retrieve information. 
    
B.Create a function that accepts two or more input parameters and returns a value. 

C. Retrieve data from a third-party API and use it to display something. 

*********************HOW TO RUN THIS PROJECT*****************************
Everything that you need for this project is contained in the code, as it just static website with some dynamic features. This is a website that I am transitioning to, so all of the reviews are not linked/posted, some of the festures have been fleshed out to the extent of this project and is still in construction

Please feel free to explore the other pages, if you wish!
****************End of 2023 Update for WEB DEV 2*********************




First the media queries: 
If you are starting the page from the mobile size, this is what you should be seeing (top-down):
Starting with the navigation bar: Home, About Me, Reviews and TBR Episodes should be on top. It wraps and Reader's Corner and Reading Challenges and Goals are on the bottom. 
"Starr's Book Lair and the Lewis quote should be centered. 
The Hoard Follows:
There are three images that are on top of each other (Gearbreakers, Muse Squad and Beasts and Beauty) <When this is live and compltetely finished, each image will be linked to the corresponding review.>
Scroll down to find the introduction to the TBR episodes.
This is all wrapped into a flex-container. The header and image makes up the first container. At this size, the image should be small. All of the text should be centered with padding around it. Social media links and copytight information makes up the footer, which is centered and wraps into a paragraph at this size. 
When you move your screen out to 768px, everything should start unwrapping. This is how the home page should look (bottom-top):
The footer is starting to spread out, it is now 3 lines (social media links,All Rights Reserved and then the Copyright).  The TBR image has grown. 
The Hoard 2 images should be on top (Gearbreakers and Muse Squad) with the third image (Beasts and Beauty) still stacked underneath
The header is still centered. 
The Navigational bar should be completely unwrapped, with all the pages sitting in a row. 
The second media query comes into play if the screen is bigger (992px) Everything almost looks the same, only occupying more space. 
The three book cover images are now sitting in a row beside each other, The TBR image is much bigger. 
If you look at my Github, you will see that there are plenty of commits. Despite the fact that a computer update broke the connection and me renaming the files (due to a VS Code anomaly) broke my repository files, I was able to get all changes saved, committed and pushed well over 30 times. 
There are three key CSS features that can be found: the navigation bar (wraps and unwraps itself depending on the size of the screen)
I have used flex-containers on the home page with the TBR Episodes. 
There is also a flex-container of the TBR page, with the notable difference of 3 containers (Graphic, Book image and text)
The third CSS feature is on the Conductors review page. (Go to Reviews. The Conductors is the only review with a live link.) If you hover (click if you're on mobile) my rating for the book should pop up ("Post Civil War but with magic. I loved Hetty and Benjy together, 5 stars!)  At the bottom of the review there should be a back button that takes you back to the Review Page. 
If you go to the ABout Me page, you will find where Java Script comes into play. If you click the "Things to keep in mind" button, you can hide or show a list of things that should be considered if you are wishing to contact me about a review.  
For email validation using Javascript, go to Reader's Corner. If you are interested in being a reader's consutltant, enter your email. If a correct email is entered the message "Success! Thank you for your interest in cosulting!" pops up.  If an incorrect email is entered the message " Sorry Invalid Email" pops up. 
That is all that I have right now for my website. Thank you for reviewing it!