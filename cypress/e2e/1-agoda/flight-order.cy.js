//input
let inputFirstName = "Herdian";
let inputLastName = "Chandra";
let inputEmail = "test12345@gmail.com";
let inputPhoneNumber = "81208120812";
let inputPassportNumber = "12345678";
let departureArrivalTime = "";
let totalPrice = "";

//locator
let flightIcon = "//h6[contains(.,'Flights')]";
let flyingFromInput = "//input[@placeholder='Flying from']";
let cgk = "//span[contains(.,'Soekarno-Hatta International Airport')]";
let flyingToInput = "//input[@placeholder='Flying to']";
let sin = "//span[contains(.,'Singapore Changi Airport')]";
let flightOccupancy = "//div[@class='FlightSearchOccupancy']";
let SearchFlightButton = "//span[text()='SEARCH FLIGHTS']";
let showAllAirlineButton =
  "//button[@role='button' and contains(.,'Show all')]";
let batikAirMalaysiaCheckbox =
  "//label[@data-element-value='Batik Air (Malaysia)']//input[@type='checkbox']";
let selectFlight3 = "(//div[@data-testid='web-refresh-flights-card'])[1]";
let selectFlightButton =
  "(//div[@data-testid='web-refresh-flights-card'])[1]//button[@data-component='flight-card-bookButton']//span[contains(.,'Select')]";
let contactFirstname = "//input[@id='contact.contactFirstName']";
let contactLastname = "//input[@id='contact.contactLastName']";
let contactEmail = "//input[@id='contact.contactEmail']";
let contactPhoneNumber = "//input[@id='contact.contactPhoneNumber']";
let paxGender = "//input[@aria-label='Male']";
let paxFirstname = "//input[@id='flight.forms.i0.units.i0.passengerFirstName']";
let paxLastname = "//input[@id='flight.forms.i0.units.i0.passengerLastName']";
let paxDobDay =
  "//input[@datatestid='flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId']";
let paxDobMonth =
  "//div[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId']//p";
let paxDobMonthSelected = "(//div[@data-testid='floater-container']//input)[1]"; //January
let paxDobYear =
  "//input[@datatestid='flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId']";
let paxNationality =
  "//div[@data-testid='flight.forms.i0.units.i0.passengerNationality']//p";
let paxNationalitySearchInput =
  "//div[@data-testid='floater-container']//input[@placeholder='Search']";
let paxNationalitySelected =
  "//div[@data-testid='floater-container']//input[@type='radio']";
let paxPassportNumber =
  "//input[@id='flight.forms.i0.units.i0.passportNumber']";
let paxPassportCountry =
  "//div[@data-testid='flight.forms.i0.units.i0.passportCountryOfIssue']//p[contains(.,'Select')]";
let paxPassportCountrySearchInput =
  "//div[@data-testid='floater-container']//input[@placeholder='Search']";
let paxPassportCountrySelected =
  "//div[@data-testid='floater-container']//input[@type='radio']";
let paxPassportExpDay =
  "//input[@datatestid='flight.forms.i0.units.i0.passportExpiryDate-DateInputDataTestId']";
let paxPassportExpMonth =
  "//div[@data-testid='flight.forms.i0.units.i0.passportExpiryDate-MonthInputDataTestId']//p";
let paxPassportExpMonthSelected =
  "(//div[@data-testid='floater-container']//input)[1]"; //January
let paxPassportExpYear =
  "//input[@datatestid='flight.forms.i0.units.i0.passportExpiryDate-YearInputDataTestId']";
let continueAddOnsButton =
  "//div[@data-testid='kite-box']//span[text()='Continue to add-ons ']";
let getDepartureArrivalTime =
  "(//span[@data-testid='mob-flight-slice-departuredate']//div)[4]";
let getTotalPrice =
  "(//div[@data-component='breakdownlist-2']//span[@data-component='mob-price-desc-text'])[3]";
let continueToPayment =
  "//div[@data-component='ContinueToPayment']//button/div[contains(.,'Continue to payment')]";
let noThanksButton =
  "//div[@datatestid='addon-last-chance-CEG_UPSELL']//button/*//span[contains(.,'No, thanks')]";

//assertion purpose
let paymentInfoContactName =
  "(//strong[@data-component='name-container-name'])[1]";
let paymentInfoContactEmail =
  "(//div[@data-component='name-container-detail']/span)[1]"; //hardcode
let paymentInfoContactPhoneNumber =
  "(//div[@data-component='name-container-detail']/span)[2]"; //hardcode
let payementInfoPaxName =
  "//div[@data-component='passenger-summary-list']//strong";
let payementInfoPaxPassportNumber =
  "//div[@data-component='passenger-summary-list']//span";
let departureArrivalTimeAssert =
  "(//span[@data-testid='mob-flight-slice-departuredate']//div)[4]";
let totalPriceAssert =
  "(//div[@data-component='breakdownlist-2']//span[contains(.,'Rp ')])[4]";

describe("Agoda Flight Order", () => {
  beforeEach(() => {
    cy.visit("https://www.agoda.com");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.wait(2000);
  });

  it("Flight order from CGK to SIN", () => {
    //click flight icon
    cy.xpath(flightIcon).should("be.visible").click();
    //input departure-arrivals date
    cy.xpath(flyingFromInput).should("be.visible").clear().type("cgk");
    cy.xpath(cgk).should("be.visible").click();
    cy.xpath(flyingToInput).should("be.visible").clear().type("singapore");
    cy.xpath(sin).should("be.visible").click();
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
    cy.xpath(flightOccupancy).should("be.visible").click();
    cy.xpath(SearchFlightButton).should("be.visible").click();
    cy.wait(1000);
    //select airline
    cy.xpath(showAllAirlineButton).should("be.visible").click();
    cy.xpath(batikAirMalaysiaCheckbox).click();
    cy.wait(1000);
    cy.xpath(selectFlight3).should("be.visible").click();
    cy.wait(1000);
    cy.xpath(selectFlightButton)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    //input passenger details
    cy.xpath(contactFirstname)
      .should("be.visible")
      .clear()
      .type(inputFirstName);
    cy.xpath(contactLastname).should("be.visible").clear().type(inputLastName);
    cy.xpath(contactEmail).should("be.visible").clear().type(inputEmail);
    cy.xpath(contactPhoneNumber)
      .should("be.visible")
      .clear()
      .type(inputPhoneNumber);
    cy.xpath(paxGender).check({ force: true }).should("be.checked");
    cy.xpath(paxFirstname).should("be.visible").clear().type(inputFirstName);
    cy.xpath(paxLastname).should("be.visible").clear().type(inputLastName);
    cy.xpath(paxDobDay).should("be.visible").clear().type("18");
    cy.xpath(paxDobMonth).should("be.visible").click();
    cy.xpath(paxDobMonthSelected).check({ force: true }).should("be.checked");
    cy.xpath(paxDobYear).should("be.visible").clear().type("1990");
    cy.xpath(paxNationality).should("be.visible").click();
    cy.xpath(paxNationalitySearchInput)
      .should("be.visible")
      .clear()
      .type("Indonesia");
    cy.wait(1000);
    cy.xpath(paxNationalitySelected)
      .check({ force: true })
      .should("be.checked");
    cy.wait(5000);
    cy.xpath(paxPassportNumber)
      .should("be.visible")
      .clear()
      .type(inputPassportNumber);
    cy.xpath(paxPassportCountry).should("be.visible").click();
    cy.xpath(paxPassportCountrySearchInput)
      .should("be.visible")
      .clear()
      .type("Indonesia");
    cy.wait(1000);
    cy.xpath(paxPassportCountrySelected)
      .check({ force: true })
      .should("be.checked");
    cy.xpath(paxPassportExpDay).should("be.visible").clear().type("18");
    cy.xpath(paxPassportExpMonth).should("be.visible").click();
    cy.xpath(paxPassportExpMonthSelected)
      .check({ force: true })
      .should("be.checked");
    cy.xpath(paxPassportExpYear).should("be.visible").clear().type("2030");
    cy.xpath(getDepartureArrivalTime)
      .invoke("text")
      .then((text) => {
        departureArrivalTime = text.trim();
        cy.log(`departureArrivalTime is: ${departureArrivalTime}`);
      });
    cy.xpath("//div[@data-component='breakdownlist-2']")
      .should("exist")
      .within(() => {
        cy.xpath(".//span[@data-component='mob-price-desc-text']")
          .eq(2) // index ke-3 = eq(2) karena 0-based
          .invoke("text")
          .then((text) => {
            totalPrice = text.trim();
            cy.log(`total Price is : ${totalPrice}`);
          });
      });
    cy.xpath(continueAddOnsButton).should("be.visible").click({ force: true });
    cy.xpath(continueToPayment).should("be.visible").click();
    cy.xpath(noThanksButton).click({ force: true });
    cy.wait(3000);
    //assertion in payment information detail
    cy.xpath(paymentInfoContactName).should(
      "have.text",
      `${inputFirstName} ${inputLastName}`
    );
    cy.xpath(paymentInfoContactEmail).should("have.text", `${inputEmail}`);
    cy.xpath(paymentInfoContactPhoneNumber).should(
      "have.text",
      `+62 ${inputPhoneNumber}`
    );
    cy.xpath(payementInfoPaxName).should(
      "have.text",
      `${inputFirstName} ${inputLastName}`
    );
    cy.xpath(payementInfoPaxPassportNumber).should(
      "have.text",
      `Passport: ${inputPassportNumber}`
    );
    cy.xpath(departureArrivalTimeAssert).should(
      "have.text",
      `${departureArrivalTime}`
    );
    cy.xpath(totalPriceAssert).should("have.text", `${totalPrice}`);
  });
});
