type UUID = string;

export type Todo = {
  userId: number;
  id: number | UUID;
  title: string;
  completed: boolean;
};
