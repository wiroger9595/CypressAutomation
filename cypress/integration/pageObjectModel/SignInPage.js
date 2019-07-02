

class SignInPage {

  

    visit() {
      cy.visit('/signin');
    }
  
    getEmailError() {
      return cy.get(`[data-testid=SignInEmailError]`);
    }
  
    getPasswordError() {
      return cy.get(`[data-testid=SignInPasswordError]`);
    }
  
    clickLoginButton(){

        
        const mainPageLoginButton = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Create'])[1]/following::a[1]").click();
         //mainPageLoginButton.click();
        return mainPageLoginButton;
    }

    fillEmail(accountName) {
      const field = cy.get('input[name="email"]');
      field.clear();
      field.type(accountName); 
      return accountName;
    }
  
    fillPassword(accountPassword) {
      const field = cy.get('input[name="password"]');
      field.clear();
      field.type(accountPassword);
      
      return accountPassword;
    }
    
    submit() {
      const button = cy.contains('Log in');
      button.click({force: true});
    }
  
    
  }

  
  export default SignInPage;