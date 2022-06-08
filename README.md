
* README - A text file that answers the following questions:
* How does your system work? (if not addressed in comments in source)
  	The system works with a express server that uses a product route which reads the product.json file.
	  When the product route is called a for loop is ran to match the input with matching id and the data is pulled.
* How will your system perform with a 1 product in file? 10 products in file? 100 products in file?
  	They system should fine based on my testings.
* How will your system perform with 100 users? 10000 users? 1000000 users?
  	I think because the request are fairly simple, the system should work fine.
* What documentation, websites, papers, etc did you consult in doing this assignment?
  	To set up the backend, I used https://expressjs.com, for the product controller to read the file to the api I used https://www.geeksforgeeks.org/creating-a-simple-json-based-api-using-node-js. For the frontend I used https://axios-http.com/docs for axios set up and https://reactrouter.com/docs/en/v6/routers/browser-router for react-router-dom.
* How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it and how would you prioritize each item?
  	I think I spent roughly 4 hours build and 6 hours  troubleshooting, catching errors, moving components to better use router-dom. If I had more time I would use it to write a route that also searched for title, design the layout and style more.
* If you were to critique your code, what would you have to say about it?
  I think I could do what I its doing in simpler ways.