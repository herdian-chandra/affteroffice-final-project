class trendingPage {
  //locator
  tabMovies = "//div[@class='yt-tab-shape-wiz__tab' and contains(.,'Movies')]";
  getTrendtingTop3 = "(//div[@id='grid-container']//div[@id='dismissible'])[3]";
  getTheTitle =
    "(//div[@id='grid-container']//div[@id='dismissible'])[3]/*//a[@id='video-title']/yt-formatted-string";
  getYoutubeChannel =
    "(//div[@id='grid-container']//div[@id='dismissible'])[3]/*//div[@id='byline-container']//a";

  goToMoviesTab() {
    cy.xpath(this.tabMovies, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.wait(5000);
    cy.xpath(this.getTrendtingTop3)
      .should("exist")
      .scrollIntoView()
      .should("be.visible");
  }

  getTitleAndYoutubeChannel() {
    cy.xpath(this.getTheTitle)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        let expectedTitleVideo = text.trim();
        cy.wrap(expectedTitleVideo).as("expectedTitleVideo");
        cy.log(
          "================ Expeceted Title Video : " + expectedTitleVideo
        );
      });
    cy.xpath(this.getYoutubeChannel)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        let expectedYoutubeChannel = text.trim();
        cy.wrap(expectedYoutubeChannel).as("expectedYoutubeChannel");
        cy.log(
          "================ Expeceted Youtube Channel : " +
            expectedYoutubeChannel
        );
      });
  }

  clickTop3TrendVideo() {
    cy.xpath(this.getTrendtingTop3)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.url().should("contain", "/watch");
  }
}

export default new trendingPage();
