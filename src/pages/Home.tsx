import { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import "./Home.css";
import { Todo } from "../types/todo";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((todo) => {
        if (todo.data) {
          setTodos(todo.data);
        }
        console.log(todo.data);
      });
  }, []);
  console.log(todos);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TODO List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">TODO List</IonTitle>
          </IonToolbar>
        </IonHeader>
        {todos.map((todo: Todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
