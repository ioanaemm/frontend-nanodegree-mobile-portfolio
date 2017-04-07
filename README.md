## Steps to see this project:
1. Clone the repository on your local machine;
   In the terminal change the path to it and then type
```bash
$ python -m SimpleHTTPServer 8080
```
1. Open the browser and visit localhost: 8080;
1. In order to see its score on PageSpeed Insights, you first need to download and install ngrok
1. After that you need to point the terminal to that folder and then type “$ ./ngrok http 8080”
1. Copy the URL ngrok gives you and paste it on PageSpeed Insight
1. For pizza.html:
	- to access the page, just click on Cam’s Pizzeria link
	- open up Chrome Dev Tools -> Timeline. Press the record button (located on the top left of the page) scroll the page and then stop the record, in order to see the framerate.


--------------

### Optimizations  for index.html :  
- Score for mobile: 90/100 and for desktop: 93/100;
	# I have changed the src of the img tag from a CDN to the local files and optimized the images;
	* I’ve added the media tag for “print.css”;
	* I’ve inlined the css from “style.css”;
	* I have added async attribute for “analytics.js” and “perfmatters.js “;
	* I have minified the html using Gulp
	* I’ve got rid off the Google fonts


2. Optimizations for pizza.html:

- I have inlined the css from “style.css”;
- Using Gulp  I’ve added tasks for compressing and resizing images, minifying html, css and js.
-

 3. Optimizations for main.js:

- I've taken the var scrollMultiplication outside the loop because it didn't change from one iteration of the loop to another
- I have decreased the number of pizzas because they were affecting the website’s performance and not all of them were necesarry;
- I have added a fixed number of pizzas on the screen, regardless of screen width
- I’ve added a percentage for the slider’s width
