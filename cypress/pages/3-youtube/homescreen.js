class homescreen {
  //locator
  trendingMenu = "//yt-formatted-string[normalize-space()='Trending']";

  goToTrendingMenu() {
    cy.xpath(this.trendingMenu, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.url().should("contain", "/feed/trending");
  }
}

export default new homescreen();
