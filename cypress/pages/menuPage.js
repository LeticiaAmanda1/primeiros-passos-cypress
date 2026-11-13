class MenuPage {
  accessMyInfo() {
    cy.contains("a", /^My Info$/, { timeout: 10000 })
      .should("be.visible")
      .click();
  }
}

export default MenuPage;