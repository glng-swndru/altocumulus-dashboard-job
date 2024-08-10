import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = [
    "Full-Time",
    "Part-Time",
    "Remote",
    "Intership",
];

export const JOB_LISTING_COLUMNS: string[] = ['Roles', 'Status', 'Date Posted', 'Due Date', 'Job Type', 'Applicants', 'Needs']

export const JOB_LISTING_DATA = [
    {
        roles: 'Cloud Engineer',
        status: 'Lives',
        datePosted: '31 July 2024',
        dueDate: '20 September 2024',
        jobType: 'Full-Time',
        applicants: 1,
        needs: 10
    }
]