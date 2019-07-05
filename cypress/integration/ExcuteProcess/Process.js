import 'cypress-file-upload';
import '@percy/cypress';

import HomePage from "../pageObjectModel/HomePage";
import SignInPage from "../pageObjectModel/SignInPage";
import FavoriteFunction from "../pageObjectModel/FavoriteFunction";
import SettingFunction from "../pageObjectModel/SettingFunction";
import UploadPhoto from "../pageObjectModel/UploadPhoto";
import SignOutPage from "../pageObjectModel/SignOutPage";


var i=0;
for(i = 0;i<30;i++){
describe('automationtest GIPHY ', () => {
    
  const home = new HomePage();



    //Load from SignInPage.js 
    beforeEach('It should able to login', () => {
      //ewrwe
      home.visit('/');
      Cypress.currentTest.retries(2);

      const signINProcess = new SignInPage(); 
      
      //combine five step into one
      signINProcess.processMutiLoginStep();
      cy.wait(500);

      //-----------------------------------------------------------
      // signINProcess.clickLoginButton();
      // signINProcess.fillEmail('wiroger9595@gmail.com');
      // signINProcess.fillPassword('12341234');
      // cy.wait(3000);
      // signINProcess.submit();
      //-------------------------------------------------------------

    });
    
//======================================
    //Load from SearchFunction.js 
    it('Search and found and delete favorite', () => {
          
       const searchAndTestFavorite = new FavoriteFunction();
       Cypress.currentTest.retries(2)

       searchAndTestFavorite.clickSearchBox();
       searchAndTestFavorite.writeInSearchBox(Cypress.env("searchPicture"));
       searchAndTestFavorite.submitSearch();   
       searchAndTestFavorite.clickFavoritePicture1();   
       cy.percySnapshot();
       searchAndTestFavorite.clickFavorite();
       cy.wait(3000);
       searchAndTestFavorite.cancelFavorite();

    });
    //=========================================


     //Load from FavoriteAndSetting.js 
     it('test setting function', () => {
        Cypress.currentTest.retries(2);

        cy.wait(1000);
        const TestingSetting = new SettingFunction();

        
        TestingSetting.clickSetting();
        TestingSetting.changeChannelfromPublicToPrivate();
        TestingSetting.changeChannelfromPrivateToPublic();    
        
        Cypress.currentTest.retries(2);

        cy.percySnapshot();

     });

     it('test upload Photo', () => {

          Cypress.currentTest.retries(2);
          cy.wait(1000);
          cy.percySnapshot();

          const TestingUploadPhoto = new UploadPhoto();
          TestingUploadPhoto.clickUpload();
          cy.wait(3000);
          TestingUploadPhoto.pastePhotoOnURL();
          TestingUploadPhoto.uploadInternetPhoto(Cypress.env("InputURLPhoto"));
          TestingUploadPhoto.writeFQAOnAddTag(Cypress.env("typeFQAtesttest"));
          TestingUploadPhoto.clickUploadTOGIPHY();
          cy.percySnapshot();

     });

     it('sign out account', () => {
      cy.wait(3000);

        Cypress.currentTest.retries(2);
 
        const FinalSignOut = new SignOutPage();
        FinalSignOut.clickSignOut();
        cy.percySnapshot();

     });


  });
};