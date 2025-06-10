class bookingPayments {
  //assertion purpose
  departureArrivalTimeAssert =
    "//span[contains(@class,'Typographystyled__TypographyStyled-sc-j18mtu-0 gJitxq kite-js-Typography')]//div[contains(@class,'')]//div[contains(@class,'')]//div[contains(@class,'')]//div[contains(@class,'')]";
  totalPriceAssert =
    "//span[contains(@class,'Spanstyled__SpanStyled-sc-16tp9kb-0 eOJYA-D kite-js-Span')]";

  assertContactDetails(firstname, lastname, email, phoneNumber) {
    cy.wait(5000);
    cy.xpath(
      "//div[@data-component='name-container']//strong[@data-component='name-container-name']",
      { timeout: 30000 }
    )
      .first()
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", `${firstname} ${lastname}`);
    cy.xpath("//span[@data-wl-no-leak-test='true']")
      .first()
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", email);
    cy.xpath("(//span[@data-wl-no-leak-test='true'])[2]")
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", `+62 ${phoneNumber}`);
  }

  assertPassengerDeatails(firstname, lastname, passportNumber) {
    cy.xpath(
      "(//div[@data-component='name-container']//strong[@data-component='name-container-name'])[2]"
    )
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", `${firstname} ${lastname}`);
    cy.xpath("//div[@data-component='passenger-summary-list']//span")
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", `Passport: ${passportNumber}`);
  }

  assertDepartureArrivalTime() {
    cy.xpath(this.departureArrivalTimeAssert)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((actualDepartureArrivalTime) => {
        cy.get("@expectedDepartureArrivalTime").then(
          (expectedDepartureArrivalTime) => {
            expect(actualDepartureArrivalTime.trim()).to.eq(
              expectedDepartureArrivalTime
            );
            cy.log(
              "Actual Departure Arrival Time : " + actualDepartureArrivalTime
            );
          }
        );
      });
  }
  assertTotalPrice() {
    cy.xpath(this.totalPriceAssert)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((actualTotalPrice) => {
        cy.get("@expectedTotalPrice").then((expectedTotalPrice) => {
          expect(actualTotalPrice.trim()).to.eq(expectedTotalPrice);
        });
        cy.log("Actual Total Price : " + actualTotalPrice);
      });
  }
}

export default new bookingPayments();
