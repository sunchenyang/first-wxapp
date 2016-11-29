exports.createPage = (PageClass) => {
  const page = new PageClass();

  const _onLoad = page.onLoad;
  page.onLoad = function tmp(obj) {
    page.context = this;
     page.page = obj;
    _onLoad.call(page, obj);
  };

  Page(page); // eslint-disable-line new-cap
};
