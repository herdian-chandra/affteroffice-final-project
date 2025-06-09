class bookingPayments {
  //assertion purpose
  departureArrivalTimeAssert = ".aec39-flex-wrap > :nth-child(1) > .aec39-box";
  totalPriceAssert =
    "[data-component='breakdownlist-3'] > :nth-child(3) > .Descriptionstyled__DescriptionStyled-sc-i382wi-0 > .Spanstyled__SpanStyled-sc-16tp9kb-0";

  assertContactDetails(firstname, lastname, email, phoneNumber) {
    cy.get(":nth-child(2) > .fKqVJP > .lomusm", { timeout: 2000 })
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", `${firstname} ${lastname}`);
    cy.get(":nth-child(2) > .fKqVJP > :nth-child(2) > .sc-hLseeU", {
      timeout: 2000,
    })
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", email);
    cy.get(".fKqVJP > :nth-child(3) > .sc-hLseeU", { timeout: 2000 })
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", `+62 ${phoneNumber}`);
  }

  assertPassengerDeatails(firstname, lastname, passportNumber) {
    cy.get(
      "[data-component='passenger-summary-list'] > .lgAlkE > .fKqVJP > .lomusm",
      { timeout: 2000 }
    )
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", `${firstname} ${lastname}`);
    cy.get(
      "[data-component='passenger-summary-list'] > .lgAlkE > .fKqVJP > div > .sc-hLseeU",
      { timeout: 2000 }
    )
      .should("exist")
      .should("have.text", `Passport: ${passportNumber}`);
  }

  assertDepartureArrivalTime() {}

  assertTotalPrice() {}
}

export default new bookingPayments();
