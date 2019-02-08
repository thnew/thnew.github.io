'use strict';

interface Project {
    title: string,
    customer: string,
    description: string,
    location: string,
    languages: string[],
    typeOfProject: string,
    months?: number,
    isTopProject?: Boolean,
    
    typeOfSoftware: string,
    link?: URL,
    start: Date,
    end: Date,
    roles: string[],
    technicalLanguages: string[],
    frameworks: string[],
    software: string[]
}