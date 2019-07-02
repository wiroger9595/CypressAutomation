
import HomePage from "./pageObjectModel/HomePage";
import SignInPage from "./pageObjectModel/SignInPage";
import SearchFunction from "./pageObjectModel/SearchFunction";
import FavoriteAndSetting from "./pageObjectModel/FavoriteAndSetting";
import UploadPhoto from "./pageObjectModel/UploadPhoto";


describe('automationtest GIPHY ', () => {
    
  const home = new HomePage();



    //Load from SignInPage.js 
    beforeEach('It should able to login', () => {
      //ewrwe
      home.visit('https://giphy.com/',{ timeout: 6000000 });

      const signINProcess = new SignInPage(); 
      signINProcess.clickLoginButton();
      signINProcess.fillEmail('wiroger9595@gmail.com');
      signINProcess.fillPassword('12341234');
      cy.wait(3000);

      signINProcess.submit();
      
      cy.wait(5000);
    });
    
//======================================
    //Load from SearchFunction.js 
    it('Search and found favorite', () => {
          

      
       const searchBox = new SearchFunction();
      
       searchBox.clickSearchBox();
       searchBox.writeInSearchBox('canada');
       searchBox.submitSearch();   
       searchBox.clickFavoritePicture1();       
//==============================///////

          


    });
    //=========================================


     //Load from FavoriteAndSetting.js 
     it('test favorite and setting function', () => {

        const TestingFavoriteAndSetting = new FavoriteAndSetting();
        //home.visit('https://giphy.com/channel/wibrob');    

        TestingFavoriteAndSetting.clickFavorite();
        cy.wait(3000);
        TestingFavoriteAndSetting.cancelFavorite();
        TestingFavoriteAndSetting.clickSetting();
        TestingFavoriteAndSetting.changeChannelfromPublicToPrivate();
        TestingFavoriteAndSetting.changeChannelfromPrivateToPublic();    
        //TestingFavoriteAndSetting.backToMainPage();
      
     });

     it('test upload Photo', () => {

        
          //adfadsf
        const TestingUploadPhoto = new UploadPhoto();
          TestingUploadPhoto.clickUpload();
          cy.wait(3000);
          TestingUploadPhoto.pastePhotoOnURL();
          TestingUploadPhoto.uploadInternetPhoto('https://media1.giphy.com/media/3o85xt08p2Y0hanhwQ/source.gif');
          TestingUploadPhoto.writeFQAOnAddTag('FQA test test');
          TestingUploadPhoto.clickUploadTOGIPHY();

     });



  });