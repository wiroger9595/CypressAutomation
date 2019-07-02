it("can receive uncaught exceptions", function(done){
  // turn off all error handling for this test
  Cypress.Errors.onUncaughtException(false)

  // or receive the uncaught exception as a callback
  Cypress.Errors.onUncaughtException(function(err){
    expect(err.message).to.include("foo failed")
    done()
  })

  cy.visit("/some_page_with_a_js_error")
})