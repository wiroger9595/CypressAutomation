const photo1 = 'Hello.gif'
const photo2 = 'HelloWorld.gif'

cy.fixture(photo1).then(fileContent => {
    cy.get('[data-cy="dropzone"]').upload(
      { fileContent, fileName, mimeType: 'application/json' },
      { subjectType: 'drag-n-drop' },
    );
  });