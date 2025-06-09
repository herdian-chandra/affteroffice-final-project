class homescreen {
  //locator
  searchColumn = "//*[@id='twotabsearchtextbox']";
  searchBtn = "//input[@id='nav-search-submit-button']";

  searchItem() {
    cy.xpath(this.searchColumn, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .type("chair");
    cy.xpath(this.searchBtn)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.url().should("contain", "https://www.amazon.com/s?k=chair");
  }
}

export default new homescreen();
