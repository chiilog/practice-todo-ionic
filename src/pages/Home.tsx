import { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
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
        <IonList>
          {todos.map((todo: Todo) => (
            <IonItemSliding key={todo.id}>
              <IonItemOptions side="start">
                <IonItemOption color="success" expandable>
                  Complete
                </IonItemOption>
              </IonItemOptions>
              <IonItem>
                <IonLabel className="ion-text-wrap">{todo.title}</IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption color="danger" expandable>
                  Delete
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
