import { StaticImageData } from "next/image";

export type Project = {
    id: number;
    title: string;
    size: string;
    tec: string[];
    github_link?: string;
    demo_link?: string;
    desc: string;
    big_desc?: string[];
    img?: StaticImageData;
}

export interface TimelineItem{
    title: string;
    date: string;
    description: string;
    link?: string;
}

export interface SocialMedia{
    name: string;
    link: string;
    title: string;
    text1: string;
    text2?: string;
}

export interface Certificate{
    name: string;
    from: string;
    link: string;
}

export type Data = {
    creator: string;
    work: string;
    bio: string;
    email: string;
    timeline: TimelineItem[];
    projects: Project[];
    socialMedia: SocialMedia[];
    certificates: Certificate[];
}