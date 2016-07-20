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
  
  when you work in a team, everyone should be aware of the packages that you are using and package.json / bower.json tell them what all packages does this project depend on.
  
2. Don't forget to add a .gitignore

  Adding unnecessary files to your repo will increase the size of the repo
  
  eg. 
    
    .idea contains meta data related to your project. like.. 
    
    data structures to access files quickly
    data structures for auto completion
    local history
    
    These will be different for all the people working on the project. And keeping this in repo means you'll have to maintain and merge the changes to files. 
    
3. Using variables without delaring them using var

4. Check empty form submissions

5. Check if data is recieved on backend as expected

6. npm install vs npm install --save

7. Always display error messages when encountered in catch callbacks

8. Never expose bower.json / package.json 
