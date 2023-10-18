import { ReactNode } from "react";
import {IconType} from 'react-icons'
export interface ICustomButton{
    title:ReactNode;
    styles?:string;
    gradient?:string;
}

export interface IContainer{
    children:ReactNode;
    styles?:string;
}
export interface IFrameImage{
    image:string;
    styles?:string;
}
export interface IStack{
    direction?:string;
    gap?:string;
    children:ReactNode;
    styles?:string;
}
export interface IHeading{
    title:string;
    styles?:string;
    type?:number;
}
export interface IHeroWall{
    children:ReactNode;
    styles?:string;
    color?:string;
    gradient?:string;

}
