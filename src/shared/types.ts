export enum SelectedPage{
    Home="home",
    Benefits="benefits",
    OurClasses="ourclasses",
    ContactUs="contactus",
}

//used in benefit-index type for box-container with array
export interface BenefitType{
    icon:JSX.Element;
    title:string;
    description:string;
}

export interface ClassType{
    name:string;
    description?:string;
    image:string;
}