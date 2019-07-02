class SearchFunction {
    
    // constructor() {
    //     this.searchFunction = new SearchFunction();
    //   }
    

    clickSearchBox() {

      const searchWord = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Log Out'])[1]/following::input[1]").click();
      
      return searchWord;
    }
  
    writeInSearchBox(typeCanada) {
        const typeSearchBox = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Log Out'])[1]/following::input[1]");
        typeSearchBox.type(typeCanada);
        return typeCanada;
    }
  
    submitSearch(){
        //const confirmClick = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Log In'])[1]/following::img[1]").click({force: true});
        const tconfirmClick = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Favorites'])[1]/following::img[1]").click({force: true});
        return tconfirmClick;
    }

    clickFavoritePicture1(){
        const findPicture1 = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Newest'])[1]/following::div[33]").click({force: true});
        return findPicture1;
    }
    // clickFavoritePicture2(){
    //     const findPicture2 = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='oh canada'])[1]/following::div[5]").click({force: true})
    //     return findPicture2;
    // }
}

export default SearchFunction;