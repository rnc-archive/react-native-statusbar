describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('set-hidden-slide'))).toBeVisible();
    await element(by.id('set-hidden-slide')).tap();
  });
});
