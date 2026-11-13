class MyInfoPage {
  selectorsList() {
    return {
      firstNameField: '[name="firstName"]',
      lastNameField: '[name="lastName"]',
      genericField: ".oxd-input",
      submitButton: 'button[type="submit"]',
    };
  }

  fillPersonalDetails(firstName, lastName) {
    const { firstNameField, lastNameField } = this.selectorsList();

    cy.get(firstNameField)
      .should("be.visible")
      .clear()
      .type(firstName);

    cy.get(lastNameField)
      .clear()
      .type(lastName);
  }

 fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, driversLicenseDate, ssnNumber, sinNumber) {
  const { genericField, dateCloseButton } = this.selectorsList();

  cy.get(genericField).eq(4).clear().type(employeeId);
  cy.get(genericField).eq(5).clear().type(otherId);
  cy.get(genericField).eq(6).clear().type(driversLicenseNumber);
  cy.get(genericField).eq(7).clear().type(driversLicenseDate);
  cy.contains("h6", /^Personal Details$/).click();
  // cy.get(genericField).eq(8).clear().type(ssnNumber);
  // cy.get(genericField).eq(9).clear().type(sinNumber);
}

  saveForm() {
    cy.get(this.selectorsList().submitButton)
      .first()
      .click();

    cy.contains(".oxd-toast", "Successfully Updated")
      .should("be.visible");
  }
}

export default MyInfoPage;