'use strict';

interface Journey {
    title: string,
    countries: string[],
    start: Date,
    end: Date,
    days?: number,
    types: string[],
    description: string,
    images: JourneyImage[]
}