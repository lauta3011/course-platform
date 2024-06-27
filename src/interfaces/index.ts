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
    hasDelete?: boolean,
    secondActionText?: string,
    handlePrimary: () => void,
    handleSecondary?: () => void,
    handleDelete?: () => void
}

export interface ICourse {
    id?: number,
    title: string,
    description: string,
    icon?: string,
    handleEdit?: (course: any) => void
}

export interface IResource {
    course_ref: number,
    title?: string,
    description?: string,
    link?: string,
    id?: number,
    notes?: string,
    handlePrimary?: (id: number) => void,
    handleDelete?: (id: number) => void
}

export interface IResourceSummary {
    isEdit: boolean,
    notes?: string
    handleSetResourceForm?: (value: string) => void,
}

export interface IResourceForm {
    course: number,
    id?: number,
    title?: string,
    link?: string,
    description?: string,
    notes?: string
    handleCancel: () => void,
    handlePrimary: (resource: IResource) => void,
}

export interface IInput {
    type: string,
    label: string,
    size: number,
    background?: string,
    value? :string,
    onChange: (change: string) => void
}
