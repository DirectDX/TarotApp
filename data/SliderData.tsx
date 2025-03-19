import { ImageSourcePropType } from "react-native";

export type DecksData = {
  deckName: string;
  image: ImageSourcePropType;
  description: string;
  cards: {
    title: string;
    text: string;
    image: ImageSourcePropType;
  }[];
};

const sampleImage = require("../assets/images/tapa sirenas.jpg"); // Usa una imagen de muestra

export const ImageSlider = [
  {
    deckName: "The Magician",
    image: require("../assets/images/tapa sirenas.jpg"),
    description:
      "The Magician is a card of manifestation. He represents the development of one's first sense of individuality. He can represent a manipulative person or a person who is creative and logical.",
    cards: [
      {
        title: "carta 1",
        text: "descripcion 1",
        image: require("../assets/images/sirenas 2.jpg"),
      },
      {
        title: "carta 2",
        text: "descripcion 2",
        image: require("../assets/images/angeles 1b.jpg"),
      },
    ],
  },
  {
    deckName: "The High Priestess",
    image: require("../assets/images/tapa experiencia.jpg"),
    description:
      "The High Priestess is a card of mystery, stillness and passivity. This card suggests that it is time to retreat and reflect upon the situation and trust your inner instincts to guide you through it.",
    cards: [
      {
        title: "carta 1",
        text: "descripcion 1",
        image: require("../assets/images/experiencia 1.jpg"),
      },
      {
        title: "carta 2",
        text: "descripcion 2",
        image: require("../assets/images/experiencia 1.jpg"),
      },
    ],
  },
  {
    deckName: "The Empress",
    image: require("../assets/images/tapa conex.jpg"),
    description:
      "The Empress is a card of sensuality, beauty, and the feelings of the heart. She can represent the creation of life, romance, art, or new business.",
    cards: [
      {
        title: "carta 1",
        text: "descripcion 1",
        image: require("../assets/images/conexion 1.jpg"),
      },
      {
        title: "carta 2",
        text: "descripcion 2",
        image: require("../assets/images/conexion 1.jpg"),
      },
    ],
  },
  {
    deckName: "The Emperor",
    image: require("../assets/images/tapa dragon.jpg"),
    description:
      "The Emperor is a card of authority, leadership, and structure. He can represent a father figure, boss, or leader.",
    cards: [
      {
        title: "carta 1",
        text: "descripcion 1",
        image: require("../assets/images/dragones 3.jpg"),
      },
      {
        title: "carta 2",
        text: "descripcion 2",
        image: require("../assets/images/dragones 3.jpg"),
      },
    ],
  },
];
