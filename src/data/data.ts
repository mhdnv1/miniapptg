import Facebook from "../app/assets/components/TaskListCard/Facebook.png";
import Telegram from "../app/assets/components/TaskListCard/Telegram.png";
import Youtube from "../app/assets/components/TaskListCard/Youtube.png";
// store card
import one from '../app/assets/components/StoreCard/1.png'
import two from '../app/assets/components/StoreCard/2.png'
import three from '../app/assets/components/StoreCard/3.png'
import four from '../app/assets/components/StoreCard/4.png'
import five from '../app/assets/components/StoreCard/5.png'
import six from '../app/assets/components/StoreCard/6.png'
// market card
import imageOneMarket from '../app/assets/components/Market/1.png'
import imageOneOneMarket from '../app/assets/components/Market/1.1.png'
import imageTwoMarket from '../app/assets/components/Market/2.png'
import imageTwoTwoMarket from '../app/assets/components/Market/2.2.png'


export interface SocialMedia {
  id: number;
  icon: string;
  title: string;
  bonus: number;
}
export interface FriendCardProps {
  iconName:string,
  huamnName:string,
  bonus:number,
  bonusFriend:number
}

interface StoreCardProps {
  lvl: string;
  image: string;
  title: string;
  volume: number;
  bonus: number | "Purchased";
}

interface MarketCardProps {
  lvl: string;
  image: string;
  imageTwo: string;
  title: string;
  volume: number;
  bonus: number | "upgrade to sell";
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

export const initialDataFriends:FriendCardProps[] = [
  {
    iconName:"🐟",
    huamnName:"Granny Ann",
    bonus:12.50,
    bonusFriend:1.50
  },
  {
    iconName:"🦈",
    huamnName:"Carrie Ann",
    bonus:12.20,
    bonusFriend:0.50
  },
  {
    iconName:"🐚",
    huamnName:"Josh Mike",
    bonus:5.60,
    bonusFriend:0.50
  },
  
] 

export const initialStore:StoreCardProps[]=[
  {
    lvl:"1 lvl.",
    image:one,
    title:"Cup",
    volume:250,
    bonus:'Purchased'
  },
  {
    lvl:"2 lvl.",
    image:two,
    title:"Glass",
    volume:350,
    bonus:3.40
  },
  {
    lvl:"3 lvl.",
    image:three,
    title:"Bottle",
    volume:450,
    bonus:5.50
  },
  {
    lvl:"4 lvl.",
    image:four,
    title:"Big bottle",
    volume:650,
    bonus:9.99
  },
  {
    lvl:"5 lvl.",
    image:five,
    title:"lalala",
    volume:450,
    bonus:5.50
  },
  {
    lvl:"6 lvl.",
    image:six,
    title:"agaga",
    volume:650,
    bonus:9.99
  },
]

export const initialMarket:MarketCardProps[]=[
  {
    lvl:"1 lvl.",
    image:imageOneMarket,
    imageTwo:imageOneOneMarket,
    title:"Neighbour",
    volume:250,
    bonus:10.40
  },
  {
    lvl:"2 lvl.",
    image:imageTwoMarket,
    imageTwo:imageTwoTwoMarket,
    title:"Family",
    volume:350,
    bonus:'upgrade to sell'
  },
  {
    lvl:"3 lvl.",
    image:three,
    imageTwo:"",
    title:"Bottle",
    volume:450,
    bonus:5.50
  },
  {
    lvl:"4 lvl.",
    image:four,
    imageTwo:"",
    title:"Big bottle",
    volume:650,
    bonus:9.99
  },
  {
    lvl:"5 lvl.",
    image:five,
    imageTwo:"",
    title:"lalala",
    volume:450,
    bonus:5.50
  },
  {
    lvl:"6 lvl.",
    image:six,
    imageTwo:"",
    title:"agaga",
    volume:650,
    bonus:9.99
  },
]