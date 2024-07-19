// src/data/data.ts
import Facebook from "../app/assets/components/TaskListCard/Facebook.png";
import Telegram from "../app/assets/components/TaskListCard/Telegram.png";
import Youtube from "../app/assets/components/TaskListCard/Youtube.png";

export interface SocialMedia {
  id: number;
  icon: string;
  title: string;
  bonus: number;
}

export const initialData: SocialMedia[] = [
  {
    id: 1,
    icon: Telegram,
    title: "Subscribe to our Telegram channel",
    bonus: 1.50,
  },
  {
    id: 2,
    icon: Facebook,
    title: "Subscribe to our Facebook page",
    bonus: 1.50,
  },
  {
    id: 3,
    icon: Youtube,
    title: "Subscribe to our Youtube page",
    bonus: 1.50,
  },
  {
    id: 4,
    icon: Telegram,
    title: "Subscribe to our Telegram channel",
    bonus: 1.50,
  },
  {
    id: 5,
    icon: Facebook,
    title: "Subscribe to our Facebook page",
    bonus: 1.50,
  },
  {
    id: 6,
    icon: Youtube,
    title: "Subscribe to our Youtube page",
    bonus: 1.50,
  },
];
