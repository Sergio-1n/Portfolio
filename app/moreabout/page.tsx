'use client';

import CarouselDemo from '@/components/CaruselDemo';
import Link from 'next/link';

const About = () => {
  return (
    <div className='m-4 mt-8'>
      <div className='flex justify-between'>
        <Link
          href='/'
          className='bg-gray-800 text-white px-4 py-2 rounded mb-4 hover:bg-gray-600'
        >
          Home
        </Link>
      </div>

      <div className='flex justify-center'>
        <CarouselDemo />
      </div>
      <h1 className='text-3xl text-center p-4'>Junior Fullstack Developer</h1>

      <p
        className='p-2 text-base leading-relaxed'
        style={{ textIndent: '40px' }}
      >
        Hello! I’m Serhii Kuznietsov, and I’m from Ukraine, currently living in
        Poland. I am a Full-Stack Developer skilled in HTML, CSS, JavaScript,
        React, Next.js, and Node.js. I hold certifications in Full-Stack
        Development, UX/UI Design, and Project Management.
      </p>
      <p
        className='p-2 text-base leading-relaxed'
        style={{ textIndent: '40px' }}
      >
        While my professional experience is primarily rooted in personal
        projects, I have a proven ability to learn quickly, work effectively
        under pressure, and adapt to new technologies. For the past eight years,
        I’ve worked closely with clients in the internet connectivity sector,
        honing my communication, problem-solving, and customer service skills.
      </p>

      <ul className='list-disc pl-8 text-base leading-relaxed'>
        <p className='pb-4 pt-2'>Hard Skills:</p>
        <li>
          <span className='text-blue-500'>Languages:</span> Ukrainian, Polish,
          Russian, English: intermediate
        </li>
        <li>
          <span className='text-blue-500'>Front-End Development:</span> HTML,
          CSS, JavaScript, React, Node.js, Next.js, Tailwind CSS
        </li>
        <li>
          <span className='text-blue-500'>Back-End Development:</span> Node.js,
          Express
        </li>
        <li>
          <span className='text-blue-500'>Working with databases:</span> MySQL,
          MongoDB
        </li>
        <li>
          <span className='text-blue-500'>Version Control:</span> GIT and GITHUB
        </li>
        <li>
          <span className='text-blue-500'>UX/UI Design:</span> Understanding of
          design principles, wireframing, and prototyping tools like Figma
        </li>
        <li>
          <span className='text-blue-500'>Testing and Debugging:</span>{' '}
          Familiarity with testing frameworks Mocha, Chai
        </li>
        <li>
          <span className='text-blue-500'>Project Management:</span> Waterfall,
          Agile Approach(Scrum Framework)
        </li>
        <li>
          <span className='text-blue-500'>Client Relationship Management:</span>{' '}
          8 years of customer service experience
        </li>
      </ul>
      <ul className='list-disc pl-8 text-base leading-relaxed'>
        <p className='pb-4 pt-2'>Soft Skills:</p>
        <li>
          <span className='text-blue-500'>Effective Communication</span>
        </li>
        <li>
          <span className='text-blue-500'>Problem-Solving</span>
        </li>{' '}
        <li>
          <span className='text-blue-500'>Team Collaboration</span>
        </li>{' '}
        <li>
          <span className='text-blue-500'>Adaptability</span>
        </li>{' '}
        <li>
          <span className='text-blue-500'>Time Management</span>
        </li>{' '}
        <li>
          <span className='text-blue-500'>Attention to Detail</span>
        </li>{' '}
        <li>
          <span className='text-blue-500'>Client Relationship Management</span>
        </li>{' '}
        <li>
          <span className='text-blue-500'>Creativity</span>
        </li>
        <li>
          <span className='text-blue-500'>Leadership</span>
        </li>
        <li>
          <span className='text-blue-500'>Performing Under Pressure</span>
        </li>
        <li>
          <span className='text-blue-500'>Critical Thinking</span>
        </li>
        <li>
          <span className='text-blue-500'>Cultural Awareness</span>
        </li>
      </ul>
      <p
        className='p-2 text-base leading-relaxed'
        style={{ textIndent: '40px' }}
      >
        As a motivated and enthusiastic aspiring full-stack developer, I am
        eager to contribute my skills and knowledge while continuously learning
        and growing in the field. With a strong foundation in front-end and
        back-end technologies, I am committed to honing my expertise and staying
        up-to-date with industry trends. I thrive in collaborative environments,
        adapt quickly to new challenges, and welcome constructive feedback as an
        opportunity for improvement. My goal is to bring value to the team by
        delivering high-quality solutions while embracing continuous learning
        and professional development.
      </p>
    </div>
  );
};

export default About;
