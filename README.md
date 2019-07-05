# Eventbase - QA Analyst Challenge

Yeah, we are so excited to have you here for this little coding challenge. And before you start getting worried, it's not called a *challenge* because it's difficult. We call it a challenge because we want to challenge you to provide a solution that you feel proud of and reflect the way that you like to develop.

All we want to achieve with this coding challenge is to provide a basis for our conversation with you and get an idea of what the things are that you care about as a QA analyst and how you approach solving problems.

-------

## Objective

Eventbase Foundation QA team creates automated solutions for testing a complex, single page internal application.  
We would like you to build a Cypress.io(https://www.cypress.io/) -based application that would automate the following test cases for *https://giphy.com/* (an application similar in complexity to our platform):  

1. User can create a new account  
2. 'Invalid Email' error prompt appears if user enters an invalid email during login  
3. As a signed in user, I can successfully log out  
4. As a signed in user, I can search for 'Canada' and favourite the #canada image  
5. As a signed in user, I can unfavourite an image from the Favorites Screen (https://giphy.com/favorites)  
6. Webpage sends `'is_public' = false` to backend when toggling from Public to Private channel setting (https://giphy.com/settings)
7. As a signed in user, I can upload an image and create a new giphy image with 'FQA test test' text.  

------

## Important information

* Candidates will have write access to this repository until 12Noon on July 5, 2019 
* Please commit all work to this repo in a way that represents how you would work on a normal task.
* Please fill out the questions below when you've finished.

------

## Post-work Questions

1. What was the biggest challenge?
    
    Answer: 
    
    It is difficult to automate reCAPTCHA, because reCAPTACH will recognize computer is controlled by a computer or human, plus there have visual recognize if reCAPTCHA think machine is controlling(I believe it needs some knowledge of machine learning and data analyst to teach the computer what is it in the photo). 
    Also since I can't handle reCAPTCHA automatically and delete an account(I can delete manually but not automation), that is the main reason I have two exciting file one can execute automatically and others have to manual execute. 

2. What would you have done differently in retrospect?
    
    Answer: 
    
    Every time we finish the exploratory test, Design pattern and data strategy should start for when this project begins (of course define tool for automation should be priority, but Cypress.io being defined at the beginning) instead of writing the automation script after the exploratory test, it cause design and definition of each page object model have a higher uncertainty of editing or modification. Have a good design concept can organize the code but also save lots of time.
     

3. What would you have continued to do if you had more time?
    
    Answer:
    Using page factory can add more function for each page object model is there are new things coming up, also expanding for doing CI/CD, acceptance test and performance test since Cypress.io is relatively new and more function can apply to this test, if there is nothing else can implement, then how to automate reCAPTCHA will be put the last.  

4. Describe some of the primary decisions you made in your implementation.
    
    Answer: 
    
    Page Object Model(POM) is the primary decisions when Test Automation designs their automation script, there have three reasons for design Page Object Model:  
    
    - Maintenance: Who wants to edit or reuse the code can easily to figure out where is the bug and where they can reuse when they doing integration or regression testing
    
    - Reusability: Since each function is aiming to make by doing one acting, so other developers or people who want to maintain the code can reuse and plug into his work than building from scratch.
    
    - Performance: In JAVA there is a concept for Stack Memory and Heap Space, Stack memory is used for executing the thread and Heap Space are allocate memory, when we run the program all the runtime into heap space and local variable been created and store in stack memory. It means when we run the program Heap Space run when the function is calling.    

5. Any specific skills related to development that you didn't get to demonstrate here?  
    
    Answer:
    
    Data Provider - Selenium for JAVA can load the data from excel and execute for doing automation. In Cypress.io, you have to create the JSON file that non-technical people know how to enter the data in JSON file.
    
    Error handling - it always has an exception happen during programming, otherwise, machine cannot recognize the next step. error handling should define not just Hppay Path but also Unhappy Path that it should create instruction for troubleshooting for any potential error happen.


