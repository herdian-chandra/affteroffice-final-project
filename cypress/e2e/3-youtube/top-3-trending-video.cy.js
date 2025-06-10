import homescreen from "../../pages/3-youtube/homescreen";
import trendingPage from "../../pages/3-youtube/trending-page";
import watch from "../../pages/3-youtube/watch";

describe("Top 3 Trending Video on Youtube", () => {
  beforeEach(() => {
    // cy.visit("https://www.youtube.com/feed/trending?hl=en");
    const baseUrl = Cypress.env("BASE_URL_YOUTUBE");
    cy.visit(baseUrl);
    cy.wait(2000);
  });

  it("As a user, i can search top 3 trending video on Youtube", () => {
    //homescreen
    homescreen.goToTrendingMenu();

    //trending page
    trendingPage.goToMoviesTab();
    trendingPage.getTitleAndYoutubeChannel();
    trendingPage.clickTop3TrendVideo();

    //watch assertions
    watch.assertTitleAndYoutubeChannel();
  });
});
