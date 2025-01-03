import WildLensTourImg from './projects images/WildLensTour.png.png'
import TodoImg from './projects images/Todo.png'
import ReactContextImg from './projects images/ReactContext.png'
import ReactRouterImg from './projects images/ReactRouter.png'
import HallBookingImg from './projects images/HallBooking.png'
import CountryWeatherImg from './projects images/CountryWeather.png'
import AiImage from './projects images/AiImage.png'
import todoImg from './projects images/todoImg.png'
import recipeImg from './projects images/recipeImg.png'

import htmlIcon from "../../assets/icons/html-1.svg";
import cssIcon from "../../assets/icons/css-3.svg";
import jsIcon from "../../assets/icons/javascript-1.svg";
import reactIcon from "../../assets/icons/react-2.svg";
import bootstrapIcon from "../../assets/icons/bootstrap-5-1.svg";
import tailwindIcon from "../../assets/icons/tailwind.svg";
import reduxIcon from "../../assets/icons/redux.svg";
import formikIcon from "../../assets/icons/formik.svg";
import axiosIcon from "../../assets/icons/axios.svg";

import nodeJsIcon from "../../assets/icons/nodejs.svg";
import expressIcon from "../../assets/icons/express-109.svg";

import mongoDbIcon from "../../assets/icons/mongodb-icon-2.svg";
import cloudinaryIcon from "../../assets/icons/cloudinary-1.svg";


export const projectsInfo = [
    {
        name: "WildLens Tours",
        img: WildLensTourImg,
        purpose:
          "WildLens is a tour booking app designed to help travelers discover and book eco-conscious, adventure-filled experiences, fostering sustainable tourism while connecting users with nature’s beauty.",
        links: {
          client: "https://github.com/Vijaya-kumar789/wildlensTour-fe",
          server: "https://github.com/Vijaya-kumar789/WildLens-Tour---BE",
          live: "https://tubular-horse-ae26a5.netlify.app/home",
        },
        stack:[reactIcon,bootstrapIcon,formikIcon,axiosIcon,nodeJsIcon,expressIcon,mongoDbIcon]
      },
      {
        name: "AI Image Generation",
        img: AiImage,
        purpose:
          "An AI-powered image generation app that transforms text prompts into stunning visuals. Create unique artwork, designs, or concept images effortlessly with cutting-edge AI, perfect for creatives and professionals alike.",
        links: {
          client: "https://github.com/Vijaya-kumar789/AI_Image_Generation_FE",
          server: "https://github.com/Vijaya-kumar789/AI_Image_Generation_BE",
          live: "https://quiet-fudge-caf4cd.netlify.app/",
        },
        stack:[reactIcon,bootstrapIcon,axiosIcon,nodeJsIcon,expressIcon,mongoDbIcon,cloudinaryIcon]
      },
      {
        name: "Kitchen Whiz Recipe App",
        img: recipeImg,
        purpose:
          "Explore a world of flavors with a recipe app featuring step-by-step guides, personalized meal plans, and cooking tips. Perfect for beginners or seasoned chefs seeking culinary inspiration.",
        links: {
          client: "https://github.com/Vijaya-kumar789/Recipe-App/tree/main/client",
          server: "https://github.com/Vijaya-kumar789/Recipe-App/tree/main/server",
          live: "https://kitchen-whiz.netlify.app/",
        },
        stack:[reactIcon,tailwindIcon,formikIcon,axiosIcon,reduxIcon,nodeJsIcon,expressIcon,mongoDbIcon]
      },
      {
        name: "Todo Focus Flow",
        img: todoImg,
        purpose:
          "The purpose of the Todo app is to help users organize tasks, stay productive, and manage time effectively by providing a simple, intuitive task management system.",
        links: {
          client: "https://github.com/Vijaya-kumar789/Todo-Focus-Flow/tree/main/client",
          server: "https://github.com/Vijaya-kumar789/Todo-Focus-Flow/tree/main/server",
          live: "https://teal-babka-0c39e8.netlify.app/",
        },
        stack:[reactIcon,bootstrapIcon,formikIcon,reduxIcon,axiosIcon,nodeJsIcon,expressIcon,mongoDbIcon]
      },
      {
        name: "React Shopping cart app with Context API",
        img: ReactContextImg,
        purpose:
          "The purpose of the React Shopping Cart app is to enable easy product selection, manage cart state, and provide smooth checkout using Context API",
        links: {
          client: "https://github.com/Vijaya-kumar789/React-ContextApi-Task",
          server: "",
          live: "https://gilded-biscuit-7848a9.netlify.app/",
        },
        stack:[jsIcon,reactIcon,bootstrapIcon]
      },
      // {
      //   name: "Todo Application",
      //   img: TodoImg,
      //   purpose:
      //     "The purpose of the Todo app is to help users organize tasks, stay productive, and manage time effectively by providing a simple, intuitive task management system.",
      //   links: {
      //     client: "https://github.com/Vijaya-kumar789/React-Todo-Task",
      //     server: "",
      //     live: "https://warm-shortbread-89d2f2.netlify.app/",
      //   },
      // },
      {
        name: "Hall-Booking-APIs",
        img: HallBookingImg,
        purpose:
          "APIs for renting halls or rooms for events. Customers need to sign up to book seats.",
        links: {
          client: "",
          server: "https://github.com/Vijaya-kumar789/Hall-Booking-Task",
          live: "",
        },
        stack:[nodeJsIcon,expressIcon]
      },
      
      {
        name: "React app using React Router ",
        img: ReactRouterImg,
        purpose:
          "The React app with React Router is to enable seamless navigation between pages, enhancing user experience in a single-page application.",
        links: {
          client: "https://github.com/Vijaya-kumar789/React-Router-Task",
          server: "",
          live: "https://super-pie-a783df.netlify.app/",
        },
        stack:[jsIcon,reactIcon,bootstrapIcon]
      },
      
      {
        name: "Country wise Weather",
        img: CountryWeatherImg,
        purpose:
          "The app aims to provide users with easy access to real-time weather data, helping them stay informed about global weather conditions.",
        links: {
          client: "https://github.com/Vijaya-kumar789/WeatherRestAPI/",
          server: "",
          live: "https://adorable-biscochitos-f12085.netlify.app/",
        },
        stack:[jsIcon,htmlIcon,cssIcon,bootstrapIcon]
      },
]