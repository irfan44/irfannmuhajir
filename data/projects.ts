import Projects from 'types/projects';

const projects: Projects[] = [
  {
    name: 'Confidential Banking App',
    description:
      'A modern banking solution for wholesale customer of PT Bank Central Asia Tbk (BCA)',
    isFeatured: true,
    type: 'Work',
    company: 'PT Bank Central Asia Tbk (BCA)',
    techStack: ['Angular', 'Microfrontend', 'UI Components'],
    url: '',
    sourceCode: '',
    overview:
      'A modern banking solution to fulfill the digital banking needs of wholesale customer of PT Bank Central Asia Tbk (BCA). The largest project I have involved, with tens of separate teams both in business and in IT',
    date: 'Feb - Aug 2023',
    role: 'Frontend Engineer',
    whatIDo: [
      'Migrated existing microfrontend from Angular Material components to in-house UI component library',
      'Managed & developed new components for UI component library',
      'Fix issues related to frontend after User Acceptance Testing (UAT) by QA team ',
    ],
  },
  {
    name: 'MyBatch',
    description:
      'An Angular based application for batch management & update data using stored procedure',
    type: 'Work',
    company: 'PT Bank Central Asia Tbk (BCA)',
    techStack: ['Angular', 'Ant Design', 'Spring Boot', 'Oracle DB'],
    url: '',
    sourceCode: '',
    overview:
      'An Angular based application for batch management & update data using stored procedure. Developed as an internal web application for IT team at PT Bank Central Asia with the goal of making UAT testing more efficient',
    date: 'Jul - Aug 2023',
    role: 'Fullstack Engineer (Angular & Spring Boot)',
    whatIDo: [
      'Developed & integrate new features to execute stored procedure in the Oracle DB',
      'Implemented Ant Design for Angular from previously basic UI',
      'Fixed UI bugs and errors',
      'Migrated Spring Boot backend to using Oracle DB from MySQL',
    ],
  },
  {
    name: 'irfannm.dev',
    description: 'My personal blog & website',
    type: 'Personal',
    techStack: ['NextJS', 'TailwindCSS', 'TypeScript'],
    url: 'https://irfannm.dev',
    sourceCode: 'https://github.com/irfan44/irfannm',
    overview:
      'My personal website & home in the internet, also a place for me to experiment :)',
    date: '',
    role: 'Frontend Engineer',
    whatIDo: ['sasdasda', 'sadsadsd'],
  },
  {
    name: 'FRFA Request Portal',
    description:
      'Web portal for FRFA request as business innovation for internal team use at PT Bank Mandiri (Persero) Tbk',
    isFeatured: true,
    type: 'Work',
    company: 'PT Bank Mandiri (Persero) Tbk',
    techStack: [
      'React',
      'Ant Design',
      'Express',
      'MySQL',
      'Google Cloud Platform',
    ],
    url: '',
    sourceCode: '',
    overview:
      'A request ticket management portal website developed to manage FRFA request to NST team at CISO group. Part of my teams business innovation on my internship at PT Bank Mandiri (Persero) Tbk',
    date: 'Sep - Dec 2022',
    role: 'Fullstack Engineer (React & Express)',
    whatIDo: [
      'Developed React based frontend using Ant Design ',
      'Integrate backend to frontend using REST API',
      'Developed Express based backend REST API',
      'Collaborated with NST team members as the user of this portal to set software requirements',
      'Deployed the portal to a Google Cloud Platform virtual machince',
    ],
  },
  {
    name: 'EmoSync Dashboard',
    description:
      'Desktop & web based emotion recognition dashboard to show students emotion to teacher when synchronous learning',
    isFeatured: true,
    type: 'Personal',
    company: 'Thesis Project',
    techStack: [
      'React',
      'ElectronJS',
      'Face-api.js',
      'Figma',
      'User-Centered Design',
    ],
    url: 'https://emoview-v2.vercel.app',
    sourceCode: 'https://github.com/irfan44/emoview',
    overview:
      "An emotion recognition dashboard to enable teachers to monitor students' emotion when synchronous learning. EmoSync is a continuation of previous prototype called EmoView. This app is developed as part of my bachelor degree thesis with focus on implementing User-Centered Design (UCD) design method to develop a better User Experience (UX) of the dashboard",
    date: 'Jan - Jul 2023',
    role: 'Frontend Engineer',
    whatIDo: ['sasdasda', 'sadsadsd'],
  },
  {
    name: 'Literanian',
    description:
      'Literanian is a digital literacy website aimed to improve reading interest among users in Indonesia',
    techStack: ['React', 'Firebase', 'TypeScript'],
    isFeatured: true,
    type: 'Personal',
    company: 'Generasi Gigih 2.0 Capstone Project',
    url: 'https://literanian.vercel.app',
    sourceCode: 'https://github.com/irfan44/literanian',
    overview:
      "Literanian is a digital literacy website aimed at improving users interest in reading by providing various articles and accompanied with a simple quiz to keep user engaged. Our study showed that with a total of 50 users, almost 90% of them felt an increase in interest in reading. Highly praised for it's clean & attractive UI by mentors from Tokopedia",
    date: 'May - Jul 2022',
    role: 'Frontend Engineer',
    whatIDo: ['sasdasda', 'sadsadsd'],
  },
  {
    name: 'SocialTree',
    description: 'Linktree like web for my social media link sharing',
    techStack: ['React', 'Vite', 'TypeScript'],
    type: 'Personal',
    url: 'https://socialtree-irfannm.vercel.app',
    sourceCode: 'https://github.com/irfan44/socialtree',
    overview:
      'A simple website to show all of my social media links. Heavily inspired by Linktree',
    date: '',
    role: 'Frontend Engineer',
    whatIDo: ['sasdasda', 'sadsadsd'],
  },
  {
    name: 'Spotifie',
    description:
      'Spotify playlist creator using Spotify API for Generasi Gigih final project',
    techStack: ['React', 'Redux', 'TypeScript'],
    url: 'https://generasi-gigih-final.vercel.app',
    sourceCode: 'https://github.com/irfan44/spotifie',
    type: 'Personal',
    company: 'Generasi Gigih 2.0 Final Project',
    overview:
      'A simple Spotify playlist creator website, with integration to Spotify API. Built as part of Generasi Gigih 2.0 final project & one of the first project for me to use React with TypeScript',
    date: 'April 2022',
    role: 'Frontend Engineer',
    whatIDo: ['sasdasda', 'sadsadsd'],
  },
  {
    name: 'Ramaniya.id',
    description:
      "Ramaniya's company website that i manage. Built using Wordpress and Divi theme.",
    techStack: ['Wordpress', 'Divi', 'PHP'],
    type: 'Work',
    company: 'Ramaniya',
    url: '',
    sourceCode: '',
    overview:
      "Ramaniya's current company website. Built using Wordpress and Divi theme",
    date: 'Sep - Dec 2021',
    role: 'Wordpress Developer',
    whatIDo: [
      'Fixed content & information on the website to align with latest condition at the company',
      'Maintained the deployment of Wordpress in a hosting platform',
      'Collaborated with non IT staff to help them use Wordpress and add new contents',
    ],
  },
  // {
  //   name: 'Aksara Sunda',
  //   description:
  //     'Sundanese writing (aksara) learning app for android implemented using firebase to store questions data',
  //   techStack: ['Java', 'Firebase'],
  //   type: 'Personal',
  //   url: '',
  //   sourceCode: 'https://github.com/irfan44/Aksara_sundaV2',
  //   overview: '',
  //   date: 'Dec 2021 - Jan 2022',
  //   role: 'Android Developer',
  //   whatIDo: ['sasdasda', 'sadsadsd'],
  // },
  // {
  //   name: 'YukJahit',
  //   description: 'A web application for online dressmaking service',
  //   techStack: ['PHP', 'MySQL', 'HTML', 'CSS'],
  //   type: 'Personal',
  //   url: '',
  //   sourceCode: 'https://github.com/irfan44/UAS-Pemrograman-Web',
  //   overview: '',
  //   date: 'Feb - Aug 2023',
  //   role: 'Frontend Engineer',
  //   whatIDo: ['sasdasda', 'sadsadsd'],
  // },
];

export default projects;
