"use client";

import React, { useState } from 'react'
import StorySubjectinputs from './_components/StorySubjectinputs'
import StoryType from './_components/StoryType';
import AgeGroup from './_components/AgeGroup';
import ImageStyle from './_components/ImageStyle';
import { Button } from '@heroui/button';

export interface fieldData {
  fieldName: string,
  fieldValue: string
}
export interface formDataType{
  storySubject:string,
  storyType:string,
  imageStyle:string,
  ageGroup:string
}

function CreateStory() {

  const [formData,setFormData]=useState<formDataType>();

  const onHandleUserSelection=(data:fieldData)=>{
    setFormData((prev:any)=>({
      ...prev,
      [data.fieldName]:data.fieldValue
    }));
    console.log(formData)

  }


  return (
    <div className='p-10 md:px-20 lg:px-40'>
      <h2 className='font-extrabold text-[70px] text-primary text-center'>Create Your Story</h2>
      <p className='text-2xl text-primary text-center'>Unlock Your Creativity With AI!!.. Craft Stories Like Never Before! Let 
        Our AI Brings Your Imagination To Life, One Story At A Time!.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14'>

        {/* Story Subject */}
        <StorySubjectinputs userSelection={onHandleUserSelection}/>

        {/* Story Type */}
        <StoryType userSelection={onHandleUserSelection}/>

        {/* Age Group */}
        <AgeGroup userSelection={onHandleUserSelection}/>

        {/* Image Style */}
        <ImageStyle userSelection={onHandleUserSelection}/>

      </div>
      <div className='flex justify-end my-10'>
        <Button color='primary' className='p-10 text-2xl'>Generate Story</Button>
      </div>
    </div>
  )
}

export default CreateStory