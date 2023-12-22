# CASA PAULINA   
## Video Demo:  <URL HERE>
## Description:
### Introduction
Before I decided to follow the path to become a programmer, I was already managing a vacation house as a side gig to my support agent main job. During my time as support agent I had my first contact with programming and fell in love with it, which made me leave that job after almost 4 years to pursue a coding career. My vacation house never left my life, in fact, it is helping me support myself while I study programming. So why not make my final project on CS50 about my current main income? This way I decided to make a website for my house.

### The concept

Before Covid hit I used to run a hostel on this house, where at that time I made a website using the Wix platform. Looking back now, it was a horrible website, but I did all by myself and was proud of it. After Covid I decided to change the format and only rent the full house as they do through AirBnB, website in which I also rent my house currently, since I started working as a support agent and could not keep the hostel format. During that time the original website was abandoned and I never thought about it again, but for the final project for CS50 it hit me that I could have the best of both worlds by creating a nice website for my business and also using it as the final assignment for the course. 
I originally drafted by hand a version with my girlfriend, mainly focusing on the mobile version to adapt it to the desktop later. The idea was to focus on providing a way for customer to reach me directly through WhatsApp from Instagram by a call to action button and provide basic information about the house and pictures, besides a availability calendar and a map of the location, so that people could analyze if the place is ideal for them. AirBnB, which is my main source of reservations, does not provide the complete location for security reasons, so this was a big part of the website, besides peoviding a channel for the customers to reach me. Also, having a website for your business makes it more professional.
With a first draft in hand and an idea of what to provide through the website, I started getting some extra knowledge about Boostra, besides what we learn on CS50,  to use it as the main tool to build my website. I quickly realized that going straight to Bootstrap without a deeper prior knowledge of HTML, CSS and Javascript was not a wise choice, since much of the intricacies of those languages, mainly CSS, would be lost and I would not learn much that way. That way I decided to use mainly raw HTML, CSS and Javascript to create the website. The website is not multilingual yet, since most my clients reach me through AirBnB and the ones that don’t, are all Brazilians. But I plan on making English and Spanish versions later.

### Creating the site

My approach to the work was to build its structure from top to bottom and later adjust the aesthetics, so I chose to tell a bit more about the process here by describing it by each section starting from the header all the way to the footer. There are 4 types of files building my website: CSS, JPG images, Javascript and HTML files, where the first tree are each kept on their own folders and HTML are on the main folder of the project, all of them being used some way or another through each section that I’ll describe further. I created a main HTML file called index.html where the homepage will start from and also where the head with meta information for responsiveness settings, script tags and links for CSS files are. The other HTML files are used to hold information that I dynamically populate other pages using Javascript.

### The Website

#### Homepage

##### Header

My header was the first part to be worked on and probably the second part that gave me most headaches, since I insisted on having a dropdown menu, even though in the end the menu by itself only has two links, but it makes the website look more professional on mobile. Through media queries I made the dropdown menu have a classic hamburger icon that groups the link into itself when the screen width is smaller than 750 pixels. Both the house name (Casa Paulina), which leads back to the main page, and the dropdown menu have a CSS animation underlining them when the user hovers over the links, animation which I ended up using throughout the website.

##### Hero Image

This portion of the website was one of the easiest ones, except for that fact that the picture would get choppier the smaller the width. I was starting to learn about HTML and CSS so I had to do some digging to identify that images are rendered differently when you use it through an img tag or as background image through CSS, where big images used as background do not resize accordingly as when used through a img tag. Since using background image is better and easier for responsiveness for the hero, I ended up resizing the images so that the media queries could provide the adequate size for each device size. 

##### Whatsapp Contact Sticky Bar

The sticky bar was one of the last items to be added to the website. This was an idea from my girlfriend pointing to the fact that many clients may not be computer savvy and just want to contact me when accessing the website, so I made that in a way that this contact bar would always be visible throughout the main page.

##### House Intro

The introduction originally divided its space with an API that gathered information from my Airbnb and displayed it on a calendar, but the free version of the API did not provide the liberty to fit it to my design, and since the cost was not worth the extra information, I ended up removing it completely and just left the brief introduction about the house.

##### House structure

Originally meant to work as a description about what the house has, I ended up only providing the main structure of the house with the inventory missing for the time being. My plan in the future is maybe make a guided tour through each room describing what each one has.

##### Homepage Gallery

The gallery on the home page was by far the most complicated part for me, since early in its creation I identified that it would be ideal to have a different presentation depending on the screen size. For mobile screens, I made a carousel styled gallery that through Javascript can change the picture and go back all the way to the original picture. Not all pictures are displayed on home page, since this would take a big toll on loading time and inevitably make the page heavier. For bigger screens I used CSS grid display to make the pictures sort themselves depending on screen size, where they also can be clicked to open an enlarged version of each image using Javascript. The carousel mobile gallery does not have the option to enlarge the pictures, since each picture has practically the same width of the device, so enlarging them would be pointless. Both versions of the gallery have a shortcut for the main gallery page. The carousel one has a written link below the current picture and the grid display on bigger screens have a link to it through the last picture of the grid. To help the user identify that the pictures are clickable, I used a Keyframe rule to slightly change the opacity and scale when the picture is hovered over.

 ##### Footer
 
The last sections of the website I used to provide the location, weather information and extra contact info. I embedded an interactable shortcut for my house’s location from Google maps through a iframe tag, while the weather information was provided through an widget from forecast7.com. When benchmarking other rental house websites, I saw many of them using weather information to add an extra flare and information, so I ended up doing the same for mine. The last part of the footer contains the symbol of the house and links to our AirBnB, Instagram and WhatsApp, as well as the address spelled out. All three footer regions where designed around the grid layout and media queries to be responsive according to the window size.

#### Gallery

To better fit all the images on one place I ended up creating a page just for it. This is a very straightforward design where everything is laid out on a CSS grid display so that every screen size has an adequate presentation. The last picture has an extra set of CSS rules where the media queries make it disappear depending on the screen size because I wanted the grid to always fill all the page equally and to prevent an image to pop out alone at the bottom of the grid. Each picture here has the same Keyframes animation to help the user identify that they can enlarge it. When accessing the gallery through a mobile phone, the gallery appears as a single column and the pictures do not have the option to be enlarged, following the same logic as the carousel back in the homepage.

#### Profile

The last page I designed was the simple “Quem somos” (which stands for “Who are we?” in Portuguese). By using grid display once more, I made it so that images and the text accompanying them were changing sides in each level for aesthetic reasons, but when the screen gets smaller, one of the images have its grid order altered so that the smaller version can have images and texts correctly intercalated in a single column.

### The Files

My website is divided between a main root folder, where all the HTML is stored, and other three folders. The first folder contains all the CSS in a single file called styles.css. I originally intended to separate it between multiple CSS files, but in the end it was easier to make internal categories and just manage them through the collapsable arrows that VS Code provides. The second folder, called img, contains all the pictures and symbols used on the website. The third and last folder contains both Javascript files for the website, the first one called ajax.js, where I wrote the code in jQuery for the dynamically page loading, and the app.js file, where I left the code for the hamburger dropdown menu, the carousel gallery, weather widget and the functions for opening and closing pictures on the gallery. 
