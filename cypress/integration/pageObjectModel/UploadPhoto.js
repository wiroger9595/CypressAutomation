class UploadPhoto{


    clickUpload() {

        const clickUploadPhotoOnMianPage = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Copyright'])[1]/following::span[1]").click({force: true});
        return clickUploadPhotoOnMianPage;
    }
    //================================ upload from internet ========================================
    pastePhotoOnURL(){
        const clickCopyAndPasteAnyGifUrl = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='COPY AND PASTE ANY GIF URL'])[1]/following::input[1]").click({force: true});
                                                    
        return clickCopyAndPasteAnyGifUrl;
    }


    uploadInternetPhoto(InputURLPhoto){
        const phototFromInternet = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='COPY AND PASTE ANY GIF URL'])[1]/following::input[1]").click({force: true});
        phototFromInternet.type(InputURLPhoto);
        return InputURLPhoto;
    }



    //================================ upload from local ========================================
    clickBrowseYourFiles(){
        const clickBrowseYourFilesOnMidLeft = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Upload one or more GIFs'])[1]/following::input[1]").click({force: true})
        return clickBrowseYourFilesOnMidLeft;
    }
    
    
    uploadLocalPhoto(){
            const uploadPhotoFromLocalDrive = cy.fixture('Hello.gif', 'base64').then(fileContent =>{
            
                cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Upload one or more GIFs'])[1]/following::input[1]").upload({
                fileContent,
                fileName: 'Hello.png',
                mimeType: 'image/gif'           
            },
            {
                uploadType: 'input'
            }
            
            )
            });
            
            return uploadPhotoFromLocalDrive;
    }

    writeFQAOnAddTag(typeFQAtesttest){
        const writeFQATestTestOnAddTag = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Add Tags'])[1]/following::input[1]").click();
        writeFQATestTestOnAddTag.type('FQA test test');
        return typeFQAtesttest;
    }

    clickUploadTOGIPHY(){
        const clickUploadTOGIPHYWebsite = cy.xpath("(.//*[normalize-space(text()) and normalize-space(.)='community guidelines'])[1]/following::button[1]").click({force: true});
        return clickUploadTOGIPHYWebsite;
    }    

}

export default UploadPhoto;