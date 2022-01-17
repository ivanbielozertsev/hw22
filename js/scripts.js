function counter(number) {
    return {
      increase () {
        return ++number;
      },
      decrease () {
        return --number;
      },
      value () {
        return number;
      },
    };
  }
  
  const result = counter(4);
  console.log(result.increase(), result.decrease(), result.value());
  console.log(result.decrease());
  console.log(result.value())

