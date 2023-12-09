// Importing the icons
import {
  IoFastFood,
  IoFlower,
  IoFootball,
  IoPawSharp,
  IoSchoolSharp,
  IoWaterSharp,
  IoWineSharp,
  IoRocketSharp,
  IoPlanetSharp,
  IoMusicalNotesSharp,
  IoLibrarySharp,
  IoLeafSharp,
  IoIceCreamSharp,
  IoHeartSharp,
} from "react-icons/io5";
import { GiWindmill, GiMountainCave, GiSailboat } from "react-icons/gi";
import {
  MdOutlineVilla,
  MdOutlineLocalLibrary,
  MdOutlineLocalCafe,
  MdOutlineFitnessCenter,
} from "react-icons/md";
import { TbBeach } from "react-icons/tb";
// The data
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description:
      "Properties with easy access to the beach. Ideal for guests who love sunbathing, swimming, or just the refreshing sea breeze.",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description:
      "Properties located near windmills. A unique opportunity for guests to learn about renewable energy and enjoy the picturesque view.",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description:
      "Properties featuring a modern design. Ideal for guests who appreciate contemporary architecture and state-of-the-art amenities.",
  },
  {
    label: "Mountains",
    icon: GiMountainCave,
    description:
      "Properties offering breathtaking mountain views. Ideal for guests who love hiking or just want to enjoy the scenic beauty.",
  },
  {
    label: "Cafe",
    icon: MdOutlineLocalCafe,
    description:
      "Properties featuring an on-site cafe. Perfect for guests who enjoy a good cup of coffee or tea.",
  },
  {
    label: "Gym",
    icon: MdOutlineFitnessCenter,
    description:
      "Properties with a fully-equipped fitness center. Great for guests who like to stay active during their stay.",
  },
  {
    label: "Pets",
    icon: IoPawSharp,
    description:
      "Properties that are pet-friendly. Feel free to bring your furry friends along!",
  },
  {
    label: "School",
    icon: IoSchoolSharp,
    description:
      "Properties conveniently located near a school. A great choice for families!",
  },
  {
    label: "Water Park",
    icon: IoWaterSharp,
    description:
      "Properties close to a water park. Ensuring fun-filled days for both kids and adults!",
  },
  {
    label: "Winery",
    icon: IoWineSharp,
    description:
      "Properties near a winery. Perfect for those who appreciate a good glass of wine!",
  },
  {
    label: "Space",
    icon: IoPlanetSharp,
    description:
      "Properties offering a clear view of the night sky. Perfect for stargazing and space enthusiasts!",
  },
  {
    label: "Music",
    icon: IoMusicalNotesSharp,
    description:
      "Properties close to a music venue. Great for those who enjoy live music performances!",
  },
  {
    label: "Nature",
    icon: IoLeafSharp,
    description:
      "Properties surrounded by nature. Offering a peaceful and refreshing environment!",
  },
  {
    label: "Ice Cream",
    icon: IoIceCreamSharp,
    description:
      "Properties near an ice cream shop. Perfect for those hot summer days!",
  },
  {
    label: "Romantic",
    icon: IoHeartSharp,
    description:
      "Properties offering a romantic setting. Perfect for couples and honeymooners!",
  },
];
