function ConsoleLog(print: string) {
  return (target: object, key?: any, descriptor?: any) => {
    const originMethod = descriptor.value;
    descriptor.value = (...args: any[]) => {
      console.log(print);
      return originMethod.call(this, ...args);
    };
    return descriptor;
  };
}

class DecoratorTest {
  @ConsoleLog('first')
  @ConsoleLog('second')
  test() {
    console.log('run test');
  }
}

const dt = new DecoratorTest();
dt.test();
