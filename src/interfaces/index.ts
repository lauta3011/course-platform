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
    title: string,
    link: string,
    description: string,
    courseId: number,
    id?: number,
    notes?: string,
    handleDeleteResource?: (id: number) => void
}

export interface IResources {
    course: number,
    resources: IResource[]
};

export interface IResourceSummary {
    isEdit: boolean,
    handleSetResourceForm?: (value: string) => void,
    notes?: string
}

export interface IInput {
    type: string,
    label: string,
    size: number,
    background?: string,
    value? :string,
    onChange: (change: string) => void
}
