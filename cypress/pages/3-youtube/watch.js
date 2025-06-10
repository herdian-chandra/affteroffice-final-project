class watch {
  //locator
  titleVideo = "//div[@id='title']/yt-formatted-string";
  youtubeChannel =
    "//div[@id='upload-info']//ytd-channel-name[@id='channel-name']//a";

  assertTitleAndYoutubeChannel() {
    cy.xpath(this.titleVideo, { timeout: 5000 })
      .should("exist")
      .scrollIntoView()
      .invoke("text")
      .then((actualTitleVideo) => {
        cy.get("@expectedTitleVideo").then((expectedTitleVideo) => {
          expect(actualTitleVideo.trim()).to.eq(expectedTitleVideo);
        });
      });

    cy.xpath(this.youtubeChannel)
      .should("exist")
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((actualYoutubeChannel) => {
        cy.get("@expectedYoutubeChannel").then((expectedYoutubeChannel) => {
          expect(actualYoutubeChannel.trim()).to.eq(expectedYoutubeChannel);
        });
      });
  }
}

export default new watch();
