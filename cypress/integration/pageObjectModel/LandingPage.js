import {AddComputerPage} from "./AddComputerPage";

//<reference type ="cypress" />

export class LandingPage{

        //const addButton = cy.get('')

        constructor(){
            cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Create'])[1]/following::a[1]").should('be.visible');
        }

        clickLoginInMainPage(){
            cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Create'])[1]/following::a[1]").click();
            return new AddComputerPage();

        }



    
}

