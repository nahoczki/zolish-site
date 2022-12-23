import {createContext, useEffect, useState, FC, ReactNode} from "react";
import { db } from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import firebase from "firebase/compat";
import Unsubscribe = firebase.Unsubscribe;

export interface Project {
    title: String
    description: String
    url: String
    tags: Array<String>
}

export const ProjectsContext = createContext<Array<Project> | undefined>(undefined);


export const ProjectsProvider: FC<ReactNode> = ({ children }) => {
    let [projects, setProjects] = useState<Array<Project> | undefined>(undefined);
    let unsub: Unsubscribe | undefined;

    useEffect(() => {
        console.log("run")
        unsub = onSnapshot(collection(db, "projects"), (data) => {
            let ret: Array<Project> = []
            data.forEach(site => {
                let data = site.data();

                ret.push({
                    title: data.title,
                    description: data.description,
                    url: data.url,
                    tags: data.tags
                } as Project)
            })

            console.log(ret)

            setProjects([...ret])
        });
        return function cleanup() {
            setProjects(undefined)
            if (unsub) {
                unsub()
                unsub = undefined
            }
        }
    }, [])

    return(
        <ProjectsContext.Provider value={projects}>
            {children}
        </ProjectsContext.Provider>
    )
}
