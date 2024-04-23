import {create} from 'zustand';

import {devtools, persist} from 'zustand/middleware'


const courseStore = (set) => ({
    courses: [],
    addCourse: (course) =>{
        set((state)=>({
            courses: [course, ...state.courses],
        }))
    },

    removeCourse: (courseID) =>{
        set((state)=>({
            courses: state.courses.filter((c)=> c.id !== courseID)

        }))
    },

    toggleCourseStatus: (courseId) =>{
        set((state)=>({
            courses: state.courses.map((course) =>  course.id === courseId ? {...course, completed: !course.completed} : course)
        }))
    }
})


const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name:"courses",
        })
    )
)


export default useCourseStore;