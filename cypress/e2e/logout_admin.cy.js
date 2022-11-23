//type definition for Cypress object 'cy'
/// <reference types="cypress" />

describe("Testing the application", function() {
  it("should login with username and password", function() {

      // visit the lambdageeks page
      cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')

      cy.get(':nth-child(1) > .form-control').type('rhd')

      cy.get(':nth-child(2) > .form-control').type('raihan123')

      cy.get('.btn').click()

      cy.get('#navbarDropdown').click()

      cy.get('.dropdown-item').click()
  });
});