class CreateAccount{

    clickCreateAccount(){
        const createNewAccount = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Create'])[1]/following::span[1]").click();
        return createNewAccount;
    }

    clickJoinGIPHY(){
        const joinGIPHY = cy.contains('Join GIPHY!').click();
        return joinGIPHY;    
    }

    clickNewEmailAddress(NewEmail){
        const createNewEmail = cy.get('input[name="email"]').click({force: true});
        createNewEmail.type(NewEmail);
        return NewEmail;  
    }

    clickNewUsername(NewUsername){
        const createNewUsername = cy.get('input[name="username"]').click({force: true});
        createNewUsername.type(NewUsername);
        return NewUsername;  
    }


    clickNewPassword(NewPassword){
        const createNewPoassword = cy.get('input[name="email"]').click({force: true});
        createNewPoassword.type(NewPassword);
        return NewPassword;  
    }

    //Not working need to confirm
    clickIamNotARobot(){
        const IamNotARobot = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='reCAPTCHA'])[1]/preceding::div[1]").click();
        return IamNotARobot;
    }
    
    clickAndCreateSignUp(){
        const CreateBySignUp = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='reCAPTCHA'])[1]/preceding::div[8]").click();
        return CreateBySignUp;    
    }
}

export default CreateAccount;