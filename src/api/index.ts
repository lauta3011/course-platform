import express from "express"
import { IResource } from '../interfaces';
import { createClient, QueryData } from '@supabase/supabase-js';

const PORT = 3696

const app = express()
app.disable('x-powered-by')

const supabaseURL = 'https://ujxzqobfctttnpebbroz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqeHpxb2JmY3R0dG5wZWJicm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyMzUyOTgsImV4cCI6MjAzMzgxMTI5OH0.wTJR88vJNCHPQ6Q068Gv8FnnPYTSbkLTzTQMWr-adPU';

export const supabase = createClient(supabaseURL, supabaseKey);

const coursesWithResourcesQuery = supabase.from('courses').select(
    'id, title, description, icon_name, created_at, resources (id, created_at, title, description, link, notes, course_ref)'
).order('created_at', { ascending: false });

type CoursesWithResources = QueryData<typeof coursesWithResourcesQuery>;

app.get('/', (req, res) => {
    res.send('Hola!')
})

app.get('/courses', async (req, res) => {
    try {
        const { data, error } = await coursesWithResourcesQuery

        if(error) {
            throw new Error(error.message);
        }

        const courses: CoursesWithResources = data;
        let coursesRecord: Record<number, IResource[]> = {};

        courses.forEach((course) => {
            const { id, resources: res } = course;
            coursesRecord[id] = res;
        })

        res.json(coursesRecord);
    } catch (error) {
        console.error('Error at select: ', error);
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})