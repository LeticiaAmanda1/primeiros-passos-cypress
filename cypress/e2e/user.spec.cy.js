import userData from "../fixtures/users/userData.json";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myinfoPage";



const Chance = require('chance')

const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();


describe("Orange HRM Tests", () => {
 

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage();

    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password,
    );

    
    menuPage.accessMyInfo();

   myInfoPage.fillPersonalDetails(chance.first(), chance.last());

  myInfoPage.fillEmployeeDetails(
  "EmployeeId",
  "OtherId",
  "Drivers Number",
  "2025-07-29"
);

 myInfoPage.saveForm();

    
})
})
