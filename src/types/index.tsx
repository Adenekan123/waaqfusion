import { ReactNode } from "react";
import {IconType} from 'react-icons'
export interface ICustomButton{
    title:ReactNode;
    styles?:string
}

export interface IContainer{
    children:ReactNode;
    styles?:string;
}