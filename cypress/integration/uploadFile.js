context('Project', () => {
    it('Go to home page', () => {
        cy.visit('https://giphy.com/')
    })
    
    it("upload photo", () => {
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Copyright'])[1]/following::span[1]").click({force: true})
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Upload one or more GIFs'])[1]/following::input[1]").click({force: true})
        
        //upload photo
        

        
            cy.fixture('Hello.gif', 'base64').then(fileContent =>{
                cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Upload one or more GIFs'])[1]/following::input[1]").upload({
                fileContent,
                fileName: 'Hello.png',
                mimeType: 'image/gif'            
            },
            {
                uploadType: 'input'
            }
            
            )
            })
        

        //=======================================


        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Add Tags'])[1]/following::input[1]").click({force: true}).type('FQA test test')

        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='community guidelines'])[1]/following::button[1]").click({force: true})

    })
    

})
