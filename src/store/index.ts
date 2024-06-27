import { createClient, QueryData } from '@supabase/supabase-js';
import { create } from 'zustand';
import { ICourse, IResource } from '../interfaces';

const supabaseURL = 'https://ujxzqobfctttnpebbroz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqeHpxb2JmY3R0dG5wZWJicm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyMzUyOTgsImV4cCI6MjAzMzgxMTI5OH0.wTJR88vJNCHPQ6Q068Gv8FnnPYTSbkLTzTQMWr-adPU';

export const supabase = createClient(supabaseURL, supabaseKey);

interface IStore {
    courses: any[],
    resources: {},
    getCourses: () => void,
    addCourse: (course: ICourse) => void
    editCourse: (course: ICourse) => void,
    deleteCourse: (id: number) => void,
    addResource: (resource: IResource) => void,
    editResource: (resource: IResource) => void,
    deleteResource: (course: number, resource: number) => void
}

const coursesWithResourcesQuery = supabase.from('courses').select(
    'id, title, description, icon_name, created_at, resources (id, created_at, title, description, link, notes, course_ref)'
).order('created_at', { ascending: false });

type CoursesWithResources = QueryData<typeof coursesWithResourcesQuery>;

export const useStore = create<IStore>((set, get) => ({
    courses: [],
    resources: [],
    getCourses: async () => {
        try {
            const { data, error } = await coursesWithResourcesQuery

            if(error) {
                throw new Error(error.message);
            }

            const courses: CoursesWithResources = data;
            let updatedResources: Record<number, IResource[]> = {};

            data.forEach((course) => {
                const { id, resources: res } = course;
                updatedResources[id] = res;
            })

            set({ resources: updatedResources });
            set({ courses: courses });
        } catch (error) {
            console.error('Error at select: ', error);
        }
    },
    addCourse: async (course: ICourse) => {
        try {
            const { data, error } = await supabase.from('courses').insert([
                { title: course.title, description: course.description, icon_name: course.icon }
            ]).select();
    
            if(error) {
                throw new Error(error.message);
            }

            set((state) => ({ courses: [...data, ...state.courses] }));
        } catch (error) {
            console.log('Error at insert: ', error);
        }
    },
    editCourse: async (course: ICourse) => {
        const { id, title, description } = course;
        const { courses } = get();

        try {
            const { data, error } = await supabase.from('courses').update({ 
                title: title, description: description, icon_name: 'iconXXX' 
            }).eq('id', id).select();

            if(error) {
                throw new Error(error.message);
            }

            const courseIndex = courses.findIndex((cor) => cor.id === id);
            courses[courseIndex] = data[0];

            set(() => ({ courses: courses }));
        } catch (error) {
            console.log('Error at update: ', error.message);
        }
    },
    deleteCourse: async (course: number) => {
        try {
            const { error } = await supabase.from('courses').delete().eq('id', course);
                
            if (error) {
                throw new Error(error.message);
            }

            set((state) => ({ courses: [...state.courses.filter((c: ICourse) => c.id !== course)] }));
        } catch (error) {
            console.log('Error at delete: ', error);
        }
    },
    addResource: async (resource: IResource) => {
        try {
            const { data, error } = await supabase.from('resources').insert([
                { title: resource.title, description: resource.description, notes: resource.notes, link: resource.link, course_ref: resource.course_ref}
            ]).select();
    
            if(error) {
                throw new Error(error.message);
            }

            const { course_ref } = resource;

            set((state) => ({ resources: { ...state.resources, ...state.resources[course_ref], [course_ref]: [ ...state.resources[course_ref], ...data] } }));
        } catch (error) {
            console.log('Error at insert: ', error);
        }
    },
    deleteResource: async (course: number, resource: number) => {
        try {
            const { error } = await supabase.from('resources').delete().eq('id', resource);
                
            if (error) {
                throw new Error(error.message);
            }

            set((state) => ({ resources: { ...state.resources, ...state.resources[course], [course]: state.resources[course].filter((r: IResource) => r.id !== resource) } }))
        } catch (error) {
            console.log('Error at delete: ', error);
        }
    },
    editResource: async (resource: IResource) => {
        const { id, course_ref, notes, title, description } = resource;
        const { resources } = get();

        try {
            const { data, error } = await supabase.from('resources').update({ 
                title: title, description: description, notes: notes 
            }).eq('id', id).select();

            if(error) {
                throw new Error(error.message);
            }

            const resourceIndex = resources[course_ref].findIndex((res: IResource) => res.id === id);
            resources[course_ref][resourceIndex] = data[0];

            set(() => ({ resources: resources }))
        } catch (error) {
            console.log('Error at edit: ', error);
        }
    }
}))