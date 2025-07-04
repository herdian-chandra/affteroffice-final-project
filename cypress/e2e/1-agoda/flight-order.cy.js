import homescreen from "../../pages/1-agoda/homescreen";
import flightResults from "../../pages/1-agoda/flight-results";
import bookingDetails from "../../pages/1-agoda/booking-details";
import bookingPayments from "../../pages/1-agoda/booking-payments";

//testdata
const testData = require("../../utils/test-data-generator");

//input
let inputFirstName = testData.randomFirstName;
let inputLastName = testData.randomLastName;
let inputEmail = testData.randomEmail;
let inputPhoneNumber = "81208120812";
let inputPassportNumber = testData.randomPassportNumber;

describe("Flight Order in Agoda website", () => {
  beforeEach(() => {
    // cy.visit("https://www.agoda.com");
    const baseUrl = Cypress.env("BASE_URL_AGODA");
    cy.visit(baseUrl);
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.wait(2000);
  });

  it("As a user, i can order flight from CGK to SIN", () => {
    //homescreen
    homescreen.searchFlights();

    //select airline
    flightResults.selectAirline();

    //input passenger details
    bookingDetails.inputContactDetails(
      inputFirstName,
      inputLastName,
      inputEmail,
      inputPhoneNumber
    );
    bookingDetails.inputPassenger(
      inputFirstName,
      inputLastName,
      inputPassportNumber
    );
    bookingDetails.continueToAddOnsAndPayment();
    bookingDetails.getDepartureArrivalPrice();

    //payment information detail (assertion)
    bookingPayments.assertContactDetails(
      inputFirstName,
      inputLastName,
      inputEmail,
      inputPhoneNumber
    );
    bookingPayments.assertPassengerDeatails(
      inputFirstName,
      inputLastName,
      inputPassportNumber
    );
    bookingPayments.assertDepartureArrivalTime();
    bookingPayments.assertTotalPrice();
  });
});
