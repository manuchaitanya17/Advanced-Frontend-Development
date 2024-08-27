//CHAPTER-4 BROWSER INITAILSATION PROCESS 

/* A. BROWSER INITIALISTAION PROCESS
  1. When we open a web browser, it initializes a new browser window or tab. During this initialization 
     process, the browser creates the necessary objects and constructs the environment for rendering web 
     content. This process is performed by Blink Engine. Here are few things that happen during browser 
     initialization. 

  2. Creation of BOM Objects: As part of the browser environment setup, BOM objects are created. These 
     objects include, window, naviagtor, location, document, and other objects. Once created, BOM objects 
     remain available throughout the browser session. They persist as long as the browser window or tab is 
     open. When you close the browser window or tab, the BOM objects are destroyed along with the browser 
     session. It's important to note that BOM objects are not tied to specific websites or web pages. They 
     exist at the browser level and are accessible to JavaScript code running within any web page loaded in 
     the browser.

  3. Parsing and Rendering Default Browser's Homepage: When a browser is opened or a new tab is created, it 
     begins by parsing the HTML content of the default or user-specified home page. This process involves 
     interpreting the HTML markup, constructing the DOM (Document Object Model) tree, and determining the 
     render tree, which represents the visual layout of the page.

  4. User Interface Initialization: Alongside the rendering process, the browser initializes its user
     interface components, such as the address bar, toolbar, menu options, tabs, and other browser-specific 
     features. This ensures that the browser's interface is responsive and functional for user interaction.

  5. Networking and Security Setup: The browser establishes network connections with remote servers to fetch 
     resources, including HTTPS connections for secure communication. It may also perform security checks, 
     such as verifying SSL certificates and enforcing content security policies, to protect against security 
     threats and ensure safe browsing.

   6. Browser Extensions and Plugins: If installed, browser extensions and plugins are loaded and initialized 
      during startup. These extensions may add additional functionality, modify the browser's behavior, or 
      interact with web pages through content scripts and APIs. */


