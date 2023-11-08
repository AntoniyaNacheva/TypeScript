class Example {
  @validateParams
  someMethod(arg1?: string, arg2?: number) {
    console.log(`Received params: ${arg1}, ${arg2}`);
  }
}

function validateParams<T>(
  target: Function,
  context: ClassMethodDecoratorContext<T>
) {
  return function (...args: any) {
    // console.log({ args });

    for (let i = 0; i < args.length; i++) {
      const currentArg = args[i];
      if (currentArg === undefined || currentArg === null) {
        throw new Error(`Parameter at index ${i} is invalid!`);
      }
      target.apply(this, args);
    }
  };
}

const exampleInstance = new Example();
exampleInstance.someMethod("Hi", null);
