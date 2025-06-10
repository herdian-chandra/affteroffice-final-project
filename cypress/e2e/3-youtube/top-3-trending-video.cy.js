//locator
let trendingMenu = "//yt-formatted-string[normalize-space()='Trending']";
let tabMovies =
  "//div[@class='yt-tab-shape-wiz__tab' and contains(.,'Movies')]";
let getTrendtingTop3 =
  "(//div[@id='grid-container']//div[@id='dismissible'])[3]";
let getTheTitle =
  "(//div[@id='grid-container']//div[@id='dismissible'])[3]/*//a[@id='video-title']/yt-formatted-string";
let getYoutubeChannel =
  "(//div[@id='grid-container']//div[@id='dismissible'])[3]/*//div[@id='byline-container']//a";
let titleVideo = "//div[@id='title']/yt-formatted-string";
let youtubeChannel =
  "//div[@id='upload-info']//ytd-channel-name[@id='channel-name']//a";

describe("Top 3 Trending Video on Youtube", () => {
  beforeEach(() => {
    cy.visit("https://www.youtube.com");
    cy.wait(2000);
  });

  it("As a user, i can search top 3 trending video on Youtube", () => {
    //homescreen
    cy.xpath(trendingMenu, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.url().should("contain", "/feed/trending");

    //trending page
    cy.xpath(tabMovies, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.xpath(getTrendtingTop3)
      .should("exist")
      .scrollIntoView()
      .should("be.visible");
    //get the title of top 3 video and youtube channel name
    cy.xpath(getTheTitle)
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
    cy.xpath(getYoutubeChannel)
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
    cy.xpath(getTrendtingTop3)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.url().should("contain", "/watch");

    //watch assertions
    cy.xpath(titleVideo, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .invoke("text")
      .then((actualTitleVideo) => {
        cy.get("@expectedTitleVideo").then((expectedTitleVideo) => {
          expect(actualTitleVideo.trim()).to.eq(expectedTitleVideo);
        });
      });

    cy.xpath(youtubeChannel)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((actualYoutubeChannel) => {
        cy.get("@expectedYoutubeChannel").then((expectedYoutubeChannel) => {
          expect(actualYoutubeChannel.trim()).to.eq(expectedYoutubeChannel);
        });
      });
  });
});
