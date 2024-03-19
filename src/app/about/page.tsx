import React from 'react'
import '../../Styles/About.scss'
import Image from 'next/image';
import Aboutone from '../../../public/Images/About1.jpeg'
import Abouttwo from '../../../public/Images/About2.jpeg'
import Aboutthree from '../../../public/Images/About3.jpeg'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Mountain Climing - Guide and more",
  description: "We are an agency responsible for tours and hiking",
};
export default function about() {
  return (
    <div className='About-page'>
    <h1>Guided Adventures Everywhere</h1>
    <div className="img">
<Image
    src={Aboutone}
    alt='About'
/>
    </div>
    <p>At Explore-Share we want to inspire people to take their travels to the next level and to connect with nature with the help of professional guides who can enhance outdoor adventures to make them unique, enriching, and safe. We know that a day spent out in nature – whether climbing, skiing, kayaking or hiking – is a day well-spent. And we want to make every day count. Helping our community on their path of exploration and sharing experiences is what drives us every day, and our ultimate summit.

With over 11,000 trip listings in 70+ countries, we are, hands down, the largest adventure-booking platform in the world and we work super hard every day to become the undisputed leaders in the guided adventure market.</p>
<Image
    src={Abouttwo}
    alt='About'
/>
<p>Our community of 1,700+ experienced guides will ensure the safest experience possible but also that you go home with a big smile on your face. It is a fact: adventuring makes people happy.

By hiring a local guide you will not just be doing what you love and living a memorable experience; you will also be supporting local economies and allowing great guides to make a living out of their passion. Unlike traditional travel agencies, close to 85% of the money you spend on Explore-Share will go to local guides and agencies.

We are a young Belgian startup and our team is based all over the world, from Argentina to the US and from Belgium to the UK. Wherever you want to travel and whatever you want to do, we’ve got a unique experience waiting for you.

Let the adventure begin!

</p>
<Image
    src={Aboutthree}
    alt='About'
/>

    </div>
  )
}
