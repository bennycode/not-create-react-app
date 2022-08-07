interface Todo {
  id: string;
  isDone: boolean;
  text: string;
}

interface TodoDraft {
  id: string | null;
  value: string;
}
