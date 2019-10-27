//this scraping code is taken (scraped hehehe) from https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/

//use this code as a function in the main.js file
// HOW THO?? needs to access puppeteer and cheerio but can't seem to??



function scrape() {

	const puppeteer = require('puppeteer');
	const $ = require('cheerio');
	const url = 'https://www.reddit.com';

	puppeteer
	  .launch()
	  .then(function(browser) {
	    return browser.newPage();
	  })
	  .then(function(page) {
	    return page.goto(url).then(function() {
	      return page.content();
	    });
	  })
	  .then(function(html) {
	    $('h3', html).each(function() {

	      console.log($(this).text());
	    });
	  })
	  .catch(function(err) {
	    //handle error
	  });
}

scrape()