//checkout cypress/support/commands


class FavoriteFunction {
    

    clickSearchBox() {

      const searchWord = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Log Out'])[1]/following::input[1]").click();
      searchWord.click();
      return searchWord;
    }
   

    writeInSearchBox(typeCanada) {
        const typeSearchBox = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Log Out'])[1]/following::input[1]");
        typeSearchBox.type(typeCanada);
        return typeCanada;
    }
  
    submitSearch(){
        const tconfirmClick = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Favorites'])[1]/following::img[1]").click({force: true});
        return tconfirmClick;
    }

    clickFavoritePicture1(){
        const findPicture1 = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Newest'])[1]/following::div[33]").click({force: true});
        return findPicture1;
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


    
}

export default FavoriteFunction;