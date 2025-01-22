"use client";

import React from 'react'
import StorySubjectinputs from './_components/StorySubjectinputs'
import StoryType from './_components/StoryType';
import AgeGroup from './_components/AgeGroup';
import ImageStyle from './_components/ImageStyle';

export interface fieldData {
  fieldName: string,
  fieldValue: string
}

function CreateStory() {

  const onHandleUserSelection=(data:fieldData)=>{
    console.log(data);

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
    </div>
  )
}

export default CreateStory