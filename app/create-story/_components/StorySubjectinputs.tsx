"use client"

import { Textarea } from '@heroui/react'
import React from 'react'

function StorySubjectinputs({userSelection}:any) {
  return (
    <div>
        <label className='font-bold text-4xl text-primary'>
            1 Subject Of The Story
        </label>
        <Textarea
        
        placeholder='write the subject of the story which you want to Generate'
        size='lg' classNames={{
            input:"resize-y min-h-[230px] text-2xl p-5"
        }}

        className='mt-3 max-w-lg'
        onChange={(e)=>userSelection({
            fieldValue:e.target.value,
            fieldName:'storySubject'
        })}
        
        />
    </div>
  )
}

export default StorySubjectinputs