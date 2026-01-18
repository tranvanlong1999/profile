export interface Project {
  slug: string;
  title: string;
  category: string;
  date: string;
  client: string;
  services: string;
  year: string;
  description: string;
  about: string;
  bannerImage: string;
  galleryImages: { src: string; className: string }[];
}

export const projects: Project[] = [
  {
    slug: 'dynamic',
    title: 'Aesthetic Design for Brand New Startup',
    category: 'Web Designing',
    date: 'March 27, 2023',
    client: 'Raven Studio',
    services: 'Web Design / Branding',
    year: '2023',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    about:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    bannerImage: '/images/project1.png',
    galleryImages: [
      { src: '/images/project2.png', className: 'md:col-span-12' },
      { src: '/images/project3.png', className: 'md:col-span-6' },
      { src: '/images/project4.png', className: 'md:col-span-6' },
      { src: '/images/project5.png', className: 'md:col-span-6' },
      { src: '/images/project6.png', className: 'md:col-span-6' },
    ],
  },
  {
    slug: 'seven-studio',
    title: 'Seven Studio Branding & App Design',
    category: 'Mobile Designing',
    date: 'April 15, 2023',
    client: 'Seven Studio',
    services: 'App Design / UX / UI',
    year: '2023',
    description:
      'Developing a comprehensive mobile experience for Seven Studio involved deep user research and interactive prototyping.',
    about:
      'The goal was to create a seamless interface that resonates with minimalist values while maintaining powerful functionality for end-users.',
    bannerImage: '/images/project2.png',
    galleryImages: [
      { src: '/images/project1.png', className: 'md:col-span-12' },
      { src: '/images/project3.png', className: 'md:col-span-6' },
      { src: '/images/project4.png', className: 'md:col-span-6' },
    ],
  },
  {
    slug: 'raven-studio',
    title: 'Raven Studio Identity System',
    category: 'Branding',
    date: 'June 05, 2023',
    client: 'Raven Studio',
    services: 'Visual Identity / Logo Design',
    year: '2023',
    description:
      "A complete overhaul of Raven Studio's visual language, focusing on dark aesthetics and premium typography.",
    about:
      'We crafted a custom logo mark and a set of brand guidelines that define their digital presence across multiple platforms.',
    bannerImage: '/images/project3.png',
    galleryImages: [
      { src: '/images/project4.png', className: 'md:col-span-12' },
      { src: '/images/project5.png', className: 'md:col-span-6' },
      { src: '/images/project6.png', className: 'md:col-span-6' },
    ],
  },
  {
    slug: 'diesel-h1',
    title: 'Diesel H1 Photography Portfolio',
    category: 'Photography',
    date: 'August 12, 2023',
    client: 'Diesel H1',
    services: 'Photography / Art Direction',
    year: '2023',
    description:
      'Capturing the essence of modern industrial architecture through a series of high-contrast black and white photographs.',
    about:
      'Each shot was carefully planned to highlight the interplay between shadow and light in contemporary urban spaces.',
    bannerImage: '/images/project4.png',
    galleryImages: [
      { src: '/images/project1.png', className: 'md:col-span-12' },
      { src: '/images/project2.png', className: 'md:col-span-6' },
    ],
  },
  {
    slug: 'submarine',
    title: 'Submarine Immersive Web App',
    category: 'Web Designing',
    date: 'September 30, 2023',
    client: 'Submarine Corp',
    services: 'Web App / Interaction Design',
    year: '2023',
    description:
      'An interactive web experience exploring underwater mysteries through 3D visualizations and spatial audio.',
    about: 'Built with performance in mind, the Submarine app pushes the boundaries of web-based storytelling.',
    bannerImage: '/images/project5.png',
    galleryImages: [
      { src: '/images/project6.png', className: 'md:col-span-12' },
      { src: '/images/project1.png', className: 'md:col-span-6' },
      { src: '/images/project2.png', className: 'md:col-span-6' },
    ],
  },
  {
    slug: 'hydra-merc',
    title: 'Hydra Merc E-commerce Platform',
    category: 'Web Designing',
    date: 'November 20, 2023',
    client: 'Hydra Merc',
    services: 'E-commerce / UI / Backend',
    year: '2023',
    description: 'Scaling a global marketplace with a focus on high conversion rates and lightning-fast page loads.',
    about: 'The Hydra Merc platform combines a beautiful storefront with a robust logistics management system.',
    bannerImage: '/images/project6.png',
    galleryImages: [
      { src: '/images/project3.png', className: 'md:col-span-12' },
      { src: '/images/project1.png', className: 'md:col-span-6' },
    ],
  },
];
