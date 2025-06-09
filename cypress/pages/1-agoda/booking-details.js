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
    "(//div[@data-component='breakdownlist-2']//span[@data-component='mob-price-desc-text'])[3]";
  continueToPayment =
    "//div[@data-component='ContinueToPayment']//button/div[contains(.,'Continue to payment')]";
  addOnPremium = '[data-testid="ceg-upsell-select-button-option-PREMIUM"]';
  travelProtection =
    "//div[@aria-label='Travel Protection']/div[contains(.,'thanks')]//img";
  noThanksButton =
    "//div[@datatestid='addon-last-chance-CEG_UPSELL']//button/*//span[contains(.,'No, thanks')]";

  //functions step by step
  inputContactDetails(firstname, lastname, email, phoneNumber) {
    cy.xpath(this.contactFirstname)
      .should("be.visible")
      .clear()
      .type(firstname);
    cy.xpath(this.contactLastname).should("be.visible").clear().type(lastname);
    cy.xpath(this.contactEmail).should("be.visible").clear().type(email);
    cy.xpath(this.contactPhoneNumber)
      .should("be.visible")
      .clear()
      .type(phoneNumber);
  }

  inputPassenger(firstname, lastname, passportNumber) {
    cy.xpath(this.paxGender).check({ force: true }).should("be.checked");
    cy.xpath(this.paxFirstname).should("be.visible").clear().type(firstname);
    cy.xpath(this.paxLastname).should("be.visible").clear().type(lastname);
    cy.xpath(this.paxDobDay).should("be.visible").clear().type("18");
    cy.xpath(this.paxDobMonth).should("be.visible").click();
    cy.xpath(this.paxDobMonthSelected)
      .check({ force: true })
      .should("be.checked");
    cy.xpath(this.paxDobYear).should("be.visible").clear().type("1990");
    cy.xpath(this.paxNationality).should("be.visible").click();
    cy.xpath(this.paxNationalitySearchInput)
      .should("be.visible")
      .clear()
      .type("Indonesia");
    cy.xpath(this.paxNationalitySelected)
      .check({ force: true })
      .should("be.checked");
    cy.wait(5000);
    cy.xpath(this.paxPassportNumber)
      .should("be.visible")
      .clear()
      .type(passportNumber);
    cy.xpath(this.paxPassportCountry).should("be.visible").click();
    cy.xpath(this.paxPassportCountrySearchInput)
      .should("be.visible")
      .clear()
      .type("Indonesia");
    cy.xpath(this.paxPassportCountrySelected)
      .check({ force: true })
      .should("be.checked");
    cy.xpath(this.paxPassportExpDay).should("be.visible").clear().type("18");
    cy.xpath(this.paxPassportExpMonth).should("be.visible").click();
    cy.xpath(this.paxPassportExpMonthSelected)
      .check({ force: true })
      .should("be.checked");
    cy.xpath(this.paxPassportExpYear).should("be.visible").clear().type("2030");
  }

  continueToAddOnsAndPayment() {
    cy.xpath(this.continueAddOnsButton)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.get(this.addOnPremium).click();
    cy.xpath(this.travelProtection).first().should("be.visible").click();
    cy.xpath(this.continueToPayment).should("be.visible").click();
  }

  //we can user callback or promise
  //get the value from object/element/locator and store it into promise
  //after we can use in our testcase
  getDepartureArrivalPrice(callback) {
    cy.xpath(this.getDepartureArrivalTime)
      .invoke("text")
      .then((departureText) => {
        const departureArrivalTime = departureText.trim();
        cy.log(`DEPARTURE TIME: ${departureArrivalTime}`);

        cy.xpath("//div[@data-component='breakdownlist-2']")
          .should("exist")
          .within(() => {
            cy.xpath(
              "//dd[@data-component='mob-flight-price-total-desc']//span[@data-component='mob-price-desc-text']"
            )
              // .eq(2)
              .invoke("text")
              .then((priceText) => {
                const totalPrice = priceText.trim();
                cy.log(`TOTAL PRICE: ${totalPrice}`);

                // Call the callback with both values
                callback({ departureArrivalTime, totalPrice });
              });
          });
      });
    //continue to the next page
    cy.url().should("include", "/bookings/payment");
  }

  //functions contains all step
}

export default new bookingDetails();
