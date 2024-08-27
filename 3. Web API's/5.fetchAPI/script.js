//CHAPTER-6 FETCH API

/* A. WHAT IS FETCH API?
  1. The Fetch API is a modern interface for making HTTP requests in JavaScript. It provides a more
     powerful and flexible feature set compared to older methods like XMLHttpRequest. 
     
  2. Functionalities of Fetch API:
      - Retrieve data from a server (GET requests)
      - Send data to a server (POST, PUT, DELETE requests)
      - Update parts of a web page without reloading the entire page (AJAX-like functionality)
      - Interact with various web services and APIs
      
  3. The fetch() function returns a Promise that resolves to a Response Object. This Response object 
     represents the response to the request.

  4. The fetch() function typically takes two arguments:
      - A string containing the URL of the resource you want to fetch Or a Request Object.
      - An options object that lets you control various settings of the request.

  5. The primary argument to fetch() is the URL of the resource you want to fetch. This URL specifies
     where the request should go. The request goes to the server specified in the URL provided to 
     fetch(). This is not necessarily the same server that hosts your website. 
     
  6. fetch() returns a Promise that resolves to a Response object representing the response to the 
     request. This Promise is the start of the chain.

  7. The first then() is called on the Promise returned by fetch(). It takes a function as an argument.
     This function receives the Response Object as its parameter. As we know then() returns a Promise,
     so the next then() is called on the Promise returned by the first then(). The second then() takes 
     a function as an argument. This function receives the JSON File as its argument, which is here 
     logged to the console.
     
  8. The second argument of fetch() is an optional configuration object that allows you to customize the
     request. This object can have several properties to control various aspects of the HTTP request.
     
  9. Let's go through the most common properties with an easy example:
     - method: The HTTP method to use (GET, POST, PUT, DELETE, etc.)
     - headers: Any headers you want to add to the request
     - body: The body of the request (for POST or PUT requests)
     - mode: The mode of the request (cors, no-cors, same-origin)
     - credentials: Should cookies be included with the request? (omit, same-origin, include)
     */


  
  //Example-1
  let p = fetch("https://goweather.herokuapp.com/weather/Delhi").then((responseObject) => {
    console.log(responseObject.status);
    console.log(responseObject.ok);
    console.log(responseObject.headers);
    return responseObject.json()
  }).then((file) => {
    console.log(file)
  });
  
  //Example-2
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
   
    },
    body: JSON.stringify({
        id: 101,
        title: 'foo',
        body: 'bar',
        userId: 1
    }),
  };

  fetch('https://jsonplaceholder.typicode.com/posts' , options)
    .then((response) => response.json())
    .then((json) => console.log(json));


  //Example-3
  let wrapped = async () =>{
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    };

    let p = await fetch('https://jsonplaceholder.typicode.com/posts' , options)
    let response = await p.json()
    return response
  }

  const getTodo = async (id) => {
     let response = await fetch('https://jsoplaceholder.typicode.com/posts/' + id)
     let r = await response.json(id)
     return r
  }

   const main = async () =>{
     let todo ={
       title: 'foo',
       body: 'bar',
       userId: 1
     }
     let todos  = await createTodo(todo);
     console.log(todos);
     console.log(getTodo(1))
   }

   main();