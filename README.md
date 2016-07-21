# reg-app - Soluton for Assesment

# Question

REQUIREMENTS:

1. Mandatory form fields (you may decide the input type)

  a. Email
  
  b. Password
  
  c. Name
  
  d. Gender

  e. Date of Birth

  f. Address

  g. Country

  h. Contact Number

2. The following field validations are expected (you may decide how to feedback validation error messages to the user)

  a. Mandatory fields are not to be left blank

  b. Email entered must be valid

  c. Registrant should be at least 18 years old

  d. Contact number should not contain invalid characters

3. Information submitted by this registration form should be sent to the server and displayed on the server console

  a. Suggestion: You may want to display a Thank You page or message to inform the user of a successful form submission.
  
  
# Points to note

1. Do not forget npm init / bower init
  
  When you work in a team, everyone should be aware of the packages that you are using and package.json / bower.json tell them what all packages does this project depend on. 
  
2. Don't forget to add a .gitignore

  Adding unnecessary files to your repo will increase the size of the repo such as node_modules, bower_components, .idea folder etc.
    
    For eg., the `.idea` folder contains meta data related to your project. like.. 
    * data structures to access files quickly & for auto completion
    * local history
    * ... lots of stuff that other's probably don't need!
    
    These will be different for all the people working on the project. And keeping this in repo means you'll have to maintain and merge the changes to files. 
    
    Use any free service to generate a comprehensive gitignore file for you such as https://www.gitignore.io/
  
3. Avoid using variables without declaring them with `var` - it pollutes the global scope (meaning you'll run out of variable names) and is generally considered bad for memory consumption. Believe us, this _WILL_ come to bite you  in production applications!

4. Check empty form submissions. Generally a good practice and shows that you're thorough with your data validation before submitting to an API.

5. Check if data is received on backend as expected and log any error messages for easier debugging. It does not make sense if you only return a 500 error and don't know why it happened. 

6. `npm install` VS `npm install --save`

7. Always display error messages when encountered in catch callbacks on the front end. 

8. Never expose bower.json / package.json. The world doesn't need to know what packages you're using and neither should you tell them. Move `bower.json` out of the `public` directory and add a static path to the `bower_components` folder in express. 

   `app.use('/bower_components', express.static(__dirname + '/bower_components'));`
