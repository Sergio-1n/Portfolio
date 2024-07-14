'use client';

import CarouselDemo from '@/components/CaruselDemo';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className='m-4 mt-8'>
      <div className='flex justify-between'>
        <Link
          href='/'
          className='bg-gray-800 text-white px-4 py-2 rounded mb-4 hover:bg-gray-600'
        >
          Home
        </Link>
        <button
          onClick={handleLanguageToggle}
          className='bg-gray-800 text-white px-4 py-2 rounded mb-4 hover:bg-gray-600'
        >
          {isEnglish ? 'Переключиться на русский' : 'Switch to English'}
        </button>
      </div>

      {isEnglish ? (
        <>
          <p
            className='p-2 text-base leading-relaxed'
            style={{ textIndent: '40px' }}
          >
            Hello! My name is Serhii Kuznietsov, and I am a Fullstack Developer
            with deep knowledge and experience in JavaScript. I am proficient in
            HTML, CSS, JavaScript, Node.js, React, and Next.js, which allows me
            to create both frontend and backend parts of web applications. I
            also have experience with Git, GitHub, MongoDB, and Vercel.
          </p>
          <div className='flex justify-center'>
            <CarouselDemo />
          </div>
          <p
            className='p-2 text-base leading-relaxed'
            style={{ textIndent: '40px' }}
          >
            I successfully completed a Fullstack development course at Genius
            Space and earned a diploma, which certifies my skills and
            competencies in this field.
          </p>

          <div className='flex justify-center items-center'>
            <div
              onClick={handleImageClick}
              className='cursor-pointer transition-transform duration-300 hover:shadow-yellow-xl'
            >
              <Image
                src='/images/diploma.jpg'
                alt='diploma'
                width={300}
                height={300}
                className='rounded-md'
              />
            </div>

            {isModalOpen && (
              <div
                className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
                onClick={handleCloseModal}
              >
                <div className='relative'>
                  <Image
                    src='/images/diploma.jpg'
                    alt='diploma'
                    width={320}
                    height={400}
                    className='rounded-md m-8'
                  />
                </div>
              </div>
            )}
          </div>
          <p
            className='p-2 text-base leading-relaxed'
            style={{ textIndent: '40px' }}
          >
            I am fluent in Ukrainian, Russian and Polish. My English level is
            B1, which enables me to effectively communicate and work in
            international teams. I am continuing to learn English to improve my
            skills and reach new heights in my career. I am constantly striving
            to improve my skills and learn new technologies to stay at the
            forefront of web development.
          </p>
          <p
            className='p-2 text-base leading-relaxed'
            style={{ textIndent: '40px' }}
          >
            When I am not coding, I enjoy exploring new programming languages,
            participating in hackathons, and sharing my knowledge with the
            community. In my free time, I enjoy playing football and traveling,
            which helps me relax and draw inspiration for new projects.
          </p>
          <p
            className='p-2 text-base leading-relaxed'
            style={{ textIndent: '40px' }}
          >
            If you have interesting projects or proposals, feel free to reach
            out to me. I am always open to new opportunities and ready for new
            challenges.
          </p>
        </>
      ) : (
        <>
          <p
            className='p-2 text-base leading-relaxed'
            style={{ textIndent: '40px' }}
          >
            Привет! Меня зовут Сергей Кузнецов, и я - Fullstack разработчик со
            знаниями и опытом работы с JavaScript. Я владею HTML, CSS,
            JavaScript, Node.js, React и Next.js, что позволяет мне создавать
            как фронтенд, так и бекенд части веб-приложений. Также у меня есть
            опыт работы с Git, GitHub, MongoDB и Vercel.
          </p>
          <div className='flex justify-center'>
            <CarouselDemo />
          </div>
          <p
            className='p-2 text-base leading-relaxed'
            style={{ textIndent: '40px' }}
          >
            Я успешно завершил курс по Fullstack разработке в школе Genius Space
            и получил диплом, что подтверждает мои навыки и компетенции в этой
            области.
          </p>

          <div className='flex justify-center items-center'>
            <div
              onClick={handleImageClick}
              className='cursor-pointer transition-transform duration-300 hover:shadow-yellow-xl'
            >
              <Image
                src='/images/diploma.jpg'
                alt='diploma'
                width={300}
                height={300}
                className='rounded-md'
              />
            </div>

            {isModalOpen && (
              <div
                className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
                onClick={handleCloseModal}
              >
                <div className='relative'>
                  <Image
                    src='/images/diploma.jpg'
                    alt='diploma'
                    width={320}
                    height={400}
                    className='rounded-md m-8'
                  />
                </div>
              </div>
            )}
          </div>
          <p
            className='p-2 text-base leading-relaxed'
            style={{ textIndent: '40px' }}
          >
            Я свободно владею украинским, русским и польским языками. Мой
            уровень английского языка - B1, что позволяет мне эффективно
            общаться и работать в международных командах. Я продолжаю учить
            английский, чтобы улучшить свои навыки и достичь новых высот в своей
            карьере. Я стремлюсь постоянно улучшать свои навыки и изучать новые
            технологии, чтобы оставаться на передовой веб-разработки.
          </p>
          <p
            className='p-2 text-base leading-relaxed'
            style={{ textIndent: '40px' }}
          >
            Когда я не пишу код, мне нравится изучать новые языки
            программирования, участвовать в хакатонах и делиться своими знаниями
            с сообществом. В свободное время я увлекаюсь игрой в футбол и
            путешествиями, что помогает мне расслабиться и черпать вдохновение
            для новых проектов.
          </p>
          <p
            className='p-2 text-base leading-relaxed'
            style={{ textIndent: '40px' }}
          >
            Если у вас есть интересные проекты или предложения, не стесняйтесь
            связаться со мной. Я всегда открыт для новых возможностей и готов к
            новым вызовам.
          </p>
        </>
      )}
    </div>
  );
};

export default About;
