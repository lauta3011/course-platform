import { createClient, QueryData } from '@supabase/supabase-js';
import { create } from 'zustand';
import { ICourse, IResource } from '../interfaces';

const supabaseURL = 'https://ujxzqobfctttnpebbroz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqeHpxb2JmY3R0dG5wZWJicm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyMzUyOTgsImV4cCI6MjAzMzgxMTI5OH0.wTJR88vJNCHPQ6Q068Gv8FnnPYTSbkLTzTQMWr-adPU';

export const supabase = createClient(supabaseURL, supabaseKey);

interface IStore {
    courses: any[],
    getCourses: () => void,
    addCourse: (course: ICourse) => void,
    addResource: (resource: IResource) => void,
    deleteResource: (resource: number) => void
}

const coursesWithResourcesQuery = supabase.from('courses').select(
    'id, title, description, icon_name, created_at, resources (id, title, description, link, notes)'
).order('created_at', { ascending: false });

type CoursesWithResources = QueryData<typeof coursesWithResourcesQuery>;

export const useStore = create<IStore>((set) => ({
    courses: [],
    resources: [],
    getCourses: async () => {
        try {
            const { data, error } = await coursesWithResourcesQuery

            if(error) {
                throw new Error(error.message);
            }

            const courses: CoursesWithResources = data;

            console.log('daata ', data)
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

            set((state) => ({ courses: [...state.courses, data[0]] }))
        } catch (error) {
            console.log('Error at insert: ', error);
        }
    },
    addResource: async (resource: IResource) => {
        try {
            const { data, error } = await supabase.from('resources').insert([
                { title: resource.title, description: resource.description, notes: resource.notes, link: resource.link, course_ref: resource.courseId}
            ]).select();
    
            if(error) {
                throw new Error(error.message);
            }
            
        } catch (error) {
            console.log('Error at insert: ', error);
        }
    },
    deleteResource: async (resource: number) => {
        try {
            const { data, error } = await supabase.from('resources').delete().eq('id', resource);

            if (error) {
                throw new Error(error.message);
            }
        } catch (error) {
            console.log('Error at delete: ', error);
        }
    }
}))