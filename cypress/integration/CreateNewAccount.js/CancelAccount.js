class CancelAccount{

    clickSettingsForDeleteAccount() {

        const clickSetting = cy.contains('Settings').click({force: true});

        return clickSetting;
    }

    clickDeleteYourAccount() {

        const DeleteYourAccount = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Channel Privacy'])[2]/following::button[1]").click({force: true});

        return DeleteYourAccount;
    }    


    rewritePasswordToDeleteAccount(reTypePassword){
        const deleteByRewirtePassword = cy.get('input[name="password"]').click();
        deleteByRewirtePassword.type(reTypePassword);
        return reTypePassword;
    }   


    clickFinalDeleteAccount() {

        const FinalDeletetAccount = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Cancel'])[1]/following::button[1]").click({force: true});
        return FinalDeletetAccount;
    }


}

export default CancelAccount;