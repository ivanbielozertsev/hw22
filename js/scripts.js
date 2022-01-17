function counter(number) {
    return {
      increase () {
        return number += 1;
      },
      decrease () {
        return number -= 1;
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

