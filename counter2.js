var createCounter = function (init) {
  let count = init;
  let obj = {
    increment() {
      return (init += 1);
    },
    decrement() {
      return (init -= 1);
    },
    reset() {
      return (init = count);
    },
  };
  return obj;
};

// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
