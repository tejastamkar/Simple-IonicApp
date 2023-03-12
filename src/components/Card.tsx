import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

interface blogData {
  title: string;
  subtitle: string;
}
interface postData {
  title: string;
  image: string;
}

export const BlogCard: React.FC<blogData> = ({ title, subtitle }) => {
  return (
    <IonCard className="p-4 content-center ">
      <div className="mx-auto px-auto">
        <strong className="text-xl text-white  font-bold">{title}</strong>
      </div>

      <div>{subtitle}</div>
    </IonCard>
  );
};

export const PostCard: React.FC<postData> = ({ title, image }) => {
  return (
    <>
      <IonCard className="p-4 content-center ">
        <img alt={title} src={image} className="pb-1"/>
        <div className="mx-auto px-auto">
          <strong className="text-xl text-white  font-bold">{title}</strong>
        </div>
      </IonCard>
    </>
  );
};
