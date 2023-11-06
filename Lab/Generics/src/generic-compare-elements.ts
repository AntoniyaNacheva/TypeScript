class CompareElements<T> {
  props: T[];

  constructor(props: T[]) {
    this.props = props;
  }

  compare(comparator: T): number {
    let count = 0;

    for (const prop of this.props) {
      if (prop === comparator) {
        count++;
      }
    }
    return count;
  }
}

let c = new CompareElements(["a", "b", "ab", "abc", "cba", "b"]);
console.log(c.compare("b"));

let c1 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

console.log(c1.compare(1));

