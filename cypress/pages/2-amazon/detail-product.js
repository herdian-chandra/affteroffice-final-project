class detailProduct {
  //locator
  nameOfProductAssert = "//span[@id='productTitle']";
  priceOfProductAssert =
    "//span[@class='a-price aok-align-center reinventPricePriceToPayMargin priceToPay']//span[@class='a-price-whole']";

  assertNameAndProductPrice() {
    cy.xpath(this.nameOfProductAssert, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((actualName) => {
        cy.get("@expectedProductName").then((expectedName) => {
          expect(actualName.trim()).to.eq(expectedName);
        });
      });
    cy.xpath(this.priceOfProductAssert)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((actualPrice) => {
        cy.get("@expectedProductPrice").then((expectedPrice) => {
          expect(actualPrice.trim()).to.eq(expectedPrice);
        });
      });
  }
}

export default new detailProduct();
