type TaskFactory = {
  name: string;
  level: "low" | "medium" | "complicated";
};

class EmployeeFactory {
  @withTaskFactory({ name: "Task1", level: "complicated" })
  task: TaskFactory[] = [];

  @withComplicatedTask()
  extraTasks: TaskFactory[] = [];
}

const employeeFactory = new EmployeeFactory();
console.log(employeeFactory);

function withTaskFactory(task: TaskFactory) {
  return function <T, V extends TaskFactory[]>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (args: V) {
      args.push(task);
      return args;
    };
  };
}

function withComplicatedTask() {
  return withTaskFactory({ name: "Some other Task", level: "complicated" });
}
