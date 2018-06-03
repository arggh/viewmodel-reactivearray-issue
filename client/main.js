Template.body.helpers({
  items() {
    const arr = new ReactiveArray();
    arr.push('one');
    arr.push('two');
    arr.push('three');
    return arr;
  },
  log(item) {
    return `${JSON.stringify(item)}, `;
  }
});