class MyInfoPage {
  selectorsList() {
    return {
      firstNameField: "input.orangehrm-firstname",
      lastNameField: "input.orangehrm-lastname",
      genericField: ".oxd-input",
      submitButton: 'button[type="submit"]',
    };
  }
  fillPersonalDetails(firstName, lastName) {
  const { firstNameField, lastNameField } = this.selectorsList();

  cy.contains("h6", /^Personal Details$/, { timeout: 10000 })
    .should("be.visible");

  cy.get(firstNameField, { timeout: 10000 })
    .should("be.visible")
    .clear()
    .type(firstName);

  cy.get(lastNameField)
    .should("be.visible")
    .clear()
    .type(lastName);
}

  fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, driversLicenseDate) {
    const { genericField } = this.selectorsList();

    cy.get(genericField).eq(4).clear().type(employeeId);
    cy.get(genericField).eq(5).clear().type(otherId);
    cy.get(genericField).eq(6).clear().type(driversLicenseNumber);
    cy.get(genericField).eq(7).clear().type(driversLicenseDate);

    cy.contains("h6", /^Personal Details$/).click();
  }

  saveForm() {
    cy.get(this.selectorsList().submitButton).first().click();

    cy.contains(".oxd-toast", "Successfully Updated")
      .should("be.visible");
  }
}

export default MyInfoPage;