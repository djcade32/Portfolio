import whatIsGpt3_img from "../assets/whatIsGpt3_img.png";
import sumz_img from "../assets/sumz_img.png";
import inam_img from "../assets/inam_img.png";
import inspr_app_img from "../assets/inspr_app_img.png";
import melofi_img from "../assets/melofi_img.png";
import bank_img from "../assets/bank_img.png";
import gericht_restaurant_img from "../assets/gericht_restaurant_img.png";
import hhh_img from "../assets/hhh_img.png";

const IMG_POSITION = {
  center: "center",
  right: "right",
  left: "left",
  right: "right",
  bottom: "bottom",
  top: "top",
};

export const data = [
  {
    img: melofi_img,
    name: "Melofi",
    description:
      "Your ultimate web app for a chill and focused environment. Handpicked Lofi tracks, mesmerizing visuals, and productivity tools.",
    tools: ["React", "Javascript", "CSS"],
    website: "https://melofi.app/",
  },
  {
    img: hhh_img,
    name: "Health Hustle Happiness",
    description:
      "Uniting personal finance, mental health, and fitness articles for a well-rounded lifestyle and empowering your journey to balanced well-being",
    tools: ["NextJs", "Javascript", "Tailwind"],
    website: "https://healthhustlehappiness.com/",
    imgPosition: IMG_POSITION.center,
  },
  {
    img: inam_img,
    name: "INAM",
    description:
      "INAM Technology is a customer centric IT Consulting Company that helps provide affordable but efficient services to help agencies enhance their businesses and deploy mission critical projects.",
    tools: ["React", "Javascript", "CSS"],
    website: "https://www.inamtechnology.com/",
    imgPosition: IMG_POSITION.center,
  },
  {
    img: inspr_app_img,
    name: "Inspr App",
    description:
      "A quote-saving app designed to help you capture and revisit the quotes that inspire and motivate you most.",
    tools: ["React Native", "Javascript"],
    website: "https://apps.apple.com/us/app/inspr-the-app-of-quotes/id6448565489",
    imgPosition: IMG_POSITION.center,
  },
  {
    img: sumz_img,
    name: "Sumz",
    description:
      "With Sumz, you can effortlessly distill lengthy articles into concise insights. Just paste the article URL, and let ChatGPT-4 unravel the core points, providing you with comprehensive summaries.",
    tools: ["React", "Javascript", "Tailwind"],
    website: "https://sumzarticle.netlify.app/",
    imgPosition: IMG_POSITION.center,
  },
  {
    img: whatIsGpt3_img,
    name: "GPT-3",
    description: "A sleek business website template to discover the wonders of ChatGPT-3.",
    tools: ["React", "Javascript", "CSS"],
    website: "https://whatisgpt-3.netlify.app/",
  },
  {
    img: bank_img,
    name: "HooBank",
    description:
      "A sophisticated business website template tailored for HooBank, a fictional financial institution.",
    tools: ["React", "Javascript", "CSS"],
    website: "https://hoobankfinancials.netlify.app/",
    imgPosition: IMG_POSITION.center,
  },
  {
    img: gericht_restaurant_img,
    name: "Gerícht Restaurant",
    description:
      "A visually stunning business website template crafted for Gerícht, a fictional restaurant.",
    tools: ["React", "Javascript", "CSS"],
    website: "https://gerichteats.netlify.app/",
  },
];
