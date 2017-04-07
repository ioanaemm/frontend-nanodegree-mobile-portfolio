## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>















---------------------

### Optimizations  for index.html :  
* Score for mobile: 90/100 and for desktop: 93/100;
	1. I have changed the src of the img tag from a CDN to the local files and optimized the images;
	1. I’ve added the media tag for “print.css”;
	1. I’ve inlined the css from “style.css”;
	1. I have added async attribute for “analytics.js” and “perfmatters.js “;
	1. I have minified the html using Gulp
	1. I’ve got rid off the Google fonts


2. Optimizations for pizza.html:

- I have inlined the css from “style.css”;
- Using Gulp  I’ve added tasks for compressing and resizing images, minifying html, css and js.
-

 3. Optimizations for main.js:

- I've taken the var scrollMultiplication outside the loop because it didn't change from one iteration of the loop to another
- I have decreased the number of pizzas because they were affecting the website’s performance and not all of them were necesarry;
- I have added a fixed number of pizzas on the screen, regardless of screen width
- I’ve added a percentage for the slider’s width


Steps to see this project:
1. Clone the repository on your local machine;
2. In the terminal change the path to it and then type
```bash
$ python -m SimpleHTTPServer 8080
```
3. Open the browser and visit localhost: 8080;
4. In order to see its score on PageSpeed Insights, you first need to download and install ngrok
5. After that you need to point the terminal to that folder and then type “$ ./ngrok http 8080”
6. Copy the URL ngrok gives you and paste it on PageSpeed Insight

For the other part of this project meaning:  pizza.html
	- to access the page, just click on Cam’s Pizzeria link
	- open up Chrome Dev Tools -> Timeline. Press the record button (located on the top left of the page) scroll the page and then stop the record, in order to see the framerate.
