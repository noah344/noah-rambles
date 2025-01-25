import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.noah-rambles.com", // replace this with your deployed domain
  author: "Noah",
  profile: "https://github.com/noah344",
  desc: "My (mostly) coherent ramblings on tech stuff.",
  title: "Noah Rambles",
  // TODO: Update this with my logo
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/noah344",
    linkTitle: `${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/noah--harris/",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:noah.rambles@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
];
