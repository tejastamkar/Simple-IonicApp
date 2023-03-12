import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
// import { logoIonic } from 'ionicons/icons';
import { IonReactRouter } from "@ionic/react-router";
import { cafeOutline, personOutline, skullOutline } from "ionicons/icons";
import Posts from "./pages/PostTab";
import BlogTab from "./pages/BlogTab";
import User from "./pages/Profile";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
/* Tailwind styles */
import "./theme/tailwind.css";
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Posts">
            <Posts />
          </Route>
          <Route exact path="/Blogs">
            <BlogTab />
          </Route>
          <Route path="/Profile">
            <User />
          </Route>
          <Route exact path="/">
            <Redirect to="/Posts" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/Posts">
            <IonIcon aria-hidden="true" icon={skullOutline} />
            <IonLabel>Posts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/Blogs">
            <IonIcon aria-hidden="true" icon={cafeOutline} />
            <IonLabel>Blog</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/Profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
