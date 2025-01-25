import { json, pgTable, serial, text, varchar } from "drizzle-orm/pg-core"


export const StoryData = pgTable('storyData',{

    id:serial('id').primaryKey(),
    storySubject:text('stotySubject'),
    storyType:varchar('storyType'),
    ageGroup:varchar('ageGroup'),
    imageStyle:varchar('imageStyle'),
    output:json('output'),
    coverImage:varchar('coverImage'),
    stooryId:varchar('stooryId')


})