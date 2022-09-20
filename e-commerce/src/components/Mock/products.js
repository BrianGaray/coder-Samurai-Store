const Products = [
  {
    id: "1",
    title: "producto 1",
    price: 100,
    stock: 3,
    category: "shooter",
    img: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=854&resize=1&w=640",
    description:
      "Battlefield™ 1 te transporta a la Primera Guerra Mundial, donde la nueva tecnología y el conflicto internacional cambiaron la guerra para siempre. Participa en todas las batallas, controla vehículos enormes y ejecuta las maniobras que pueden cambiar las tornas de la batalla. El mundo está en guerra. Descubre qué hay más allá de las trincheras.",
  },
  {
    id: "2",
    title: "producto 2",
    price: 100,
    stock: 7,
    category: "action",
    img: "https://a.allegroimg.com/original/1195ed/7e685c7c4abba242c7ff478a230a/CYBERPUNK-2077-PC-STEAM",
    description:
      "Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus decisiones.",
  },
  {
    id: "3",
    title: "producto 3",
    price: 100,
    stock: 5,
    category: "fight",
    img: "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S2_1200x1600-76424286902489f4d9639ac9b735c2b2?h=854&resize=1&w=640",
    description:
      "WWE 2K18 es la nueva entrega de la saga de lucha libra de 2K. Contará con más de 50 luchadores en su rooster original y un modo carrera mejorado, diseñado para que el usuario pueda disfrutar en el universo de WrestleMania desde dos vertientes distintas, Company Man o Fan Favorite. Mejorando gráficos y contando una comunidad online más integrada, WWE 2K18 pretende ser un capítulo más perfeccionado en la franquicia.",
  },
  {
    id: "4",
    title: "producto 4",
    price: 100,
    stock: 5,
    category: "shooter",
    img: "https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-331f59b6877d2bf2194943fcf7a68048_1200x1600-331f59b6877d2bf2194943fcf7a68048?h=854&resize=1&w=640",
    description:
      "WWE 2K18 es la nueva entrega de la saga de lucha libra de 2K. Contará con más de 50 luchadores en su rooster original y un modo carrera mejorado, diseñado para que el usuario pueda disfrutar en el universo de WrestleMania desde dos vertientes distintas, Company Man o Fan Favorite. Mejorando gráficos y contando una comunidad online más integrada, WWE 2K18 pretende ser un capítulo más perfeccionado en la franquicia.",
  },
  {
    id: "5",
    title: "producto 5",
    price: 100,
    stock: 5,
    category: "action",
    img: "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=854&resize=1&w=640",
    description:
      "WWE 2K18 es la nueva entrega de la saga de lucha libra de 2K. Contará con más de 50 luchadores en su rooster original y un modo carrera mejorado, diseñado para que el usuario pueda disfrutar en el universo de WrestleMania desde dos vertientes distintas, Company Man o Fan Favorite. Mejorando gráficos y contando una comunidad online más integrada, WWE 2K18 pretende ser un capítulo más perfeccionado en la franquicia.",
  },
  {
    id: "6",
    title: "producto 6",
    price: 100,
    stock: 5,
    category: "fight",
    img: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640",
    description:
      "WWE 2K18 es la nueva entrega de la saga de lucha libra de 2K. Contará con más de 50 luchadores en su rooster original y un modo carrera mejorado, diseñado para que el usuario pueda disfrutar en el universo de WrestleMania desde dos vertientes distintas, Company Man o Fan Favorite. Mejorando gráficos y contando una comunidad online más integrada, WWE 2K18 pretende ser un capítulo más perfeccionado en la franquicia.",
  },
  {
    id: "7",
    title: "producto 7",
    price: 100,
    stock: 5,
    category: "shooter",
    img: "https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=854&resize=1&w=640",
    description:
      "WWE 2K18 es la nueva entrega de la saga de lucha libra de 2K. Contará con más de 50 luchadores en su rooster original y un modo carrera mejorado, diseñado para que el usuario pueda disfrutar en el universo de WrestleMania desde dos vertientes distintas, Company Man o Fan Favorite. Mejorando gráficos y contando una comunidad online más integrada, WWE 2K18 pretende ser un capítulo más perfeccionado en la franquicia.",
  },
  {
    id: "8",
    title: "producto 8",
    price: 100,
    stock: 5,
    category: "action",
    img: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=854&resize=1&w=640",
    description:
      "WWE 2K18 es la nueva entrega de la saga de lucha libra de 2K. Contará con más de 50 luchadores en su rooster original y un modo carrera mejorado, diseñado para que el usuario pueda disfrutar en el universo de WrestleMania desde dos vertientes distintas, Company Man o Fan Favorite. Mejorando gráficos y contando una comunidad online más integrada, WWE 2K18 pretende ser un capítulo más perfeccionado en la franquicia.",
  },
  {
    id: "9",
    title: "producto 9",
    price: 100,
    stock: 5,
    category: "fight",
    img: "https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-f2a7ae8676457d052c1344ce717dfb7a?h=854&resize=1&w=640",
    description:
      "WWE 2K18 es la nueva entrega de la saga de lucha libra de 2K. Contará con más de 50 luchadores en su rooster original y un modo carrera mejorado, diseñado para que el usuario pueda disfrutar en el universo de WrestleMania desde dos vertientes distintas, Company Man o Fan Favorite. Mejorando gráficos y contando una comunidad online más integrada, WWE 2K18 pretende ser un capítulo más perfeccionado en la franquicia.",
  },
  {
    id: "10",
    title: "producto 10",
    price: 100,
    stock: 5,
    category: "shooter",
    img: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis3Remastered_Crytek_S2_1200x1600-a98a0e5a8215ee2f2b768ec2140f5fd4?h=854&resize=1&w=640",
    description:
      "WWE 2K18 es la nueva entrega de la saga de lucha libra de 2K. Contará con más de 50 luchadores en su rooster original y un modo carrera mejorado, diseñado para que el usuario pueda disfrutar en el universo de WrestleMania desde dos vertientes distintas, Company Man o Fan Favorite. Mejorando gráficos y contando una comunidad online más integrada, WWE 2K18 pretende ser un capítulo más perfeccionado en la franquicia.",
  },
  {
    id: "11",
    title: "producto 11",
    price: 100,
    stock: 5,
    category: "action",
    img: "https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Portrait_Offer_1200x1600-1200x1600-a7811e23904db375486535513d10412f.jpg?h=854&resize=1&w=640",
    description:
      "WWE 2K18 es la nueva entrega de la saga de lucha libra de 2K. Contará con más de 50 luchadores en su rooster original y un modo carrera mejorado, diseñado para que el usuario pueda disfrutar en el universo de WrestleMania desde dos vertientes distintas, Company Man o Fan Favorite. Mejorando gráficos y contando una comunidad online más integrada, WWE 2K18 pretende ser un capítulo más perfeccionado en la franquicia.",
  },
  {
    id: "12",
    title: "producto 12",
    price: 100,
    stock: 5,
    category: "fight",
    img: "https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640",
    description:
      "WWE 2K18 es la nueva entrega de la saga de lucha libra de 2K. Contará con más de 50 luchadores en su rooster original y un modo carrera mejorado, diseñado para que el usuario pueda disfrutar en el universo de WrestleMania desde dos vertientes distintas, Company Man o Fan Favorite. Mejorando gráficos y contando una comunidad online más integrada, WWE 2K18 pretende ser un capítulo más perfeccionado en la franquicia.",
  },
];

export default Products;
