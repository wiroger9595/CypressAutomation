import 'cypress-file-upload';
import '@percy/cypress';

import HomePage from "../pageObjectModel/HomePage";
import InvalidEmail from "../CreateNewAccount/InvalidEmail"
import CreateAccount from "../CreateNewAccount/CreateAccount";
import CancelAccount from "../CreateNewAccount/CancelAccount";

describe('automationtest create and cancel account GIPHY ', () => {
    
    const home = new HomePage();
     beforeEach('Create New Account', () => {
      
      home.visit('/');
      const doCreateNewAccount = new CreateAccount();
      const typeNotVaildEmailAccount = new InvalidEmail();
      
      //write invalid email
      doCreateNewAccount.clickCreateAccount();
      doCreateNewAccount.clickJoinGIPHY();
      typeNotVaildEmailAccount.typeInvalidEmail(Cypress.env("notValidEmail"));
      doCreateNewAccount.clickNewUsername((Cypress.env("NewUsername")));
      doCreateNewAccount.clickNewPassword((Cypress.env("NewPassword")));
      cy.percySnapshot();

      //write valid email
      cy.wait(2000);
      typeNotVaildEmailAccount.clearInvalidEmail();
      
      cy.window().should('have.length',3);

      doCreateNewAccount.clickNewEmailAddress(Cypress.env("NewEmail"));
      cy.pause();
      //I am not a robot not working
      //doCreateNewAccount.clickIamNotARobot();
      cy.wait(3000);
      doCreateNewAccount.clickAndCreateSignUp();

    });


    it('delete the account' , () => {

      const doCancelAccount = new CancelAccount();
      doCancelAccount.clickSettingsForDeleteAccount();
      doCancelAccount.clickDeleteYourAccount();
      doCancelAccount.rewritePasswordToDeleteAccount((Cypress.env("reTypePassword")));
      //doCancelAccount.clickFinalDeleteAccount();
    

    }); 

});