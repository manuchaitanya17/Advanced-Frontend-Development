//CHAPTER-5 BRWOSER RENDERING ENGINE 


/* A. BROWSER RENDERING ENGINE- https://www.sumondey.com/what-happens-behind-the-scenes-when-a-browser-renders-a-webpage/

  1. In web browsers, the rendering engine is the component responsible for INTERPRETING HTML and CSS, 
     rendering the content, and displaying it on the screen. 
  2. The rendering engine parses the HTML and constructs the Document Object Model (DOM), which represents
     the structure of the webpage.
  3. It also parses CSS, applies styles to the elements, and generates the final layout that is displayed 
     to the user. It also handles tasks such as painting, compositing, and managing elements such as text,
     images, and interactive elements.
  4. The rendering engine used by Google Chrome is called Blink. It was forked from the WebKit Engine.
     WebKit itself is a rendering engine that was originally developed by Apple for its Safari browser. Blink
     was created by Google as a separate project from WebKit, and it is currently used not only in Google 
     Chrome but also in other Chromium-based browsers.
  5. Blink has been designed to provide fast and efficient rendering capabilities, allowing for a smooth
     browsing experience and support for the latest web standards and technologies. It is a key component in 
     the Chromium project, which serves as the foundation for several popular web browsers, including Google 
     Chrome, Microsoft Edge, and Opera.

  6. How Browser Rendering Engine works internally to render the web pages:

     a) The HTML file sent by the remote server or local storage in bytes is in “binary format”. It is a text
        file having the response-header message as “Content-Type” with value “text/html; charset=UTF-8”. This
        value tells the browser that the file is a Media Type (formerly MIME Type (Multi-purpose Internet 
        Mail Extensions))” HTML document with character encoding set to the Unicode-based UTF-8 format. 

     b) The browser engine then converts the received raw bytes of the file data into characters (using the 
        defined character encoding) which in turn is converted into tokens which are then converted to 
        nodes. These tokens are essentially specific units that represent the different elements and 
        components of the web page. They are created during the lexical analysis phase of the rendering 
        process. These tokens are generated during the parsing phase and are used to construct the Document
        Object Model (DOM) and the CSS Object Model (CSSOM).
        Here's how some of the common tokens might look: 
        - Start tag token:<html>, <body>
        - End tag token: </html>, </body>
        - Attribute token: id="example", class="container" h1
        - Selector token: h1, .container, #example
        - Property token: color, font-size, background
        - Value token: red, 14px, url('example.jpg')


     c) When the browser reads an HTML document and the tokenization process is complete, it converts all 
        the HTML elements (e.g. in our document – html, head, body, title, link, body, div, h1, label, 
        input, button) into individual JavaScript objects called “Nodes” from different predefined 
        JavaScript classes (constructor functions). Different DOM nodes have different properties. For 
        instance, an element node corresponding to tag <a> has link-related properties, and the one 
        corresponding to <input> has input-related properties. Each DOM node belongs to a corresponding 
        built-in JavaScript class and all the classes of DOM nodes form a single hierarchy. The root of 
        the hierarchy is the built-in, abstract “EventTarget” root class, which is inherited by the built-in
        “Node” class and all the other DOM Nodes inherit from this “Node” class. Some examples of these 
        other built-in classes are HTMLHeadElement (for <head>), HTMLBodyElement (for <body>), 
        HTMLDivElement (for <div>), HTMLInputElement (for <input>), HTMLLabelElement (for <label>), 
        HTMLButtonElement (for <button>) etc.

     d) After the node objects are created, the browser creates the below tree-like hierarchy (known as DOM
        Tree) with the node objects to efficiently render and manage the document. The DOM Tree is created 
        not only for the HTML elements but also for comments, attributes, text present in the HTML document 
        but as separate nodes. For our
        sample HTML document, the DOM Tree looks like: Refer nodeHirerachy.png.

     e) After creating the DOM, the browser then starts reading the CSS file(s) and creates another tree 
        hierarchy which is called CSSOM (CSS Object Model). In the CSSOM, again nodes are created and each 
        node contains style information for the target DOM elements, specified by the attached CSS selector.
        By default, the browsers have a parent stylesheet (known as User Agent Stylesheet) which provides 
        default values for most of the CSS properties (if any property is not defined by the browser, then 
        it follows the W3C CSS standard). The values for these properties get
        overridden by that of the CSS specified by us.

     f) After the browser finishes creating the DOM and CSSOM, it starts creating another tree, called the 
        “Render Tree”, by combining the DOM tree and the CSSOM tree. It creates this tree to I) CALCULATE 
        THE LAYOUT OF VISIBLE ELEMENTS and II) TO EVENTUALLY PAINT THEM ON WINDOW SCREEN by placing the 
        nodes and their children nodes (which should be visible) in a pixel matrix. 
        Note: Nodes having the property “display:none;” will not be present in the Render Tree and nodes 
        having the property “visibility:hidden;” will be present in the Render Tree though it won’t be 
        visible on the screen.

     g) Once the render tree is constructed, the browser executes any JavaScript code using V8 Engine 
        present in the web page initialising the Host Enviornment. This code can manipulate the DOM, change
        styles, and perform various actions, potentially triggering additional changes to the render tree or
        causing reflows and repaints. We will deep dive in other section.

     h) At first, the browser performs the “Browser Reflow” process for each node present in the Render Tree 
        by calculating its layout information and creating the layout for that node. This layout information
        consists of each node’s size/dimension (in pixels) and the screen position at which it will be 
        printed. This reflow process can get triggered when we manipilate using JS like:
        - Insert, remove, update an element in the DOM
        - Move or animate a DOM element 
        - Modify some content in the document
        - Change a CSS style or className of an element
        - Add or remove a stylesheet
        - Scroll or resize a window

     i) The browser then creates bitmap images (called “Layers”) for the elements in the Render Tree which 
        helps it to paint the elements in the correct specific stack order (along the z-axis) in the screen 
        throughout the lifecycle of the webpage rendering. For each layer, the browser fills the individual
        pixels for the visible elements using the same or different threads (a process which is called 
        “Rasterization”). The layers are then combined and painted one by one on the screen by the browser.
        The browsers then send these layer sequence, by breaking them into different individual tiles, to 
        the CPU (or GPU) to draw them on the screen. This process is known as the “Compositing Operation”.

  7. When some characters or the entire HTML document becomes available to the browser, it starts parsing 
     the HTML source code from the top, starts creating the DOM tree incrementally with one node at a time, 
     and starts printing them on the screen. If the browser encounters an external resource e.g. a script 
     file (via <script> tag), a stylesheet file (via <link> tag) or an image file (via <img> tag), it starts 
     to download that resource in the background. Apart from the script files, none of the other files will 
     block the creation of the DOM tree. */