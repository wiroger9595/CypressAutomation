class SignOutPage {

    clickSignOut(){
        const signOutButton = cy.contains('Log Out');
        signOutButton.click({force: true});
        return signOutButton;
    }

}

export default SignOutPage;