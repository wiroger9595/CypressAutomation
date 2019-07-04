
//load main page
class Header {
    getSignInLink() {
      return cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Create'])[1]/following::a[1]").click();
    }
  }
  
  export default Header;