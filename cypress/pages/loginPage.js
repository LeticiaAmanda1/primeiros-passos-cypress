
class LoginPage {
  selectorsList() {
    return {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
    }
  }

  accessLoginPage() {
    cy.visit('/web/index.php/auth/login')
  }

  loginWithAnyUser(username, password) {
cy.get(this.selectorsList().usernameField, { timeout: 10000 })
  .should("be.visible")
  .type(username);    cy.get(this.selectorsList().passwordField, { timeout: 10000 })
  .should("be.visible")
  .type(password);
    cy.get(this.selectorsList().loginButton).click()
  }

  checkAcessInvalid() {
  cy.contains("Invalid credentials").should("be.visible");
}
}

export default LoginPage
