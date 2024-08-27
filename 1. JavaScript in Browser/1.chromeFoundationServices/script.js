//CHAPTER-1 CHROME FOUNDATION SERVICES

/* A. CHROME FOUNDATION SERVICES
1. Google Chrome is known for its fast performance, security features, synchronization capabilities, 
   and support for various web standards and technologies. It includes a range of services and 
   features that contribute to its functionality, such as the V8 JavaScript Engine, the Blink
   Rendering Engine, and support for various Web APIs and Extensions.

2. In Google Chrome, the browser architecture is designed in a multi-process model(diffrent tabs), which
   separates different functionalities into distinct processes to enhance security, stability, and 
   performance. Chrome provides different functionalities under Chrome Foundation Services:
     a) Browser Process Services: The browser process is the main process that manages the user interface, 
        handles user input, and coordinates overall browser functionality. It includes the browser's interface
        components like the address bar, tabs, and bookmarks. The browser process also manages other 
        processes, such as render processes, plugin processes, and utility processes.

     b) Render Process Services: Each tab in Google Chrome runs in its own isolated render process. The render
        process is responsible for rendering the web content, running JavaScript, and managing the Document 
        Object Model (DOM) for a specific web page. Isolating each tab into its own render process improves 
        security and stability, as issues in one tab do not affect other tabs or the entire browser. This is
        managed by softwares like Blink and V8 Engines.

     c) Plugin Process Services: Plugin processes are dedicated to handling browser plugins, such as Adobe 
        Flash, PDF viewers, and other multimedia content. The plugin process is separate from the render 
        process and helps ensure that plugin-related activities do not impact the stability and performance 
        of the main render processes.  */