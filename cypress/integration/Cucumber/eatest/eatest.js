import {Given, And, Then} from "cypress-cucumber-preprocessor"

Given(`visit main website`, () => {

    cy.visit('');
});

Given(`click login link`, () =>{
    cy.contains('').click();

});

Given(`I login account user {string} and {string}`), (userName, password) => {

    cy.get('#UserName').type(userName);
    cy.get('#Password').type(password);

}

Given(`I login account user`, datatable => {
    datatable.hashes.forEach(row)
})