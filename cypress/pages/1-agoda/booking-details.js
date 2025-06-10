class bookingDetails {
  //locator
  contactFirstname = "//input[@id='contact.contactFirstName']";
  contactLastname = "//input[@id='contact.contactLastName']";
  contactEmail = "//input[@id='contact.contactEmail']";
  contactPhoneNumber = "//input[@id='contact.contactPhoneNumber']";
  paxGender = "//input[@aria-label='Male']";
  paxFirstname = "//input[@id='flight.forms.i0.units.i0.passengerFirstName']";
  paxLastname = "//input[@id='flight.forms.i0.units.i0.passengerLastName']";
  paxDobDay =
    "//input[@datatestid='flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId']";
  paxDobMonth =
    "//div[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId']//p";
  paxDobMonthSelected = "(//div[@data-testid='floater-container']//input)[1]"; //January
  paxDobYear =
    "//input[@datatestid='flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId']";
  paxNationality =
    "//div[@data-testid='flight.forms.i0.units.i0.passengerNationality']//p";
  paxNationalitySearchInput =
    "//div[@data-testid='floater-container']//input[@placeholder='Search']";
  paxNationalitySelected =
    "//div[@data-testid='floater-container']//input[@type='radio']";
  paxPassportNumber = "//input[@id='flight.forms.i0.units.i0.passportNumber']";
  paxPassportCountry =
    "//div[@data-testid='flight.forms.i0.units.i0.passportCountryOfIssue']//p[contains(.,'Select')]";
  paxPassportCountrySearchInput =
    "//div[@data-testid='floater-container']//input[@placeholder='Search']";
  paxPassportCountrySelected =
    "//div[@data-testid='floater-container']//input[@type='radio']";
  paxPassportExpDay =
    "//input[@datatestid='flight.forms.i0.units.i0.passportExpiryDate-DateInputDataTestId']";
  paxPassportExpMonth =
    "//div[@data-testid='flight.forms.i0.units.i0.passportExpiryDate-MonthInputDataTestId']//p";
  paxPassportExpMonthSelected =
    "(//div[@data-testid='floater-container']//input)[1]"; //January
  paxPassportExpYear =
    "//input[@datatestid='flight.forms.i0.units.i0.passportExpiryDate-YearInputDataTestId']";
  continueAddOnsButton =
    "//div[@data-testid='kite-box']//span[text()='Continue to add-ons ']";
  getDepartureArrivalTime =
    "(//span[@data-testid='mob-flight-slice-departuredate']//div)[4]";
  getTotalPrice =
    "//span[contains(@class,'Spanstyled__SpanStyled-sc-16tp9kb-0 eOJYA-D kite-js-Span')]";
  continueToPayment =
    "//div[@data-component='ContinueToPayment']//button/div[contains(.,'Continue to payment')]";
  addOnPremium = '[data-testid="ceg-upsell-select-button-option-PREMIUM"]';
  travelProtection =
    "//div[@aria-label='Travel Protection']/div[contains(.,'thanks')]//img";
  noThanksButton =
    "//div[@datatestid='addon-last-chance-CEG_UPSELL']//button/*//span[contains(.,'No, thanks')]";

  //functions step by step
  inputContactDetails(firstname, lastname, email, phoneNumber) {
    cy.xpath(this.contactFirstname, { timeout: 3000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type(firstname);
    cy.xpath(this.contactLastname)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type(lastname);
    cy.xpath(this.contactEmail)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type(email);
    cy.xpath(this.contactPhoneNumber)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type(phoneNumber);
  }

  inputPassenger(firstname, lastname, passportNumber) {
    cy.xpath(this.paxGender)
      .should("exist")
      .scrollIntoView()
      .check({ force: true })
      .should("be.checked");
    cy.xpath(this.paxFirstname)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type(firstname);
    cy.xpath(this.paxLastname)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type(lastname);
    cy.xpath(this.paxDobDay)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type("18");
    cy.xpath(this.paxDobMonth)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.xpath(this.paxDobMonthSelected)
      .should("exist")
      .scrollIntoView()
      .check({ force: true })
      .should("be.checked");
    cy.xpath(this.paxDobYear)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type("1990");
    cy.xpath(this.paxNationality)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.xpath(this.paxNationalitySearchInput)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type("Indonesia");
    cy.xpath(this.paxNationalitySelected)
      .should("exist")
      .scrollIntoView()
      .check({ force: true })
      .should("be.checked");
    cy.xpath(this.paxPassportNumber, { timeout: 30000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type(passportNumber);
    cy.xpath(this.paxPassportCountry)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.xpath(this.paxPassportCountrySearchInput)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type("Indonesia");
    cy.xpath(this.paxPassportCountrySelected)
      .should("exist")
      .scrollIntoView()
      .check({ force: true })
      .should("be.checked");
    cy.xpath(this.paxPassportExpDay)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type("18");
    cy.xpath(this.paxPassportExpMonth)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.xpath(this.paxPassportExpMonthSelected)
      .should("exist")
      .scrollIntoView()
      .check({ force: true })
      .should("be.checked");
    cy.xpath(this.paxPassportExpYear)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .clear()
      .type("2030");
  }

  continueToAddOnsAndPayment() {
    cy.xpath(this.continueAddOnsButton)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.get(this.addOnPremium, { timeout: 20000 }).click();
    cy.xpath(this.travelProtection)
      .first()
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.xpath(this.continueToPayment)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
  }

  getDepartureArrivalPrice() {
    cy.xpath(this.getDepartureArrivalTime)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        let expectedDepartureArrivalTime = text.trim();
        cy.wrap(expectedDepartureArrivalTime).as(
          "expectedDepartureArrivalTime"
        );
      });
    cy.xpath(this.getTotalPrice)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        let expectedTotalPrice = text.trim();
        cy.wrap(expectedTotalPrice).as("expectedTotalPrice");
      });
    cy.url().should("include", "/bookings/payment");
  }

  //functions contains all step
}

export default new bookingDetails();
