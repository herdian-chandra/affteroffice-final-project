import homescreen from "../../pages/1-agoda/homescreen";
import flightResults from "../../pages/1-agoda/flight-results";
import bookingDetails from "../../pages/1-agoda/booking-details";
import bookingPayments from "../../pages/1-agoda/booking-payments";

//input
let inputFirstName = "Herdian";
let inputLastName = "Chandra";
let inputEmail = "test12345@gmail.com";
let inputPhoneNumber = "81208120812";
let inputPassportNumber = "12345678";
// let departureArrivalTime = "";
// let totalPrice = "";

describe("Agoda Flight Order", () => {
  beforeEach(() => {
    cy.visit("https://www.agoda.com");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.wait(2000);
  });

  it("Flight order from CGK to SIN", () => {
    //homescreen
    /**
     * 1st way
     */
    // homescreen.clickFlightIcon();
    // homescreen.inputDeparture();
    // homescreen.inputArrival();
    // homescreen.selectDepartureDate();
    // homescreen.searchFlightResult();
    /**
     * 2nd way
     */
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
    bookingDetails.getDepartureArrivalPrice(
      ({ departureArrivalTime, totalPrice }) => {
        departureArrivalTime = departureArrivalTime;
        totalPrice = totalPrice;
        cy.log(`DEPARTURE TIME from TC: ${departureArrivalTime}`);
        cy.log(`TOTAL PRICE from TC: ${totalPrice}`);
      }
    );

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
    // cy.get(departureArrivalTimeAssert)
    //   .should("exist")
    //   .should("have.text", `${departureArrivalTime}`);
    // cy.get(totalPriceAssert)
    //   .should("exist")
    //   .should("have.text", `${totalPrice}`);
  });
});
