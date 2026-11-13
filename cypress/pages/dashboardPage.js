class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardGrid: '.orangehrm-dashboard-grid'


        }

        return selectors

    }
checkDashboardPage() {
  const { dashboardGrid } = this.selectorsList();

  cy.get(dashboardGrid, { timeout: 10000 })
    .should("be.visible");

  cy.location("pathname")
    .should("equal", "/web/index.php/dashboard/index");
}




}

export default DashboardPage