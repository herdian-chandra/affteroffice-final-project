class flightResutls {
  //locator
  showAllAirlineButton = "//button[@role='button' and contains(.,'Show all')]";
  batikAirMalaysiaCheckbox =
    "//label[@data-element-value='Batik Air (Malaysia)']//input[@type='checkbox']";
  selectFlight = "(//div[@data-testid='web-refresh-flights-card'])[1]";
  selectFlightButton =
    "(//div[@data-testid='web-refresh-flights-card'])[1]//button[@data-component='flight-card-bookButton']//span[contains(.,'Select')]";

  //funtion step by step
  selectAirline() {
    cy.xpath(this.showAllAirlineButton, { timeout: 10000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.xpath(this.batikAirMalaysiaCheckbox, { timeout: 10000 })
      .should("exist")
      .scrollIntoView()
      .click();
    cy.wait(3000);
    cy.xpath(this.selectFlight, { timeout: 10000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.wait(3000);
    cy.xpath(this.selectFlightButton, { timeout: 10000 })
      .should("exist")
      .scrollIntoView()
      .click({ force: true });
    cy.url().should("include", "/bookings/details", { timeout: 10000 });
  }
}

export default new flightResutls();
