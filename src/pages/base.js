import { createPage } from '../utils/index';

export default class Base {
  static newPage() {
    createPage(this);
  }

  onLoad() {
    console.debug('onLoad');
  }

  onReady() {
    console.debug('onReady');
  }

  onShow() {
    console.debug('onShow');
  }

  onHide() {
    console.debug('onHide');
  }

  onUnload() {
    console.debug('onUnload');
  }
}
