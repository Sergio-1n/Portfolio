export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
  { name: 'Resume', link: '/moreabout' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building on my own app',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.earth.com',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '/ui.aiimg.com',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
  },
];

export const testimonials = [
  {
    quote:
      'Code is my canvas, and creativity is my brush. As a full-stack developer, I’m eager to build not just functional solutions but meaningful experiences that connect people and technology.',
    name: 'Serhii Kuznietsov',
    title: 'Partner',
  },
  {
    quote:
      'The tech world evolves every day, and so do I. With each project, I’m not just solving problems—I’m learning, growing, and shaping my future as a developer.',
    name: 'Serhii Kuznietsov',
    title: 'Partner',
  },
  {
    quote:
      'My journey as a developer started with curiosity and passion for creating. Today, I’m turning that passion into a career by mastering both front-end and back-end development.',
    name: 'Serhii Kuznietsov',
    title: 'Partner',
  },
  {
    quote:
      'Great software is built not just with skills, but with collaboration. I thrive in team environments, bringing dedication and adaptability to every project',
    name: 'Serhii Kuznietsov',
    title: 'Partner',
  },
  {
    quote:
      'My dream is simple: to transform ideas into reality through code. Every line I write brings me closer to creating impactful solutions for the world.',
    name: 'Serhii Kuznietsov',
    title: 'Partner',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Full-Stack Developer',
    desc: "I'm developing a full stack application using Next.js",
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Back-end Developer',
    desc: 'Developed a server and deployed it on Docker.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp4.svg',
  },
  {
    id: 3,
    title: 'Working with DataBases',
    desc: 'Mongodb, Neon, Microsoft Azure, PostgreSQL.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Mobile App Dev',
    desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/Sergio-1n',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/sergio-kuznietsov-4459a4338/',
  },
];
