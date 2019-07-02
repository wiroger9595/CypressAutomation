
// context('Project login', () => {
//     it('login page', () => {
//         cy.visit('https://giphy.com/')
//         cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Create'])[1]/following::a[1]").click()
//         cy.get('input[name="email"]').type('wiroger9595@gmail.com')
//         cy.get('input[name="password"]').type('12341234')
//         cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='or'])[1]/following::button[1]").click()
//         cy.title().should('include', 'My Account')
//     })
// })

 import { LandingPage } from "./LandingPage";


export class AddComputerPage{
    constructor(){
        cy.contains('Log in').should('be.visible');

        
    }

    performLogin(){
        cy.get('input[name="email"]').type('wiroger9595@gmail.com');
        cy.get('input[name="password"]').type('12341234');
        return this;
    }

    confirmLoginButton(){
        cy.contains('Log in').click({force: true})
        return new LandingPage();
    }

}