//locator
let searchColumn = "//*[@id='twotabsearchtextbox']";
let searchBtn = "//input[@id='nav-search-submit-button']";
let sortDropdown = "//span[@class='a-dropdown-prompt']";
let priceHighToLow = "//a[@id='s-result-sort-select_2']";
let getTheChair = "(//div[@role='listitem'])[5]"; //paling kanan baris 1
//still hardcode
let getTheNameOfChair = "(//div[@role='listitem'])[5]//h2";
let getThePriceOfChair =
  "(//div[@role='listitem'])[5]//*//span[@class='a-price-whole']";
//assertions
let nameOfProductAssert = "//span[@id='productTitle']";
let priceOfProductAssert =
  "//span[@class='a-price aok-align-center reinventPricePriceToPayMargin priceToPay']//span[@class='a-price-whole']";

describe("Search item in Amazon", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com");
    // cy.on("uncaught:exception", (err, runnable) => {
    //   return false;
    // });
    cy.wait(2000);
  });

  it("As a user, i can search item (chair) in Amazon website", () => {
    //search item
    cy.xpath(searchColumn, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .type("chair");
    cy.xpath(searchBtn)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.url().should("contain", "https://www.amazon.com/s?k=chair");

    //get the result of searching
    cy.xpath(sortDropdown, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.xpath(priceHighToLow)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.xpath(getTheChair) //get the chair
      .should("exist")
      .scrollIntoView()
      .should("be.visible");
    /**
     * do get value of product name and price of product
     * */
    cy.xpath(getTheNameOfChair)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        let nameOfProduct = text.trim();
        cy.wrap(nameOfProduct).as("expectedProductName");
        cy.log("get product name : " + nameOfProduct);
      });
    cy.xpath(getThePriceOfChair)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        let priceOfProduct = text.trim();
        cy.wrap(priceOfProduct).as("expectedProductPrice");
        cy.log("get price product : " + priceOfProduct);
      });
    cy.xpath(getTheChair)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();

    //go to detail product and do some assertion
    //still not yet do assertion
    cy.xpath(nameOfProductAssert, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((actualName) => {
        cy.get("@expectedProductName").then((expectedName) => {
          expect(actualName.trim()).to.eq(expectedName);
        });
      });
    cy.xpath(priceOfProductAssert)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((actualPrice) => {
        cy.get("@expectedProductPrice").then((expectedPrice) => {
          expect(actualPrice.trim()).to.eq(expectedPrice);
        });
      });
  });
});
