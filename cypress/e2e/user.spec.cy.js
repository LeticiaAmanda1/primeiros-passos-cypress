

import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    wrongCredentialAlert: "[role='alert']",
    myinfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input--active',
    dateCloseButton: '.--close',
    submitButton: ".orangehrm-left-space"
  }

  it('User Info Update - Success', () => {

    // Login
    loginPage.acessLoginPage()

    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    )

    dashboardPage.checkDashboardPage()



    cy.get(selectorsList.myinfoButton).click()
    cy.get(selectorsList.firstNameField, { timeout: 15000 })
      .should('be.visible')
      .and('not.have.value', '')

    cy.get(selectorsList.firstNameField)
      .clear()
      .type('FirstNameTest')

    cy.get(selectorsList.lastNameField)
      .should('be.visible')
      .clear()
      .type('LastNameTest')

    cy.contains('.oxd-input-group', 'Employee Id')
      .find('input')
      .clear()
      .type('QA123456')

    cy.contains('.oxd-input-group', 'Other Id')
      .find('input')
      .clear()
      .type('OtherIdTest')

    cy.contains('.oxd-input-group', "Driver's License Number")
      .find('input')
      .clear()
      .type('DL123456')

    cy.contains('.oxd-input-group', 'License Expiry Date')
      .find('input')
      .clear({ force: true })
      .type('2030-15-06', { force: true })
      .blur()

    cy.contains('label', 'Employee Full Name').click()

    
    cy.get(selectorsList.firstNameField)
      .closest('form')
      .find('button[type="submit"]')
      .click()

    cy.contains('Successfully Updated', { timeout: 15000 })
      .should('be.visible')


    cy.get(selectorsList.firstNameField)
      .closest('form')
      .find('button[type="submit"]')
      .click()

    cy.contains('Successfully Updated', { timeout: 15000 })
      .should('be.visible')
  })

  it('Login - Fail', () => {
    loginPage.acessLoginPage()

    loginPage.loginWithAnyUser(
      userData.userFail.username,
      userData.userFail.password
    )

    cy.get(selectorsList.wrongCredentialAlert)
      .should('be.visible')
  }) 
}) 