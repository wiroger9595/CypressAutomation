class FavoriteAndSetting {
    
    
    clickExpandPage() {
        const ExpandPage = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='wibrob'])[1]/following::i[1]").click({force: true});
        return ExpandPage;
    }

    clickFavorite() {

        const clickFavoriteOntheTopRight = cy.contains('Favorites');
        clickFavoriteOntheTopRight.click({force: true});
        return clickFavoriteOntheTopRight;
    }
  
    cancelFavorite(){
        const clickHeartToCancel = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Auto Play'])[1]/following::div[12]").click({force: true});
        return clickHeartToCancel;
    }

    clickSetting() {

        const clickSettingOntheTopRight = cy.contains('Settings').click({force: true});
        return clickSettingOntheTopRight;
    }

    changeChannelfromPublicToPrivate() {

        const clickChannelFromPublicToPrivate = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Public'])[1]/following::button[1]").click({force: true});
        return clickChannelFromPublicToPrivate;
    }

    changeChannelfromPrivateToPublic() {

        const clickChannelFromPrivateToPublic = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Channel Privacy'])[1]/following::button[1]").click({force: true});
        return clickChannelFromPrivateToPublic;
    }

    backToMainPage(){
        const clickLogoBackToMainPage = cy.get('input[css="search-box"]').click({force: true});
        return clickLogoBackToMainPage;
    }
}

export default FavoriteAndSetting;