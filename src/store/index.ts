import { createClient } from '@supabase/supabase-js';
import { create } from 'zustand';
import { ICourse } from '../interfaces';

const supabaseURL = 'https://ujxzqobfctttnpebbroz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqeHpxb2JmY3R0dG5wZWJicm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyMzUyOTgsImV4cCI6MjAzMzgxMTI5OH0.wTJR88vJNCHPQ6Q068Gv8FnnPYTSbkLTzTQMWr-adPU';

export const supabase = createClient(supabaseURL, supabaseKey);

interface IStore {
    //las tasks ahora se van a llamar course!!!
    courses: any[],
    getCourses: () => void,
    addNewCourse: (course: ICourse) => void
}

export const useStore = create<IStore>((set) => ({
    courses: [],
    getCourses: async () => {
        try {
            const { data, error } = await supabase.from('courses').select();

            if(error) {
                throw new Error(error.message);
            }

            set({ courses: data });
        } catch (error) {
            console.error('Error at select: ', error);
        }
    },
    addNewCourse: async (course: ICourse) => {
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
    }
}))