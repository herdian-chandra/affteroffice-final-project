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
    cy.xpath(this.showAllAirlineButton).should("be.visible").click();
    cy.xpath(this.batikAirMalaysiaCheckbox).click();
    cy.wait(1000);
    cy.xpath(this.selectFlight).should("be.visible").click();
    cy.wait(1000);
    cy.xpath(this.selectFlightButton)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.url().should("include", "/bookings/details");
  }
}

export default new flightResutls();
