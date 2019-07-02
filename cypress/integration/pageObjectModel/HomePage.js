import Header from './Hearder';
import SignInPage from './SignInPage';
import SearchFunction from './SearchFunction';

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
       this.searchFunction = new SearchFunction();

  }

}

export default HomePage;