import React from 'react'
// import AboutUs from '../components/About/AboutUs.jsx'
// import Reviews from '../components/About/Reviews.jsx'

export default function About() {
  return (
    <div className='flex flex-wrap mx-auto max-w-screen-lg'>
      <div className='w-full flex flex-col md:flex-row md:items-stretch md:justify-between mt-4'>
        <div className='max-w-lg w-full mx-auto md:mx-0 md:mr-4 md:mb-0 mb-4 bg-black text-[#5D9CF3] flex-grow'>
          <h1 className='font-bold text-center'>About Us!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur molestiae similique id asperiores, tempore amet possimus suscipit facilis soluta et! Veniam maiores consequuntur modi quibusdam non nostrum aliquam tenetur.
          Cum nobis saepe culpa sapiente quas dolor doloremque illo neque qui tempore explicabo doloribus delectus voluptas nisi sint, soluta veritatis, eum id ut commodi ipsum reprehenderit, totam placeat optio. Libero.
          Tempore, voluptatem. Quod laudantium doloribus non rem porro ipsam! Consectetur illum corporis blanditiis quod, maiores doloremque suscipit optio! Temporibus esse cum repellat aliquam nam dolorem assumenda odit minima quos possimus?
          Repudiandae accusamus magni iure modi reiciendis nostrum, tempora voluptate rem eaque amet, saepe repellat maxime. Aspernatur voluptates saepe dolorem nisi reiciendis? Quae neque sapiente tempora, qui ullam minus dolorum a!</p>
        </div>
        <div className='max-w-lg w-full mx-auto md:mx-0 md:ml-4 bg-black text-[#5D9CF3] flex-grow'>
          <h1 className='font-bold text-center'>Reviews Component!</h1>
          <ul>
            <li> I got my garage door replaced last summer. I high recommend! Fast, efficient and so kind. - Jessica Washington</li>
            <li>- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus earum ducimus, dolores sapiente molestiae voluptas iusto aspernatur in est ratione aliquam esse maxime, nihil quasi architecto culpa optio quo praesentium. - Jane Doe</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
