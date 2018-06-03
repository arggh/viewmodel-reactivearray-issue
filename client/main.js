Template.body.viewmodel({
  items: ['one', 'two', 'three'],

  log(item) {
    return `${JSON.stringify(item)}, `;
  }
});