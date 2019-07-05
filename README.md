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
    It is difficult to handle reCAPTCHA, because reCAPTACH are recognized computer is operated by a computer or human, the computer has to answer the right question by selecting the right picture(I believe it needs machine learning and data analyst to teach the computer what is it in the photo). 

    Also since I can't handle reCAPTCHA and delete an account(I can delete manually but not automation), that is the main reason I have two exciting file one can execute automatically and others have to manual execute. 
 

2. What would you have done differently in retrospect?

Answer: 
     I should make a design pattern at the beginning instead of finding the right element at the beginning I will design and define the page object model at the beginning, it will save more time.

3. What would you have continued to do if you had more time?

Answer:
    I would like to use page factory that I might add more function for each page object model is there are new things coming up, also expanding for doing CI/CD, acceptance test and performance test since Cypress.io is relatively new and more function can apply on this test, if there is nothing else I can implement, then I would like to figure out how to automate reCAPTCHA.  

4. Describe some of the primary decisions you made in your implementation.
Answer: Page Object Model(POM) is my primary decisions when I design automation script, main reason for design Page Object Model:
    
Answer:
    - Maintenance: people who want to edit or reuse the code can easily to find out where is the bug and where they can add when they doing integration or regression testing

    - Reusability: since each function is as small as possible, try to make each object doing one acting, so other developers can reuse and plug into his work than building from scratch.

    - Performance: In JAVA there is a concept for Stack Memory and Heap Space, Stack memory is used for executing the thread and Heap Space are allocate memory, when we run the program all the runtime into heap space and local variable been created and store in stack memory. It means when we run the program Heap Space run when the function is calling.  



5. Any specific skills related to development that you didn't get to demonstrate here?
    
Answer:
    Data Provider - Selenium for JAVA can load the data from excel and execute for doing automation. In Cypress.io, you have to create the JSON file that not lots of people(I mean non-technical people) know how to enter the data in JSON file.

    Error handling - it always has an error that I should define not just Hppay Path but also Unhappy Path that I should create instruction for troubleshooting for any potential error will happen.


