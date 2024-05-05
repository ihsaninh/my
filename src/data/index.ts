import {
  Education,
  Experience,
  NavItem,
  PortfolioItem,
  PortfolioCategory,
  TestimonialItem,
} from '../types';

export const navItems: NavItem[] = [
  { key: 'resume', label: 'Resume', url: '/' },
  { key: 'portfolio', label: 'Portfolio', url: '/portfolio' },
  // { key: 'blog', label: 'Blog', url: '/blog' },
  { key: 'contact', label: 'Contact', url: '/contact' },
];

export const testimonialItems: TestimonialItem[] = [
  {
    photo:
      'https://media.licdn.com/dms/image/D5603AQEXZ1CNXi2y-w/profile-displayphoto-shrink_800_800/0/1675306983790?e=1716422400&v=beta&t=iDzT2Mere6jng_qKoeYLd0xSb3KRoPRpJzvzYC7vH14',
    name: 'Try Yoga Utomo',
    role: 'Frontend Engineer at eFishery',
    testimonial:
      'As my team partner in Axiata Digital Service Indonesia Frontend Developer, Ihsan can do every job very well. He is a curious person about new technology, a hard-worker, and a fast-learner. He has good communication and will be fit in any team.',
  },
  {
    photo:
      'https://media.licdn.com/dms/image/C5103AQEiNT81AcZHnQ/profile-displayphoto-shrink_800_800/0/1531205861287?e=1716422400&v=beta&t=-OwdpO-E-wDv5fRWKtiJifk69YSvROJisujwbDCA3V0',
    name: 'Zacky Farhan',
    role: 'Senior QA Engineer at Renos',
    testimonial:
      'I’m happy with the work Ihsan, and I recommend him as a Frontend Developer.',
  },
  {
    photo:
      'https://media.licdn.com/dms/image/C5603AQFZ6ZsIgoyCHQ/profile-displayphoto-shrink_800_800/0/1580192590832?e=1716422400&v=beta&t=EtejZ-dcctN-Vp1ESNq77smbjiyVZjXeqkhit29f0CQ',
    name: 'Hasan Al Mujtaba',
    role: 'Frontend Engineer at Synergize Tech',
    testimonial:
      'Ihsan is a great frontend developer, able to develop various mobile apps and frontend websites with various popular technologies including React JS and Angular. I definitely recommend Ihsan to frontend jobs and projects.',
  },
];

export const experienceData: Experience[] = [
  {
    title: 'Frontend Developer - PT. XL Axiata Tbk',
    date: 'Oct 2023 — Present',
    description:
      'Developing Axis and XL-related applications using Next.js technology. Dedicated to leveraging Next.js to create efficient and innovative solutions.',
  },
  {
    title: 'Frontend Developer - Axiata Digital Labs',
    date: 'Sep 2019 — Aug 2023',
    description:
      'Develop NewXLife, EMR, AKBAR project using Angular CLI and as Mobile Developer placed to work in Axiata Digital Services Indonesia to develop a mobile application called Boost.',
  },
  {
    title: 'Frontend Developer - Meteor Inovasi Digital',
    date: 'Sep 2019 — Present',
    description:
      'Develop Several applications for client such as Net. Connect, Kioson, SkyCo, Planet Persib, and Trex Mobile.',
  },
  {
    title: 'Computer Technician - AB Computer',
    date: 'Oct 2017 — Jan 2018',
    description:
      'Perform Install OS, assemble computers, service computers/laptops and sell computer equipment.',
  },
];

export const educationData: Education[] = [
  {
    institution: 'Arkademy',
    date: '2019',
    description:
      'Arkademy is a bootcamp program that aims to help you improve your competence in the technology field. Through this program, you have the opportunity to be trained directly with mentors who are competent in their fields.',
  },
  {
    institution: 'SMK Negeri 2 Bogor',
    date: '2016 — 2019',
    description:
      'Graduated from vocational school (SMK) with a focus on computer and network engineering. Passionate about leveraging technical skills to excel in the field of technology.',
  },
];

export const aboutData: string[] = [
  'I am a front-end developer with over 4 years of experience in the tech industry. Currently, I am using NextJS in my projec and also have a understanding of other technologies such as React, React Native, and Angular. In addition, I am also currently learning other technologies such as Android Kotlin and Flutter.',
  'I have the ability to work as part of a team or independently as needed for project requirements and am continuously learning new technologies to continually improve my skills.',
  'I believe that with the skills I possess, I can make valuable contributions to the company I work for and continue to develop myself in this field.',
];

export const portfolioData: PortfolioItem[] = [
  {
    title: 'NewXlife',
    imageId: require('@/src/assets/images/projects/NewXlife.png'),
    description: 'New XLife is the main application that can be a gate for the XL Axiata family. This is where we make the world of work better for you. With Super App',
    categoryId: 'web',
  },
  {
    title: 'Spesial Untukmu',
    imageId: require('@/src/assets/images/projects/SpesialUntukmu.png'),
    description: 'An application that offers surprises when you enter your XL or Axis number. Get exclusive deals and rewards tailored to you',
    categoryId: 'web',
  },
  {
    title: 'Boost Penjual',
    imageId: require('@/src/assets/images/projects/BoostPenjual.png'),
    description: 'BoostPenjual is an application that can increase revenue by making you digitally connected to various existing suppliers. That way, you can sell a variety of products including digital products',
    categoryId: 'mobile',
  },
  {
    title: 'XL Prepaid Registrasi',
    imageId: require('@/src/assets/images/projects/XLPrepaidRegistrasi.png'),
    description: 'XL Prepaid Registrasi adalah layanan untuk registrasi nomer baru XL dan Axis menggunakan sistem biometrik.',
    categoryId: 'web',
  },
  {
    title: 'Trex',
    imageId: require('@/src/assets/images/projects/Trex.png'),
    description: 'Trex adalah aplikasi PPOB yang menjual pulsa, paket data, topup game, dan berbagai macam iuran seperti PLN, BPJS, dan TV berbayar.',
    categoryId: 'mobile',
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  {
    categoryId: 'all',
    category: 'All',
  },
  {
    categoryId: 'mobile',
    category: 'Mobile Application',
  },
  {
    categoryId: 'web',
    category: 'Web Development',
  },
];
