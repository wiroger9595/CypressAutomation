import HomePage from "./pageObjectModel/HomePage";
import CreateAccount from "./CreateNewAccount.js/CreateAccount";
import CancelAccount from "./CreateNewAccount.js/CancelAccount";

describe('automationtest create and cancel account GIPHY ', () => {
    
    const home = new HomePage();
     beforeEach('Create New Account', () => {

      home.visit('https://giphy.com/');
      const doCreateNewAccount = new CreateAccount();
      doCreateNewAccount.clickCreateAccount();
      doCreateNewAccount.clickJoinGIPHY();
      doCreateNewAccount.clickNewEmailAddress('coolman5858@gmail.com');
      doCreateNewAccount.clickNewUsername('niceTOlearn987987');
      doCreateNewAccount.clickNewPassword('12341234');
      //I am not a robot not working
      doCreateNewAccount.clickIamNotARobot();
      doCreateNewAccount.clickAndCreateSignUp();
    });


    it('delete the account' , () => {

      const doCancelAccount = new CancelAccount();
      doCancelAccount.clickSettingsForDeleteAccount();
      doCancelAccount.clickDeleteYourAccount();
      doCancelAccount.rewritePasswordToDeleteAccount('12341234');
      doCancelAccount.clickFinalDeleteAccount();
    }); 

});