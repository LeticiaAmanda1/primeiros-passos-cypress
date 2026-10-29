describe('Prática com ChatGPT - Login', () => {

    it('deve verificar a mensagem de erro no login', () => {
        cy.visit('/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('senha_incorreta')
        cy.get('[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')




    })


})