/// <reference types="cypress" />

describe("Test", () => {
    it("First Test Case", function() {


        cy.visit('https://www.bdjobs.com/');
        cy.wait(5000)
        cy.get('#txtKeyword').type("QA Engineer")
        cy.wait(2000)
        cy.get('select').select('Government')
        cy.wait(2000)
        cy.get('form > .btn').click()
        cy.wait(2000)
        cy.end()






        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })



})