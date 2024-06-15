import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IBannerButton {
    icon: IconProp,
    height: number,
    width: number,
    handleClick: () => void
}

export interface IActionButton {
    primaryActionText: string,
    secondAction: boolean,
    secondActionText?: string,
    handlePrimary: () => void,
    handleSecondary?: () => void
}

export interface ICourse {
    title: string,
    description: string,
    icon: string
}

export interface IResource {
    id: number,
    title: string,
    link: string,
    notes?: string,
    courseId: number
}

export interface IResources {
    resources: IResource[]
};

export interface IInput {
    type: string,
    label: string,
    size: number,
    onChange: (change: string) => void
}
