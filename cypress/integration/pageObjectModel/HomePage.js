import Header from './Hearder';
import SignInPage from './SignInPage';
import FavoriteFunction from './FavoriteFunction';

class HomePage {
  constructor() {
    this.header = new Header();
  }
  
  visit(StartNewWeb) {
    cy.visit(StartNewWeb);
    return StartNewWeb;
  }
  
   //======================constructure==========================
  
   getUserAvatar() {
    return cy.get(`[data-testid=UserAvatar]`);
  }
  
  // goToSignIn() {
  //   const link = this.header.getSignInLink();
  //   link.click();

  //   const signIn = new SignInPage();
  //   return signIn;
  // }

  goToSearch(){
       this.FavoriteFunction = new FavoriteFunction();

  }

}

export default HomePage;