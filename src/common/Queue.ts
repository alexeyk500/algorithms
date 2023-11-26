export class Queue<T> {
  values: T[];

  constructor() {
    this.values = [];
  }
  enqueue(item: T) {
    this.values.push(item);
  }
  dequeue() {
    return this.values.shift();
  }
  getValues() {
    return this.values
  }
}
