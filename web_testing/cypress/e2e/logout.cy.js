describe('empty spec', () => {
  it('passes', () => {

    // Test Case 1 (Berhasil Masuk sebagai admin dan tampil halaman admin)
    cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')

    cy.get(':nth-child(1) > .form-control').type("rhd")

    cy.get(':nth-child(2) > .form-control').type("raihan123")

    cy.get('.btn').click();

    

    // Test Case 2 (Mengklik Profile Admin)
    cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')

    cy.get(':nth-child(1) > .form-control').type("rhd")

    cy.get(':nth-child(2) > .form-control').type("raihan123")

    cy.get('.btn').click();
    
    cy.get('#navbarDropdown').click();

    // Test case 3 (klik logout)
    cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')

    cy.get(':nth-child(1) > .form-control').type("rhd")

    cy.get(':nth-child(2) > .form-control').type("raihan123")

    cy.get('.btn').click();
    
    cy.get('#navbarDropdown').click();

    cy.get('.dropdown-item').click();


  })
})