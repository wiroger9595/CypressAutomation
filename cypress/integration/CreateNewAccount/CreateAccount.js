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
        const createNewUsername = cy.get('input[name="username"]').clear().click({force: true});
        

        createNewUsername.type(NewUsername);
        return NewUsername;  
    }


    clickNewPassword(NewPassword){
        const createNewPoassword = cy.get('input[name="password"]').clear().click({force: true});
        createNewPoassword.type(NewPassword);
        return NewPassword;  
    }

    //Not working need to confirm
    clickIamNotARobot(){

        // const iframe = $iframe.contents();
        // const inputBox = iframe.find("(.//*[normalize-space(text()) and normalize-space(.)='reCAPTCHA'])[1]/preceding::div[1]");
        // cy.warp(inputBox).type("i am not a robot");
        const IamNotARobot = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='reCAPTCHA'])[1]/preceding::div[1]").click();
        return IamNotARobot;
    }
    
    clickAndCreateSignUp(){
        const CreateBySignUp = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Non-binary'])[1]/following::button[1]").click();
        return CreateBySignUp;         
    }
}

export default CreateAccount;