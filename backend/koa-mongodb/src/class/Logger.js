class Logger {
  constructor() {
    this.array = [];
  }

  count() {
    return this.array.length;
  }

  put(element) {
    this.array.push(element);
  }

  take() {
    return this.array.shift();
  }
}

export default Logger;
