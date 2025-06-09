class homescreen {
  //locator
  flightIcon = "//h6[contains(.,'Flights')]";
  flyingFromInput = "//input[@placeholder='Flying from']";
  cgk = "//span[contains(.,'Soekarno-Hatta International Airport')]";
  flyingToInput = "//input[@placeholder='Flying to']";
  sin = "//span[contains(.,'Singapore Changi Airport')]";
  flightOccupancy = "//div[@class='FlightSearchOccupancy']";
  SearchFlightButton = "//span[text()='SEARCH FLIGHTS']";

  //functions step by step
  clickFlightIcon() {
    cy.xpath(this.flightIcon).should("be.visible").click();
  }

  inputDeparture() {
    cy.xpath(this.flyingFromInput).should("be.visible").clear().type("cgk");
    cy.xpath(this.cgk).should("be.visible").click();
  }

  inputArrival() {
    cy.xpath(this.flyingToInput).should("be.visible").clear().type("singapore");
    cy.xpath(this.sin).should("be.visible").click();
  }

  selectDepartureDate() {
    // Calculate tomorrow's date
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const targetDay = tomorrow.getDate();
    cy.xpath(
      `(//div[contains(@class, 'PriceSurgePicker-Day')]//span[text()='${targetDay}'])[1]`
    )
      .should("be.visible")
      .click();
  }

  searchFlightResult() {
    cy.xpath(this.flightOccupancy).should("be.visible").click();
    cy.xpath(this.SearchFlightButton).should("be.visible").click();
    cy.wait(1000);
    cy.url().should("include", "/flights/results");
  }

  //functions contains all step
  searchFlights() {
    this.clickFlightIcon();
    this.inputDeparture();
    this.inputArrival();
    this.selectDepartureDate();
    this.searchFlightResult();
  }
}

export default new homescreen();
