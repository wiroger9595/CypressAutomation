// import HomePage from "../pageObjectModel/HomePage";
// import SignInPage from "../pageObjectModel/SignInPage";


// describe('Project', () => {

//   const home = new HomePage();


// it("can receive uncaught exceptions", () => {
  

//   home.visit('https://giphy.com/',{ timeout: 60000 });

//       const signINProcess = new SignInPage(); 
//       signINProcess.clickLoginButton();
//       signINProcess.fillEmail('wiroger9898@gmail.com');
//       signINProcess.fillPassword('12341234');
//       cy.wait(3000);

//       signINProcess.submit();
      
//       cy.wait(5000);
  
//   // turn off all error handling for this test
//   Cypress.Errors.onUncaughtException(false)

//   // or receive the uncaught exception as a callback
//   Cypress.Errors.onUncaughtException(function(err){
//     expect(err.message).to.include("foo failed")
//     done()
//   });

//   cy.visit('https://giphy.com/');
// });

// });

class InvalidEmail{

  typeInvalidEmail(wrongEmailFormat){
      const notValidEmail = cy.get('input[name="email"]').click();
      notValidEmail.type(wrongEmailFormat);
      return wrongEmailFormat;

      
  }

  clearInvalidEmail(){
      const deleteTheField = cy.get('input[name="email"]').click();

      deleteTheField.clear();
      return deleteTheField;
  }

}

export default InvalidEmail;