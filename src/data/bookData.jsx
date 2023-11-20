import bookImg from "../assets/book1.jfif"
import{ bookContentAlice, bookContentDinosaur, carnivalOfColorsContent, enchantedForestContent, enchantedKingdomContent, fantasyKingdomsContent, greatInventorsContent, journeyToTheMoonContent, magicalCreaturesContent, mysteriesOfThePyramidsContent, pirateAdventuresContent, robotRumbleContent, robotsOfTheFutureContent, secretGardenContent, secretsOfTheDeepSeaContent, spaceExplorersContent, superheroesUnleashedContent, timeTravelersContent, underTheSeaContent, whaleAdventureContent, wildSafariContent, wondersOfTheRainforestContent } from "./bookContent";
const books = [
  {
    id: 1,
    title: "Adventure in Wonderland",
    description: "Join Alice on her magical journey.",
    image: bookImg,
    category: "Adventure",
    content:bookContentAlice
  },
  {
    id: 2,
    title: "The Dinosaur Guide",
    description: "Learn about the fascinating world of dinosaurs.",
    image: bookImg,
    category: "Education",
    content:bookContentDinosaur
  },
  {
    id: 3,
    title: "Pirate Adventures",
    description: "Set sail with Captain Jack on epic pirate adventures.",
    image: bookImg,
    category: "Adventure",
    content:pirateAdventuresContent
  },
  {
    id: 4,
    title: "Space Explorers",
    description: "Embark on a journey through the stars and explore the cosmos.",
    image: bookImg,
    category: "Science Fiction",
    content:spaceExplorersContent
  },
  {
    id: 5,
    title: "Enchanted Forest",
    description: "Discover the magical creatures of the Enchanted Forest.",
    image: bookImg,
    category: "Fantasy",
    content:enchantedForestContent
  },
  {
    id: 6,
    title: "Under the Sea",
    description: "Dive into the depths of the ocean and meet its mysterious inhabitants.",
    image: bookImg,
    category: "Nature",
    content:underTheSeaContent
  },
  {
    id: 7,
    title: "The Secret Garden",
    description: "Uncover the hidden beauty of a forgotten garden.",
    image: bookImg,
    category: "Mystery",
    content: secretGardenContent
  },
  {
    id: 8,
    title: "Superheroes Unleashed",
    description: "Join the world's mightiest heroes on their quests.",
    image: bookImg,
    category: "Superheroes",
    content: superheroesUnleashedContent
  },
  {
    id: 9,
    title: "Magical Creatures",
    description: "Encounter mythical beings from around the world.",
    image: bookImg,
    category: "Fantasy",
    content: magicalCreaturesContent
  },
  {
    id: 10,
    title: "Robots of the Future",
    description: "Explore the world of advanced robotics and AI.",
    image: bookImg,
    category: "Science Fiction",
    content: robotsOfTheFutureContent
  },
  {
    id: 11,
    title: "Mysteries of the Pyramids",
    description: "Unlock the secrets of ancient Egypt and its pyramids.",
    image: bookImg,
    category: "History",
    content: mysteriesOfThePyramidsContent
  },
  {
    id: 12,
    title: "Wild Safari",
    description: "Embark on a safari and meet the wild animals of Africa.",
    image: bookImg,
    category: "Nature",
    content: wildSafariContent
  },
  {
    id: 13,
    title: "Time Travelers",
    description: "Take a journey through time and explore different eras.",
    image: bookImg,
    category: "Science Fiction",
    content: timeTravelersContent
  },
  {
    id: 14,
    title: "Enchanted Kingdom",
    description: "Visit a realm filled with magical creatures and wonders.",
    image: bookImg,
    category: "Fantasy",
    content:enchantedKingdomContent
  },
  {
    id: 15,
    title: "The Great Inventors",
    description: "Learn about the inventors who changed the world.",
    image: bookImg,
    category: "Education",
    content: greatInventorsContent
  },
  {
    id: 16,
    title: "Journey to the Moon",
    description: "Join astronauts on a mission to the moon.",
    image: bookImg,
    category: "Science Fiction",
    content: journeyToTheMoonContent
  },
  {
    id: 17,
    title: "Wonders of the Rainforest",
    description: "Explore the rich biodiversity of the rainforest.",
    image: bookImg,
    category: "Nature",
    content: wondersOfTheRainforestContent
  },
  {
    id: 18,
    title: "Carnival of Colors",
    description: "Discover the vibrant world of colors and art.",
    image: bookImg,
    category: "Art",
    content: carnivalOfColorsContent
  },
  {
    id: 19,
    title: "Secrets of the Deep Sea",
    description: "Dive into the depths and uncover deep-sea mysteries.",
    image: bookImg,
    category: "Nature",
    content: secretsOfTheDeepSeaContent
  },
  {
    id: 20,
    title: "Fantasy Kingdoms",
    description: "Visit mythical kingdoms with legendary creatures.",
    image: bookImg,
    category: "Fantasy",
    content: fantasyKingdomsContent
  },
  {
    id: 21,
    title: "Whale Adventure",
    description: "Join a friendly whale on an underwater journey.",
    image: bookImg,
    category: "Adventure",
    content: whaleAdventureContent
  },
  {
    id: 22,
    title: "Robot Rumble",
    description: "Watch robots battle it out in the ultimate showdown.",
    image: bookImg,
    category: "Science Fiction",
    content: robotRumbleContent
  },
];

export default books;
