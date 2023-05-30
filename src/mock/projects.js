import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: '/project5.png',
    title: 'Unifified communications platform',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      getSkillByLabel(FRONTEND_SKILLS, 'Vue'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),

      // getSkillByLabel(FRONTEND_SKILLS, 'Vue.js')
    ],
    description:
      'Offering automated and integrated solutions across channels such voice and SMS, we are able to help businesses streamline the way they interact with their main stakeholders: their customers and their employees.',
    // repoLink: 'https://github.com/smurf-Azrael/ecommerce-java-project',
    sourceLink: 'https://clientain.com/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: '/project2.png',
    title: 'Multi-chain NFT Network',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Vue'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Vue.js')
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),


    ],
    
    description:
      'Bring the full potential of your web3 ideas to life with ease: private content, delegation, renting…',
    // repoLink: 'https://github.com/smurf-Azrael/ecommerce-java-project',
    sourceLink: 'https://www.ternoa.network/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: '/project3.png',
    title: 'UT Austin’s fastest delivery service',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Vue'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Vue.js')
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(BACKEND_SKILLS, 'AWS'),


    ],
    
    description:
      'Shmacked offers unmatched convenience by delivering everything from snacks, drinks, nicotine, and alcohol in less than 15 minutes! Don’t believe us, prepare to have your mind blown.',
    // repoLink: 'https://github.com/smurf-Azrael/ecommerce-java-project',
    sourceLink: 'https://shmacked.com/',
    category: [PROJECT_CATEGORY.FULL_STACK]},
  {
    imgSrc: '/project4.png',
    title: 'The Web3 play-to-own marketplace',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Angular'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Vue'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Vue.js')
      
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Solidity'),


    ],
    
    description:
      'Buy and sell 1,000’s of interoperable video game assets from top blockchain games and worlds using native game tokens.',
    // repoLink: 'https://github.com/smurf-Azrael/ecommerce-java-project',
    sourceLink: 'https://dapp.sundrip.io/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  
  {
    
    imgSrc: 'https://images2.imgbox.com/9a/99/kqwtfUDq_o.png',
    title: 'Servofeat.com - Restaurant POS Systems',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
    ],
    description: `A smart restaurant system proving billing management, kitchen management, QR Orders, Order settlement etc. `,
    repoLink: '',
    sourceLink: 'https://www.servofeat.com',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/ad/94/w5IP0ZQz_o.png',
    title: 'Acteria.com - Security Compliance Tool',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
    ],
    description: `Unified Regulations Simplified Compliance tool. Acteria Strengthens the Governance Over Regulations, And Helps Organizations Achieve Compliance Easily.`,
    repoLink: '',
    sourceLink: 'https://acteria.com',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/79/5f/S3hu6kJs_o.jpg',
    title: 'Flipkart Clone - E-Commerce Project',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
    ],
    description:
      'Flipkart Clone is done with top-notch features for the entrepreneur startups like Flipkart. It is build with React Js, Node Js.',
    // repoLink: 'https://github.com/smurf-Azrael/flipkart-clone',
    sourceLink: 'https://flipkart-web.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://images2.imgbox.com/dd/a3/Fcx8cjEr_o.jpg',
    title: 'Kitchen Store  - E-Commerce',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      {
        label: 'Java',
        icon: 'logos:java',
      },
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
    ],
    description:
      'The e-commerce to buy kitchen related items. College final year project base on Servlets and JSP (Java)',
    // repoLink: 'https://github.com/smurf-Azrael/ecommerce-java-project',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },


];
