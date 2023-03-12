import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Lottie from "lottie-react";
import hiDragon from "../assets/hidragon.json";
import rock from "../assets/rock.json";
import { useState } from "react";



const Profile: React.FC = () => {
  const [animation, setanimation] = useState(false);

  const ChangeAni = () => {
    setanimation(!animation);
    console.log(animation);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="text-center text-3xl font-black">
          <p className="mb-5">
            Welcome To <strong className="text-purple-700">Rexis</strong>
          </p>
          <p>
            First <strong className="text-teal-200">Ionic </strong>App
          </p>
        </div>
        <div className="mx-auto pt-10 w-80">
          <Lottie animationData={animation ? rock : hiDragon} loop={true} />
        </div>
        <div className="mt-20  mx-4">
          <IonButton
            expand="block"
            shape="round"
            onClick={() => ChangeAni()}
            color={animation ? "primary" : "secondary"}
          >
            Rock me
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
