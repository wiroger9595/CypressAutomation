
//page object model sign in account 
class SignInPage {

  
    // clickLoginButton(){

        
    //     const mainPageLoginButton = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Create'])[1]/following::a[1]").click();
    //     return mainPageLoginButton;
    // }




    // fillEmail(accountName) {
    //   const field = cy.get('input[name="email"]');
    //   field.clear();
    //   field.type(accountName); 
    //   return accountName;
    // }
  
    // fillPassword(accountPassword) {
    //   const field = cy.get('input[name="password"]');
    //   field.clear();
    //   field.type(accountPassword);
      
    //   return accountPassword;
    // }
    
    // submit() {
      
    // //   const button = cy.get(".button__Button-sc-13ki10z-0 form-components__CTAButton-abosvr-3 login-form__CTAButton-sc-1vrkdbu-2 isXlIN").then(($link) => {
    // //     const linkText = $link.text();
    // //     expect(linkText).iseql('Log in');
    // // });
    //   const button = cy.contains('Log in',{timeour:60000});
    //   button.click({force: true});
    // }
  
    processMutiLoginStep(){
      cy.fixture("GIPHYaccount").as("user");
      cy.get("@user").then((user) => {
        cy.login(user.accountName, user.accountPassword);
      })
    }
    
  }

  
  export default SignInPage;