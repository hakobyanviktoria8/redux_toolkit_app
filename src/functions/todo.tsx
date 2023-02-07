interface Type {
  id: number;
  title: string;
  status: StatusType;
  completed?: Date;
}

enum StatusType {
  active = "active",
  new = "new",
  old = "old",
}

const toDoItems: Type[] = [
  {
    id: 1,
    title: "By coffee",
    status: StatusType.active,
    completed: new Date("02.08.23"),
  },
  { id: 2, title: "By coffee", status: StatusType.new },
];

function toDoFunc(todo: string): Type {
  const id = getNextId(toDoItems);

  const newToDo = {
    id,
    title: todo,
    status: StatusType.old,
  };

  toDoItems.push(newToDo);
  return newToDo;
}

function getNextId<T extends { id: number }>(items: T[]): number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}

const newToDo = toDoFunc("String here");

console.log(JSON.stringify(newToDo));
