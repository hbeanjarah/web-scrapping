import { IonContent, IonItem, IonLabel, IonList, IonText } from "@ionic/react";
import { useEffect, useState } from "react";
import { Employe } from "../service/Employ";
import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const employes = await Employe;
    if (employes) {
      setData(employes);
    }
  };

  return (
    <IonContent>
      <IonList>
        {data.map((el: any, index) => (
          <IonItem key={index}>
            <IonLabel>{el.title}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default ExploreContainer;
