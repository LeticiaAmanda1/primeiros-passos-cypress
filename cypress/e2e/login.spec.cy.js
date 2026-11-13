import userData from "../fixtures/users/userData.json";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();







describe("Login orange HRM Tests", () => {
 

  it("Login - Fail", () => {
    loginPage.accessLoginPage();

    
  loginPage.loginWithAnyUser(
    userData.userFail.username,
    userData.userFail.password
  );
  cy.contains("Invalid credentials").should("be.visible");
  })
  
  it('Login - Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
     
  cy.get(".orangehrm-dashboard-grid").should("be.visible");
 });
  })


    
  