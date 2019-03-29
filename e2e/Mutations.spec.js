describe('Should mutate status bar state with no crashes', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should hide statusbar (slide)', async () => {
    await expect(element(by.id('set-hidden-slide'))).toBeVisible();
    await element(by.id('set-hidden-slide')).tap();
  });

  it('Should make statusbar visible (fade)', async () => {
    await expect(element(by.id('set-visible-fade'))).toBeVisible();
    await element(by.id('set-visible-fade')).tap();
  });

  it('Should set light-content statusbar style', async () => {
    await expect(element(by.id('set-light-style'))).toBeVisible();
    await element(by.id('set-light-style')).tap();
  });

  it('Should set default statusbar style', async () => {
    await expect(element(by.id('set-default-style'))).toBeVisible();
    await element(by.id('set-default-style')).tap();
  });

  it('Should set network visibility - hidden', async () => {
    await expect(element(by.id('set-network-hidden'))).toBeVisible();
    await element(by.id('set-network-hidden')).tap();
  });

  it('Should set network visibility - visible', async () => {
    await expect(element(by.id('set-network-visible'))).toBeVisible();
    await element(by.id('set-network-visible')).tap();
  });
});
