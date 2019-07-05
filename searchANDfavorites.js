

context('Project', () => {
    it('login page', () => {
         cy.visit('https://giphy.com/')
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Create'])[1]/following::a[1]").click()
        cy.get('input[name="email"]').type('wiroger9595@gmail.com')
        cy.get('input[name="password"]').type('12341234')
        //cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='or'])[1]/following::button[1]").click({force: true})
        cy.contains('Log in').click({force: true})
        //cy.wait(60000)
        //cy.title().should('include', 'Account')
        
    //-------------------------------------------
    
    
        //cy.visit('https://giphy.com/')
        cy.get('input[id="search-box"]').click();
        cy.get('input[id="search-box"]').type('canada');
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Log Out'])[1]/following::img[1]").click({force: true})
        cy.wait(300)
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Newest'])[1]/following::div[33]").click({force: true})
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='oh canada'])[1]/following::div[5]").click({force: true})

        //---------------setting and favourite----------------


        cy.wait(5000)
        cy.get('input[id="search-box"]').click();
        cy.contains('Favorites').click({force: true});
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='deal with it'])[1]/following::div[5]").click({force: true})
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Auto Play'])[1]/following::div[12]").click({force: true})
        cy.contains('Settings').click({force: true});
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Public'])[1]/following::button[1]").click({force: true})
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Channel Privacy'])[1]/following::button[1]").click({force: true})
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Create'])[1]/following::span[3]").click({force: true})

        
        //---------------upload photo----------------
    
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Copyright'])[1]/following::span[1]").click({force: true})
        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Upload one or more GIFs'])[1]/following::input[1]").click({force: true})
        
        //upload photo
        

        it("upload photo", () => {
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
        })

        //=======================================


        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Add Tags'])[1]/following::input[1]").type('FQA test test')

        cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='community guidelines'])[1]/following::button[1]").click({force: true})

    
    })
})