class Project {
  budget: number = 900;

  @withBudget(10)
  whiteTest() {
    console.log("Test are important!");
  }

  @withBudget(500)
  fixBugInProduction() {
    console.log("Fixing bug in production is expensive!");
  }
}

const project = new Project();
project.whiteTest();
project.fixBugInProduction();
project.fixBugInProduction();
project.whiteTest();
project.whiteTest();
console.log(project.budget);

type WithBudget = {
  budget: number;
};

function withBudget(actionBudget: number) {
  return function <T extends WithBudget>(
    target: Function,
    context: ClassMethodDecoratorContext<T>
  ) {
    return function (...args: any) {
      const instance = this as T; // T-> our decorated class
      if (instance.budget > actionBudget) {
        instance.budget -= actionBudget;
        target.apply(instance, args); // call our method for instance with args
      } else {
        console.log(
          `Insufficient funds for ${context.name.toString()}. Required ${actionBudget}, available ${
            instance.budget
          }!`
        );
      }
    };
  };
}

// function withBudget<T extends { budget: number }>(
//   target: Function,
//   context: ClassMethodDecoratorContext<T>
// ) {
//   return function (...args: any) {
//     console.log({args});
//   };
//   //   console.log({ target });
//   //   console.log({ context });
// }
