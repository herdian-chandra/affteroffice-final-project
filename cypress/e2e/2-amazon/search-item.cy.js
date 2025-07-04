import homescreen from "../../pages/2-amazon/homescreen";
import searchResult from "../../pages/2-amazon/search-result";
import detailProduct from "../../pages/2-amazon/detail-product";

describe("Search item in Amazon", () => {
  beforeEach(() => {
    // cy.visit("https://www.amazon.com");
    const baseUrl = Cypress.env("BASE_URL_AMAZON");
    cy.visit(baseUrl);
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.wait(2000);
  });

  it("As a user, i can search item (chair) in Amazon website", () => {
    //search item
    homescreen.searchItem();

    //get the result of searching
    searchResult.sortingPriceHighToLow();
    searchResult.getTheProductNameAndPrice();

    //go to detail product and do some assertion
    detailProduct.assertNameAndProductPrice();
  });
});
