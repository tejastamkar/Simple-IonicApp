import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import ExploreContainer from "../components/ExploreContainer";

import { BlogList } from "../components/CardList";

const BlogTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blogs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="text-4xl text-left">
              Blog
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <BlogList />
      </IonContent>
    </IonPage>
  );
};

export default BlogTab;
