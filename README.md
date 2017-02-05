# Express App Start with Passport Local Authentication

This is a minimal Node.js Express Web Application Starter, with local passport authentication.  
Helpful in situations where you want to start an quick web application.

### Running the application

0. Configure the MongoDB server url at `config/database.js`  
1. Use `npm start` to run the server.
2. Point your browser to http://localhost:3000 to view the application.


### Customizing the app name  

- The app name is configured via views  
- Find the `header.ejs` file in `views/partials` folder.
- Change the first line to your liking. (`<% title='Sample Application'%>`)
