"use client";
import React from 'react'
import anastasios from "@/assets/images/facilitators/anastasios.jpg"
import anna from "@/assets/images/facilitators/anna.jpg"
import antonella from "@/assets/images/facilitators/antonella.jpg"
import antonia from "@/assets/images/facilitators/antonia.jpg"
import beth from "@/assets/images/facilitators/beth.jpg"
import daniella from "@/assets/images/facilitators/daniella.jpg"
import isabella from "@/assets/images/facilitators/isabella.jpg"
import julian from "@/assets/images/facilitators/julian.jpg"
import nathalie from "@/assets/images/facilitators/nathalie.jpg"
import panagiota from "@/assets/images/facilitators/panagiota.jpg"
import sasha from "@/assets/images/facilitators/sasha.jpg"
import sten from "@/assets/images/facilitators/sten.jpg"
import syrine from "@/assets/images/facilitators/syrine.jpg"
import tekla from "@/assets/images/facilitators/tekla.jpg"
import tess from "@/assets/images/facilitators/Tess.jpg"
import thea from "@/assets/images/facilitators/thea.jpg"
import Image from 'next/image'

type Props = {}

const list = [
  { id: 0, image: anastasios, ig: 'https://www.instagram.com/aproiosdoukas' },
  { id: 1, image: anna, ig: 'https://www.instagram.com/anna.abadk/' },
  { id: 2, image: antonella, ig: 'https://www.instagram.com/instatonch' },
  { id: 3, image: antonia, ig: 'https://www.instagram.com/ellaspoetry' },
  { id: 4, image: beth, ig: '' },
  { id: 5, image: daniella, ig: 'https://www.instagram.com/daniellaapiper' },
  { id: 6, image: isabella, ig: 'https://www.instagram.com/isabella.fb' },
  { id: 7, image: julian, ig: 'https://www.instagram.com/julianluca04' },
  { id: 8, image: nathalie, ig: 'https://www.instagram.com/nathalie_atieh' },
  { id: 9, image: panagiota, ig: 'https://www.instagram.com/panagiota.bout' },
  { id: 10, image: sasha, ig: 'https://www.instagram.com/boring_sasha' },
  { id: 11, image: sten, ig: 'https://www.instagram.com/sleinasaar' },
  { id: 12, image: syrine, ig: 'https://www.instagram.com/syrine_ketata' },
  { id: 13, image: tekla, ig: 'https://www.instagram.com/tekla.turmanidze' },
  { id: 14, image: tess, ig: 'https://www.instagram.com/tessabannink' },
  { id: 15, image: thea, ig: 'https://www.instagram.com/theachatila_' },
]

const Facilitators = (props: Props) => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-4xl text-center mb-3'>OUR LOVELY FACILITATORS</h1>
      <hr />
      <div className='flex flex-wrap justify-evenly gap-4 p-5'>
        {list.map((single) => (
          <div key={single.id} className='w-[1/4] bg-white flex flex-col items-center p-1 pb-10 rounded-md border-black border-2'>
            <Image src={single.image} alt={single.id.toString()} width={300} height={300} className='w-full' />
            <a href={single.ig} target='_blank' className='text-center mt-6 text-violet-700 hover:text-red-500'>{single.ig}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Facilitators
