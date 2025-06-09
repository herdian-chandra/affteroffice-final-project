class searchResult {
  //locator
  searchColumn = "//*[@id='twotabsearchtextbox']";
  searchBtn = "//input[@id='nav-search-submit-button']";
  sortDropdown = "//span[@class='a-dropdown-prompt']";
  priceHighToLow = "//a[@id='s-result-sort-select_2']";
  getTheChair = "(//div[@role='listitem'])[5]"; //paling kanan baris 1
  getTheNameOfChair = "(//div[@role='listitem'])[5]//h2";
  getThePriceOfChair =
    "(//div[@role='listitem'])[5]//*//span[@class='a-price-whole']";

  sortingPriceHighToLow() {
    cy.xpath(this.sortDropdown, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.xpath(this.priceHighToLow)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
  }

  getTheProductNameAndPrice() {
    cy.xpath(this.getTheChair) //get the chair
      .should("exist")
      .scrollIntoView()
      .should("be.visible");
    cy.xpath(this.getTheNameOfChair)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        let nameOfProduct = text.trim();
        cy.wrap(nameOfProduct).as("expectedProductName");
        cy.log("get product name : " + nameOfProduct);
      });
    cy.xpath(this.getThePriceOfChair)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        let priceOfProduct = text.trim();
        cy.wrap(priceOfProduct).as("expectedProductPrice");
        cy.log("get price product : " + priceOfProduct);
      });
    cy.xpath(this.getTheChair)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
  }
}

export default new searchResult();
