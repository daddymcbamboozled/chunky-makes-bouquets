/* ============================================================
   BLOOM BUILDER — DATA.JS
   ============================================================

   HOW TO REPLACE A FLOWER'S IMAGE WITH YOUR OWN PICTURE:

   1. Name your image file exactly matching the flower's "id" below.
      Example: for id "rose-red", name your file "rose-red.png"
      Accepted formats: .png  .jpg  .jpeg  .svg

   2. Upload it to the "images" folder in your GitHub repository.
      (If the "images" folder doesn't exist yet, create it by clicking
      "Add file" → "Create new file", typing "images/placeholder.txt",
      then committing. Then upload your images into that folder.)

   3. Add one line to that flower's entry below:
         imgUrl: "images/rose-red.png",
      (Add it right after the "origin" line.)

   4. Commit the updated data.js. Done — the website shows your image.

   To go back to the pencil drawing: delete the imgUrl line and commit.
   ============================================================ */

const FLOWERS = [
  {
    id: "rose-red",
    name: "Red Rose",
    tags: ["love"],
    meaning: "Deep romantic love and desire. Red roses have symbolized passion since Ancient Greece — associated with Aphrodite and later the Virgin Mary. Giving a single red rose is one of the oldest and most recognized declarations of love in the world.",
    origin: "Ancient Greek & Roman tradition",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,46)\">\n        <path d=\"M0,0 Q-4,14 -3,30\" stroke=\"#333\" stroke-width=\"2.5\" fill=\"none\"/>\n        <path d=\"M-3,20 Q-14,14 -12,6 Q-7,14 -3,20\" fill=\"#555\"/>\n        <ellipse cx=\"-11\" cy=\"-11\" rx=\"10\" ry=\"7\" fill=\"#111\" opacity=\".85\" transform=\"rotate(-30,-11,-11)\"/>\n        <ellipse cx=\"11\" cy=\"-11\" rx=\"10\" ry=\"7\" fill=\"#222\" opacity=\".85\" transform=\"rotate(30,11,-11)\"/>\n        <ellipse cx=\"0\" cy=\"-20\" rx=\"9\" ry=\"7\" fill=\"#333\" opacity=\".9\"/>\n        <ellipse cx=\"-8\" cy=\"-5\" rx=\"9\" ry=\"6\" fill=\"#111\"/>\n        <ellipse cx=\"8\" cy=\"-5\" rx=\"9\" ry=\"6\" fill=\"#222\"/>\n        <circle cx=\"0\" cy=\"-11\" r=\"6\" fill=\"#000\"/>\n        <circle cx=\"-1\" cy=\"-12\" r=\"2\" fill=\"#444\"/>\n      </g>\n    </svg>",
  },
  {
    id: "rose-yellow",
    name: "Yellow Rose",
    tags: ["joy","loyalty"],
    meaning: "Friendship, warmth, and platonic love. Unlike red roses, yellow roses carry no romantic overtones — they celebrate caring and joy between friends. In the Victorian language of flowers they sometimes meant jealousy, but today they are universally read as cheerful and warm.",
    origin: "Victorian floriography",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,46)\">\n        <path d=\"M0,0 Q-4,14 -3,30\" stroke=\"#333\" stroke-width=\"2.5\" fill=\"none\"/>\n        <path d=\"M-3,20 Q-14,14 -12,6 Q-7,14 -3,20\" fill=\"#555\"/>\n        <ellipse cx=\"-11\" cy=\"-11\" rx=\"10\" ry=\"7\" fill=\"#aaa\" opacity=\".85\" transform=\"rotate(-30,-11,-11)\"/>\n        <ellipse cx=\"11\" cy=\"-11\" rx=\"10\" ry=\"7\" fill=\"#999\" opacity=\".85\" transform=\"rotate(30,11,-11)\"/>\n        <ellipse cx=\"0\" cy=\"-20\" rx=\"9\" ry=\"7\" fill=\"#ccc\" opacity=\".9\"/>\n        <ellipse cx=\"-8\" cy=\"-5\" rx=\"9\" ry=\"6\" fill=\"#aaa\"/>\n        <ellipse cx=\"8\" cy=\"-5\" rx=\"9\" ry=\"6\" fill=\"#bbb\"/>\n        <circle cx=\"0\" cy=\"-11\" r=\"6\" fill=\"#666\"/>\n        <circle cx=\"-1\" cy=\"-12\" r=\"2\" fill=\"#888\"/>\n      </g>\n    </svg>",
  },
  {
    id: "peony",
    name: "Peony",
    tags: ["love","joy"],
    meaning: "Prosperity, romance, and honor. In Chinese culture the peony is the \"king of flowers,\" representing wealth and good fortune. In Western tradition it stands for a happy marriage and is the birth flower of November. It's the state flower of Indiana and one of the most popular wedding flowers.",
    origin: "Chinese Tang dynasty, Victorian tradition",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,46)\">\n        <path d=\"M0,0 Q4,12 2,28\" stroke=\"#333\" stroke-width=\"2.5\" fill=\"none\"/>\n        <path d=\"M2,16 Q12,10 14,4 Q8,12 2,16\" fill=\"#555\"/>\n        <circle cx=\"0\" cy=\"-14\" r=\"16\" fill=\"#ccc\" opacity=\".4\"/>\n        <ellipse cx=\"-10\" cy=\"-18\" rx=\"8\" ry=\"6\" fill=\"#aaa\" transform=\"rotate(-20,-10,-18)\"/>\n        <ellipse cx=\"10\" cy=\"-18\" rx=\"8\" ry=\"6\" fill=\"#999\" transform=\"rotate(20,10,-18)\"/>\n        <ellipse cx=\"-14\" cy=\"-10\" rx=\"7\" ry=\"5\" fill=\"#bbb\" transform=\"rotate(-60,-14,-10)\"/>\n        <ellipse cx=\"14\" cy=\"-10\" rx=\"7\" ry=\"5\" fill=\"#aaa\" transform=\"rotate(60,14,-10)\"/>\n        <ellipse cx=\"0\" cy=\"-23\" rx=\"7\" ry=\"5\" fill=\"#ddd\"/>\n        <circle cx=\"0\" cy=\"-14\" r=\"7\" fill=\"#eee\"/>\n        <circle cx=\"-2\" cy=\"-15\" r=\"3\" fill=\"#bbb\"/>\n        <circle cx=\"2\" cy=\"-13\" r=\"2.5\" fill=\"#ccc\"/>\n      </g>\n    </svg>",
  },
  {
    id: "lavender",
    name: "Lavender",
    tags: ["loyalty","mystery"],
    meaning: "Devotion, calm, and distrust. Lavender holds a dual symbolism: it represents serenity and faithful love, but in the Victorian language of flowers it also historically carried the meaning \"I don't fully trust you.\" The plant has been used medicinally and ritually since ancient Egypt for purification.",
    origin: "Ancient Egypt, Victorian floriography",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,52)\">\n        <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"28\" stroke=\"#333\" stroke-width=\"2\"/>\n        <path d=\"M0,10 Q-10,5 -10,-2 Q-6,5 0,10\" fill=\"#555\"/>\n        <path d=\"M0,10 Q10,5 10,-2 Q6,5 0,10\" fill=\"#555\"/>\n        <ellipse cx=\"-3\" cy=\"-5\" rx=\"4\" ry=\"6\" fill=\"#666\" opacity=\".85\"/>\n        <ellipse cx=\"3\" cy=\"-8\" rx=\"4\" ry=\"6\" fill=\"#444\" opacity=\".85\"/>\n        <ellipse cx=\"-3\" cy=\"-16\" rx=\"3.5\" ry=\"5\" fill=\"#777\" opacity=\".9\"/>\n        <ellipse cx=\"3\" cy=\"-20\" rx=\"3\" ry=\"5\" fill=\"#555\" opacity=\".9\"/>\n        <ellipse cx=\"0\" cy=\"-27\" rx=\"2.5\" ry=\"4\" fill=\"#888\"/>\n      </g>\n    </svg>",
  },
  {
    id: "lily-white",
    name: "White Lily",
    tags: ["hope","grief"],
    meaning: "Purity, renewal, and the soul restored to innocence. White lilies are central to Christian Easter symbolism — they represent resurrection. They are also traditional funeral flowers across many Western cultures, placed on graves to signify that the departed soul has been returned to purity.",
    origin: "Christian symbolism, ancient Greek mythology",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,48)\">\n        <path d=\"M0,0 Q-3,12 -2,28\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n        <path d=\"M-2,18 Q-12,12 -10,6\" stroke=\"#555\" stroke-width=\"1.5\" fill=\"none\"/>\n        <ellipse cx=\"-4\" cy=\"-20\" rx=\"5\" ry=\"14\" fill=\"#eee\" stroke=\"#999\" stroke-width=\".8\" transform=\"rotate(-25,-4,-20)\"/>\n        <ellipse cx=\"4\" cy=\"-20\" rx=\"5\" ry=\"14\" fill=\"#eee\" stroke=\"#999\" stroke-width=\".8\" transform=\"rotate(25,4,-20)\"/>\n        <ellipse cx=\"-12\" cy=\"-12\" rx=\"5\" ry=\"14\" fill=\"#e8e8e8\" stroke=\"#999\" stroke-width=\".8\" transform=\"rotate(-65,-12,-12)\"/>\n        <ellipse cx=\"12\" cy=\"-12\" rx=\"5\" ry=\"14\" fill=\"#e8e8e8\" stroke=\"#999\" stroke-width=\".8\" transform=\"rotate(65,12,-12)\"/>\n        <ellipse cx=\"0\" cy=\"-22\" rx=\"5\" ry=\"14\" fill=\"#eee\" stroke=\"#999\" stroke-width=\".8\"/>\n        <line x1=\"-2\" y1=\"-12\" x2=\"-4\" y2=\"-22\" stroke=\"#666\" stroke-width=\"1\"/>\n        <line x1=\"0\" y1=\"-12\" x2=\"0\" y2=\"-24\" stroke=\"#666\" stroke-width=\"1\"/>\n        <line x1=\"2\" y1=\"-12\" x2=\"4\" y2=\"-22\" stroke=\"#666\" stroke-width=\"1\"/>\n        <circle cx=\"-4\" cy=\"-23\" r=\"1.5\" fill=\"#888\"/>\n        <circle cx=\"0\" cy=\"-25\" r=\"1.5\" fill=\"#888\"/>\n        <circle cx=\"4\" cy=\"-23\" r=\"1.5\" fill=\"#888\"/>\n      </g>\n    </svg>",
  },
  {
    id: "forget-me-not",
    name: "Forget-Me-Not",
    tags: ["memory","love"],
    meaning: "True love and remembrance. According to German medieval legend, a knight picking these flowers by a river was swept away by the current, crying \"Vergiss mein nicht!\" (forget me not!). They are worn to remember those who have died and are the official symbol of Alzheimer's Disease International.",
    origin: "German medieval legend, 15th century",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,52)\">\n        <path d=\"M0,0 Q-4,12 -4,26\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n        <path d=\"M-4,16 Q-12,12 -12,6\" stroke=\"#555\" stroke-width=\"1.2\" fill=\"none\"/>\n        <g transform=\"translate(-6,-14)\">\n          <circle cx=\"0\" cy=\"-5\" r=\"3\" fill=\"#666\"/>\n          <circle cx=\"4.3\" cy=\"-2.5\" r=\"3\" fill=\"#777\"/>\n          <circle cx=\"4.3\" cy=\"2.5\" r=\"3\" fill=\"#666\"/>\n          <circle cx=\"0\" cy=\"5\" r=\"3\" fill=\"#777\"/>\n          <circle cx=\"-4.3\" cy=\"2.5\" r=\"3\" fill=\"#666\"/>\n          <circle cx=\"-4.3\" cy=\"-2.5\" r=\"3\" fill=\"#777\"/>\n          <circle cx=\"0\" cy=\"0\" r=\"2\" fill=\"#eee\"/>\n        </g>\n        <g transform=\"translate(4,-26)\">\n          <circle cx=\"0\" cy=\"-5\" r=\"2.5\" fill=\"#666\"/>\n          <circle cx=\"3.5\" cy=\"-2\" r=\"2.5\" fill=\"#888\"/>\n          <circle cx=\"3.5\" cy=\"2\" r=\"2.5\" fill=\"#666\"/>\n          <circle cx=\"0\" cy=\"5\" r=\"2.5\" fill=\"#888\"/>\n          <circle cx=\"-3.5\" cy=\"2\" r=\"2.5\" fill=\"#666\"/>\n          <circle cx=\"-3.5\" cy=\"-2\" r=\"2.5\" fill=\"#888\"/>\n          <circle cx=\"0\" cy=\"0\" r=\"1.8\" fill=\"#eee\"/>\n        </g>\n      </g>\n    </svg>",
  },
  {
    id: "tulip-red",
    name: "Red Tulip",
    tags: ["love"],
    meaning: "A declaration of love — \"believe me, I love you.\" Tulips originated in Central Asia and were wildly coveted in Ottoman Turkey. The red variety specifically means passion and perfect love. During Tulipomania in 1630s Holland, single bulbs sold for the price of a house.",
    origin: "Ottoman Empire, 17th century Netherlands",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,50)\">\n        <path d=\"M0,0 Q2,10 1,28\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n        <path d=\"M1,18 Q10,14 12,8 Q6,14 1,18\" fill=\"#555\"/>\n        <path d=\"M-10,-8 Q-12,-22 0,-28 Q12,-22 10,-8 Q5,0 0,2 Q-5,0 -10,-8Z\" fill=\"#222\"/>\n        <path d=\"M0,-28 Q0,-10 0,2\" stroke=\"#555\" stroke-width=\"1\" fill=\"none\" opacity=\".5\"/>\n        <path d=\"M-10,-8 Q-6,-18 0,-22 Q-8,-16 -10,-8\" fill=\"#555\" opacity=\".4\"/>\n      </g>\n    </svg>",
  },
  {
    id: "tulip-purple",
    name: "Purple Tulip",
    tags: ["mystery","love"],
    meaning: "Royalty and admiration. Purple flowers are historically rare in nature, making purple tulips symbols of nobility and prestige. In the Victorian language of flowers they mean \"I admire you\" — a more dignified, considered declaration than the boldness of the red tulip.",
    origin: "Victorian floriography",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,50)\">\n        <path d=\"M0,0 Q2,10 1,28\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n        <path d=\"M1,18 Q10,14 12,8 Q6,14 1,18\" fill=\"#555\"/>\n        <path d=\"M-10,-8 Q-12,-22 0,-28 Q12,-22 10,-8 Q5,0 0,2 Q-5,0 -10,-8Z\" fill=\"#444\"/>\n        <path d=\"M0,-28 Q0,-10 0,2\" stroke=\"#777\" stroke-width=\"1\" fill=\"none\" opacity=\".5\"/>\n        <path d=\"M-10,-8 Q-6,-18 0,-22 Q-8,-16 -10,-8\" fill=\"#888\" opacity=\".35\"/>\n      </g>\n    </svg>",
  },
  {
    id: "daisy",
    name: "Daisy",
    tags: ["hope","joy"],
    meaning: "Innocence, new beginnings, and loyal love. The name comes from Old English \"dæges ēage\" — the day's eye — because it opens at dawn. Daisies symbolize \"I'll never tell\" in floriography and appear in Celtic mythology as the flowers of new mothers, sprung from the stars.",
    origin: "Old English folklore, Celtic mythology",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,46)\">\n        <path d=\"M0,0 Q-2,12 -1,28\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n        <path d=\"M-1,18 Q-10,14 -10,8\" stroke=\"#555\" stroke-width=\"1.5\" fill=\"none\"/>\n        <ellipse cx=\"0\" cy=\"-20\" rx=\"3.5\" ry=\"8\" fill=\"#fff\" stroke=\"#999\" stroke-width=\".8\"/>\n        <ellipse cx=\"14\" cy=\"-14\" rx=\"3.5\" ry=\"8\" fill=\"#fff\" stroke=\"#999\" stroke-width=\".8\" transform=\"rotate(60,14,-14)\"/>\n        <ellipse cx=\"14\" cy=\"-6\" rx=\"3.5\" ry=\"8\" fill=\"#fff\" stroke=\"#999\" stroke-width=\".8\" transform=\"rotate(120,14,-6)\"/>\n        <ellipse cx=\"0\" cy=\"0\" rx=\"3.5\" ry=\"8\" fill=\"#fff\" stroke=\"#999\" stroke-width=\".8\" transform=\"rotate(180,0,0)\"/>\n        <ellipse cx=\"-14\" cy=\"-6\" rx=\"3.5\" ry=\"8\" fill=\"#fff\" stroke=\"#999\" stroke-width=\".8\" transform=\"rotate(-120,-14,-6)\"/>\n        <ellipse cx=\"-14\" cy=\"-14\" rx=\"3.5\" ry=\"8\" fill=\"#fff\" stroke=\"#999\" stroke-width=\".8\" transform=\"rotate(-60,-14,-14)\"/>\n        <circle cx=\"0\" cy=\"-12\" r=\"7\" fill=\"#bbb\"/>\n        <circle cx=\"0\" cy=\"-12\" r=\"4\" fill=\"#888\"/>\n      </g>\n    </svg>",
  },
  {
    id: "sunflower",
    name: "Sunflower",
    tags: ["loyalty","joy"],
    meaning: "Adoration and unwavering faith. Young sunflowers track the sun via heliotropism — in Greek myth this mirrors Clytie's eternal devotion to Apollo. They also symbolize long life in Chinese culture, and the sunflower is Ukraine's national flower, representing peace and resilience.",
    origin: "Ancient Greek mythology, Aztec culture",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,46)\">\n        <path d=\"M0,0 Q-2,12 -1,28\" stroke=\"#333\" stroke-width=\"2.5\" fill=\"none\"/>\n        <path d=\"M-1,16 Q-12,10 -12,4\" stroke=\"#555\" stroke-width=\"1.5\" fill=\"none\"/>\n        <ellipse cx=\"0\" cy=\"-22\" rx=\"4\" ry=\"10\" fill=\"#ccc\"/>\n        <ellipse cx=\"15\" cy=\"-16\" rx=\"4\" ry=\"10\" fill=\"#bbb\" transform=\"rotate(52,15,-16)\"/>\n        <ellipse cx=\"19\" cy=\"-3\" rx=\"4\" ry=\"10\" fill=\"#ccc\" transform=\"rotate(104,19,-3)\"/>\n        <ellipse cx=\"12\" cy=\"10\" rx=\"4\" ry=\"10\" fill=\"#bbb\" transform=\"rotate(156,12,10)\"/>\n        <ellipse cx=\"-12\" cy=\"10\" rx=\"4\" ry=\"10\" fill=\"#ccc\" transform=\"rotate(-156,-12,10)\"/>\n        <ellipse cx=\"-19\" cy=\"-3\" rx=\"4\" ry=\"10\" fill=\"#bbb\" transform=\"rotate(-104,-19,-3)\"/>\n        <ellipse cx=\"-15\" cy=\"-16\" rx=\"4\" ry=\"10\" fill=\"#ccc\" transform=\"rotate(-52,-15,-16)\"/>\n        <circle cx=\"0\" cy=\"-10\" r=\"10\" fill=\"#222\"/>\n        <circle cx=\"0\" cy=\"-10\" r=\"7\" fill=\"#111\"/>\n        <circle cx=\"-2\" cy=\"-12\" r=\"1.5\" fill=\"#444\" opacity=\".8\"/>\n        <circle cx=\"2\" cy=\"-10\" r=\"1.5\" fill=\"#444\" opacity=\".8\"/>\n        <circle cx=\"-1\" cy=\"-8\" r=\"1.5\" fill=\"#444\" opacity=\".8\"/>\n      </g>\n    </svg>",
  },
  {
    id: "cherry-blossom",
    name: "Cherry Blossom",
    tags: ["joy","grief"],
    meaning: "The beauty of impermanence. In Japan (sakura) they embody mono no aware — \"the pathos of things\" — because they bloom for only one to two weeks before falling. Samurai embraced them as a metaphor for life's brief, fierce beauty. Hanami (flower-viewing parties) have been held for over a thousand years.",
    origin: "Japanese Shinto tradition, samurai culture",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,50)\">\n        <path d=\"M0,0 Q4,8 8,20\" stroke=\"#444\" stroke-width=\"2\" fill=\"none\"/>\n        <path d=\"M4,10 Q12,8 16,2 Q8,8 4,10\" fill=\"#555\"/>\n        <path d=\"M0,0 Q-6,6 -10,18\" stroke=\"#444\" stroke-width=\"1.5\" fill=\"none\"/>\n        <g transform=\"translate(10,-6)\">\n          <ellipse cx=\"0\" cy=\"-5\" rx=\"4\" ry=\"6\" fill=\"#ddd\"/>\n          <ellipse cx=\"4.8\" cy=\"-1.5\" rx=\"4\" ry=\"6\" fill=\"#ccc\" transform=\"rotate(72,4.8,-1.5)\"/>\n          <ellipse cx=\"3\" cy=\"4\" rx=\"4\" ry=\"6\" fill=\"#ddd\" transform=\"rotate(144,3,4)\"/>\n          <ellipse cx=\"-3\" cy=\"4\" rx=\"4\" ry=\"6\" fill=\"#ccc\" transform=\"rotate(-144,-3,4)\"/>\n          <ellipse cx=\"-4.8\" cy=\"-1.5\" rx=\"4\" ry=\"6\" fill=\"#ddd\" transform=\"rotate(-72,-4.8,-1.5)\"/>\n          <circle cx=\"0\" cy=\"0\" r=\"2.5\" fill=\"#fff\"/>\n        </g>\n        <g transform=\"translate(-8,-18)\">\n          <ellipse cx=\"0\" cy=\"-4\" rx=\"3\" ry=\"5\" fill=\"#ddd\"/>\n          <ellipse cx=\"3.8\" cy=\"-1.2\" rx=\"3\" ry=\"5\" fill=\"#ccc\" transform=\"rotate(72,3.8,-1.2)\"/>\n          <ellipse cx=\"2.3\" cy=\"3.2\" rx=\"3\" ry=\"5\" fill=\"#ddd\" transform=\"rotate(144,2.3,3.2)\"/>\n          <ellipse cx=\"-2.3\" cy=\"3.2\" rx=\"3\" ry=\"5\" fill=\"#ccc\" transform=\"rotate(-144,-2.3,3.2)\"/>\n          <ellipse cx=\"-3.8\" cy=\"-1.2\" rx=\"3\" ry=\"5\" fill=\"#ddd\" transform=\"rotate(-72,-3.8,-1.2)\"/>\n          <circle cx=\"0\" cy=\"0\" r=\"2\" fill=\"#fff\"/>\n        </g>\n        <ellipse cx=\"16\" cy=\"-30\" rx=\"2.5\" ry=\"4\" fill=\"#ddd\" transform=\"rotate(30,16,-30)\" opacity=\".65\"/>\n      </g>\n    </svg>",
  },
  {
    id: "iris",
    name: "Blue Iris",
    tags: ["hope","loyalty"],
    meaning: "Hope, courage, and wisdom. Named after the Greek goddess of the rainbow, who was a messenger between heaven and earth. The iris is the basis of France's fleur-de-lis and the national symbol of France. Blue irises represent faith and hope, and were traditionally placed on the graves of French soldiers.",
    origin: "Ancient Greece, French heraldry",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,48)\">\n        <path d=\"M0,0 Q-2,12 -1,26\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n        <path d=\"M-1,16 Q-10,12 -10,6\" stroke=\"#555\" stroke-width=\"1.5\" fill=\"none\"/>\n        <ellipse cx=\"-12\" cy=\"-12\" rx=\"5\" ry=\"12\" fill=\"#555\" opacity=\".8\" transform=\"rotate(-30,-12,-12)\"/>\n        <ellipse cx=\"12\" cy=\"-12\" rx=\"5\" ry=\"12\" fill=\"#444\" opacity=\".8\" transform=\"rotate(30,12,-12)\"/>\n        <ellipse cx=\"0\" cy=\"-22\" rx=\"5\" ry=\"12\" fill=\"#666\" opacity=\".9\"/>\n        <ellipse cx=\"-8\" cy=\"-8\" rx=\"4\" ry=\"9\" fill=\"#333\" opacity=\".75\" transform=\"rotate(-10,-8,-8)\"/>\n        <ellipse cx=\"8\" cy=\"-8\" rx=\"4\" ry=\"9\" fill=\"#333\" opacity=\".75\" transform=\"rotate(10,8,-8)\"/>\n        <ellipse cx=\"0\" cy=\"-10\" rx=\"4\" ry=\"7\" fill=\"#eee\"/>\n        <ellipse cx=\"0\" cy=\"-10\" rx=\"2.5\" ry=\"5\" fill=\"#ddd\"/>\n      </g>\n    </svg>",
  },
  {
    id: "carnation-pink",
    name: "Pink Carnation",
    tags: ["love","memory"],
    meaning: "A mother's undying love. In Christian legend, pink carnations first bloomed where the Virgin Mary's tears fell at the crucifixion. Anna Jarvis wore one at the first official Mother's Day service in 1907, and since then pink carnations have become the worldwide symbol of motherhood.",
    origin: "Christian legend, Mother's Day 1907",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,46)\">\n        <path d=\"M0,0 Q-3,12 -2,28\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n        <path d=\"M-2,18 Q-12,12 -12,6\" stroke=\"#555\" stroke-width=\"1.5\" fill=\"none\"/>\n        <path d=\"M-8,-8 Q-12,-20 -4,-24 Q0,-26 4,-24 Q12,-20 8,-8 Q4,-4 0,-2 Q-4,-4 -8,-8Z\" fill=\"#bbb\"/>\n        <path d=\"M-14,-10 Q-18,-20 -10,-24 Q-4,-20 -8,-8 Q-10,-4 -14,-10Z\" fill=\"#999\" opacity=\".8\"/>\n        <path d=\"M14,-10 Q18,-20 10,-24 Q4,-20 8,-8 Q10,-4 14,-10Z\" fill=\"#999\" opacity=\".8\"/>\n        <path d=\"M-4,-6 Q-8,-16 -2,-22 Q0,-14 0,-2 Q-2,-2 -4,-6Z\" fill=\"#ddd\" opacity=\".5\"/>\n        <path d=\"M4,-6 Q8,-16 2,-22 Q0,-14 0,-2 Q2,-2 4,-6Z\" fill=\"#ddd\" opacity=\".5\"/>\n      </g>\n    </svg>",
  },
  {
    id: "magnolia",
    name: "Magnolia",
    tags: ["hope","loyalty"],
    meaning: "Dignity, nobility, and perseverance. Magnolias are among the oldest flowering plants on Earth — they evolved ~95 million years ago before bees existed, pollinated by beetles. In the American South they symbolize endurance. In China they represent purity of spirit and are associated with the Tang dynasty court.",
    origin: "Chinese Tang dynasty, Southern US folklore",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,48)\">\n        <path d=\"M0,0 Q-2,12 -1,28\" stroke=\"#444\" stroke-width=\"2\" fill=\"none\"/>\n        <path d=\"M-1,18 Q-12,12 -12,6\" stroke=\"#555\" stroke-width=\"1.5\" fill=\"none\"/>\n        <ellipse cx=\"-12\" cy=\"-18\" rx=\"6\" ry=\"13\" fill=\"#eee\" stroke=\"#999\" stroke-width=\".5\" transform=\"rotate(-30,-12,-18)\"/>\n        <ellipse cx=\"12\" cy=\"-18\" rx=\"6\" ry=\"13\" fill=\"#ddd\" stroke=\"#999\" stroke-width=\".5\" transform=\"rotate(30,12,-18)\"/>\n        <ellipse cx=\"0\" cy=\"-24\" rx=\"6\" ry=\"13\" fill=\"#f0f0f0\" stroke=\"#999\" stroke-width=\".5\"/>\n        <ellipse cx=\"-14\" cy=\"-8\" rx=\"5\" ry=\"11\" fill=\"#e8e8e8\" stroke=\"#999\" stroke-width=\".5\" transform=\"rotate(-70,-14,-8)\"/>\n        <ellipse cx=\"14\" cy=\"-8\" rx=\"5\" ry=\"11\" fill=\"#eee\" stroke=\"#999\" stroke-width=\".5\" transform=\"rotate(70,14,-8)\"/>\n        <ellipse cx=\"0\" cy=\"-14\" rx=\"5\" ry=\"10\" fill=\"#f8f8f8\"/>\n        <ellipse cx=\"0\" cy=\"-14\" rx=\"3\" ry=\"5\" fill=\"#888\"/>\n        <ellipse cx=\"0\" cy=\"-14\" rx=\"2\" ry=\"4\" fill=\"#666\"/>\n      </g>\n    </svg>",
  },
  {
    id: "poppy-red",
    name: "Red Poppy",
    tags: ["memory","grief"],
    meaning: "Remembrance of fallen soldiers. Poppies grew wild over the disturbed soil of WWI battlefields in Flanders, Belgium. After Lieutenant Colonel John McCrae's 1915 poem \"In Flanders Fields,\" the red poppy became the international symbol of wartime sacrifice. Worn every November 11th (Remembrance Day).",
    origin: "John McCrae, 1915 — Flanders, Belgium",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,46)\">\n        <path d=\"M0,0 Q-4,10 -3,26\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n        <path d=\"M-3,16 Q-14,10 -14,4 Q-8,10 -3,16\" fill=\"#555\"/>\n        <ellipse cx=\"-10\" cy=\"-14\" rx=\"10\" ry=\"13\" fill=\"#111\" opacity=\".85\" transform=\"rotate(-20,-10,-14)\"/>\n        <ellipse cx=\"10\" cy=\"-14\" rx=\"10\" ry=\"13\" fill=\"#222\" opacity=\".85\" transform=\"rotate(20,10,-14)\"/>\n        <ellipse cx=\"-6\" cy=\"-22\" rx=\"9\" ry=\"12\" fill=\"#111\" opacity=\".9\" transform=\"rotate(-10,-6,-22)\"/>\n        <ellipse cx=\"6\" cy=\"-22\" rx=\"9\" ry=\"12\" fill=\"#222\" opacity=\".9\" transform=\"rotate(10,6,-22)\"/>\n        <circle cx=\"0\" cy=\"-14\" r=\"7\" fill=\"#000\"/>\n        <circle cx=\"-2\" cy=\"-15\" r=\"1.5\" fill=\"#333\" opacity=\".8\"/>\n        <circle cx=\"2\" cy=\"-13\" r=\"1.5\" fill=\"#333\" opacity=\".8\"/>\n      </g>\n    </svg>",
  },
  {
    id: "chrysanthemum",
    name: "Chrysanthemum",
    tags: ["loyalty","grief"],
    meaning: "Long life and fidelity in Asia — but grief in Europe. In Japan it is the Imperial family's emblem, symbolizing longevity and rebirth. In China it represents autumn and renewal. In France, Italy, and Belgium it is strictly a funeral flower, placed on graves. Context matters enormously with this one.",
    origin: "Chinese cultivation c. 15th century BC",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(40,44)\">\n        <path d=\"M0,2 Q-2,14 -1,30\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n        <path d=\"M-1,20 Q-12,14 -12,8\" stroke=\"#555\" stroke-width=\"1.5\" fill=\"none\"/>\n        <g opacity=\".9\">\n          <ellipse cx=\"0\" cy=\"-20\" rx=\"3\" ry=\"9\" fill=\"#ccc\"/>\n          <ellipse cx=\"8\" cy=\"-18\" rx=\"3\" ry=\"9\" fill=\"#bbb\" transform=\"rotate(40,8,-18)\"/>\n          <ellipse cx=\"14\" cy=\"-12\" rx=\"3\" ry=\"9\" fill=\"#ccc\" transform=\"rotate(80,14,-12)\"/>\n          <ellipse cx=\"15\" cy=\"-4\" rx=\"3\" ry=\"9\" fill=\"#bbb\" transform=\"rotate(110,15,-4)\"/>\n          <ellipse cx=\"12\" cy=\"6\" rx=\"3\" ry=\"9\" fill=\"#ccc\" transform=\"rotate(140,12,6)\"/>\n          <ellipse cx=\"4\" cy=\"10\" rx=\"3\" ry=\"9\" fill=\"#bbb\" transform=\"rotate(170,4,10)\"/>\n          <ellipse cx=\"-4\" cy=\"10\" rx=\"3\" ry=\"9\" fill=\"#ccc\" transform=\"rotate(-170,-4,10)\"/>\n          <ellipse cx=\"-12\" cy=\"6\" rx=\"3\" ry=\"9\" fill=\"#bbb\" transform=\"rotate(-140,-12,6)\"/>\n          <ellipse cx=\"-15\" cy=\"-4\" rx=\"3\" ry=\"9\" fill=\"#ccc\" transform=\"rotate(-110,-15,-4)\"/>\n          <ellipse cx=\"-14\" cy=\"-12\" rx=\"3\" ry=\"9\" fill=\"#bbb\" transform=\"rotate(-80,-14,-12)\"/>\n          <ellipse cx=\"-8\" cy=\"-18\" rx=\"3\" ry=\"9\" fill=\"#ccc\" transform=\"rotate(-40,-8,-18)\"/>\n        </g>\n        <circle cx=\"0\" cy=\"-8\" r=\"6\" fill=\"#444\"/>\n        <circle cx=\"0\" cy=\"-8\" r=\"3\" fill=\"#222\"/>\n      </g>\n    </svg>",
  },
  {
    id: "chamomile",
    name: "Chamomile",
    tags: ["comfort","rest"],
    meaning: "Patience, comfort through adversity, and the gift of rest. Chamomile has been documented since ancient Egypt as a symbol of calm and resilience — in the Victorian language of flowers it specifically meant \"energy in adversity.\" Give it to say: slow down, breathe, you've earned some rest.",
    origin: "Ancient Egypt; Victorian floriography",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(40,48)\"><path d=\"M0,0 Q2,12 1,28\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/><path d=\"M1,18 Q10,14 12,8 Q7,14 1,18\" fill=\"#555\"/><ellipse cx=\"0\" cy=\"-6\" rx=\"5\" ry=\"5\" fill=\"#ccc\" stroke=\"#888\" stroke-width=\".8\"/><ellipse cx=\"0\" cy=\"-17\" rx=\"3\" ry=\"7\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".7\"/><ellipse cx=\"6\" cy=\"-15\" rx=\"3\" ry=\"7\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".7\" transform=\"rotate(45,6,-15)\"/><ellipse cx=\"10\" cy=\"-9\" rx=\"3\" ry=\"7\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".7\" transform=\"rotate(90,10,-9)\"/><ellipse cx=\"9\" cy=\"-2\" rx=\"3\" ry=\"7\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".7\" transform=\"rotate(130,9,-2)\"/><ellipse cx=\"-6\" cy=\"-15\" rx=\"3\" ry=\"7\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".7\" transform=\"rotate(-45,-6,-15)\"/><ellipse cx=\"-10\" cy=\"-9\" rx=\"3\" ry=\"7\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".7\" transform=\"rotate(-90,-10,-9)\"/><ellipse cx=\"-9\" cy=\"-2\" rx=\"3\" ry=\"7\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".7\" transform=\"rotate(-130,-9,-2)\"/><circle cx=\"0\" cy=\"-6\" r=\"5\" fill=\"#bbb\"/><circle cx=\"0\" cy=\"-6\" r=\"2.5\" fill=\"#999\"/></g></svg>",
  },
  {
    id: "alstroemeria",
    name: "Alstroemeria",
    tags: ["friendship","support"],
    meaning: "Mutual support, devotion through hardship, and friendship that endures. The Alstroemeria's twisted leaves — which grow upside-down, rotating as they rise — became a Victorian symbol of the trials friends help each other turn right-side up. It is specifically the flower given to someone going through a difficult time.",
    origin: "Victorian floriography; named for botanist Clas Alströmer, 1753",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(40,50)\"><path d=\"M0,0 Q-3,10 -2,26\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/><path d=\"M-2,16 Q-12,10 -12,4 Q-7,10 -2,16\" fill=\"#555\"/><ellipse cx=\"-8\" cy=\"-14\" rx=\"5\" ry=\"11\" fill=\"#ddd\" stroke=\"#888\" stroke-width=\".8\" transform=\"rotate(-35,-8,-14)\"/><ellipse cx=\"8\" cy=\"-14\" rx=\"5\" ry=\"11\" fill=\"#ccc\" stroke=\"#888\" stroke-width=\".8\" transform=\"rotate(35,8,-14)\"/><ellipse cx=\"0\" cy=\"-20\" rx=\"5\" ry=\"11\" fill=\"#eee\" stroke=\"#999\" stroke-width=\".8\"/><ellipse cx=\"-12\" cy=\"-8\" rx=\"4\" ry=\"9\" fill=\"#ddd\" stroke=\"#888\" stroke-width=\".7\" transform=\"rotate(-75,-12,-8)\"/><ellipse cx=\"12\" cy=\"-8\" rx=\"4\" ry=\"9\" fill=\"#ccc\" stroke=\"#888\" stroke-width=\".7\" transform=\"rotate(75,12,-8)\"/><line x1=\"-5\" y1=\"-16\" x2=\"-7\" y2=\"-23\" stroke=\"#666\" stroke-width=\".8\"/><line x1=\"0\" y1=\"-18\" x2=\"0\" y2=\"-25\" stroke=\"#666\" stroke-width=\".8\"/><line x1=\"5\" y1=\"-16\" x2=\"7\" y2=\"-23\" stroke=\"#666\" stroke-width=\".8\"/><circle cx=\"-7\" cy=\"-24\" r=\"1.5\" fill=\"#888\"/><circle cx=\"0\" cy=\"-26\" r=\"1.5\" fill=\"#888\"/><circle cx=\"7\" cy=\"-24\" r=\"1.5\" fill=\"#888\"/></g></svg>",
  },
  {
    id: "hyacinth-blue",
    name: "Blue Hyacinth",
    tags: ["grief","comfort"],
    meaning: "Deep sorrow and the sincere wish to console. In Greek myth, the god Apollo accidentally killed his beloved Hyacinthus, and the hyacinth flower grew where his blood fell — making it the flower of grief that comes from love. Blue hyacinths in particular carry the meaning: I see that you are hurting, and I am here.",
    origin: "Ancient Greek mythology; Apollo and Hyacinthus",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(40,52)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"28\" stroke=\"#333\" stroke-width=\"2\"/><path d=\"M0,10 Q-8,6 -8,1 Q-5,7 0,10\" fill=\"#555\"/><path d=\"M0,10 Q8,6 8,1 Q5,7 0,10\" fill=\"#555\"/><ellipse cx=\"-4\" cy=\"-3\" rx=\"4\" ry=\"6\" fill=\"#777\" opacity=\".9\"/><ellipse cx=\"4\" cy=\"-6\" rx=\"4\" ry=\"6\" fill=\"#555\" opacity=\".9\"/><ellipse cx=\"-4\" cy=\"-14\" rx=\"3.5\" ry=\"5.5\" fill=\"#888\" opacity=\".9\"/><ellipse cx=\"4\" cy=\"-18\" rx=\"3\" ry=\"5\" fill=\"#666\" opacity=\".9\"/><ellipse cx=\"0\" cy=\"-24\" rx=\"2.5\" ry=\"4.5\" fill=\"#999\"/><ellipse cx=\"-2\" cy=\"-10\" rx=\"3\" ry=\"5\" fill=\"#666\" opacity=\".85\"/><ellipse cx=\"2\" cy=\"-13\" rx=\"3\" ry=\"5\" fill=\"#777\" opacity=\".85\"/></g></svg>",
  },
  {
    id: "heather-white",
    name: "White Heather",
    tags: ["luck","hope"],
    meaning: "Good luck, protection, and wishes for safe passage. White heather is one of the oldest good-luck symbols in the world — in Scottish Highland tradition it grows only where no blood has been shed, making it a sign that the ground is safe. Given before journeys, examinations, or any new challenge to say: I'm wishing for you.",
    origin: "Scottish Highland tradition; documented from at least the 16th century",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(40,54)\"><path d=\"M0,0 Q1,10 0,24\" stroke=\"#333\" stroke-width=\"1.8\" fill=\"none\"/><path d=\"M0,8 Q-8,4 -9,-1\" stroke=\"#444\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M0,14 Q8,10 9,5\" stroke=\"#444\" stroke-width=\"1.5\" fill=\"none\"/><circle cx=\"-9\" cy=\"-2\" r=\"2.5\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".8\"/><circle cx=\"-12\" cy=\"-6\" r=\"2\" fill=\"#ddd\" stroke=\"#aaa\" stroke-width=\".7\"/><circle cx=\"-7\" cy=\"-8\" r=\"2\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".7\"/><circle cx=\"9\" cy=\"4\" r=\"2.5\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".8\"/><circle cx=\"12\" cy=\"0\" r=\"2\" fill=\"#ddd\" stroke=\"#aaa\" stroke-width=\".7\"/><circle cx=\"7\" cy=\"-2\" r=\"2\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".7\"/><circle cx=\"0\" cy=\"-10\" r=\"2\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".7\"/><circle cx=\"-3\" cy=\"-15\" r=\"2\" fill=\"#ddd\" stroke=\"#aaa\" stroke-width=\".7\"/><circle cx=\"3\" cy=\"-18\" r=\"2\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".7\"/><circle cx=\"0\" cy=\"-22\" r=\"2.5\" fill=\"#ddd\" stroke=\"#aaa\" stroke-width=\".8\"/></g></svg>",
  },
  {
    id: "gladiolus",
    name: "Gladiolus",
    tags: ["strength","hope"],
    meaning: "Moral strength, integrity, and perseverance through a fight. The name comes from the Latin gladius (sword) — not because it is aggressive, but because the gladiolus stands tall and unbending even in difficult conditions. It is given to people facing surgery, hardship, or an uphill battle, to say: you have the strength to get through this.",
    origin: "Latin gladius, \"sword\"; Victorian floriography",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(40,56)\"><path d=\"M0,0 Q1,12 0,28\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/><path d=\"M0,18 Q-10,12 -10,6\" stroke=\"#555\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M0,10 Q10,6 10,0\" stroke=\"#555\" stroke-width=\"1.5\" fill=\"none\"/><ellipse cx=\"0\" cy=\"-12\" rx=\"7\" ry=\"10\" fill=\"#ccc\" stroke=\"#888\" stroke-width=\".8\"/><ellipse cx=\"0\" cy=\"-22\" rx=\"6\" ry=\"8\" fill=\"#bbb\" stroke=\"#888\" stroke-width=\".8\"/><ellipse cx=\"0\" cy=\"-30\" rx=\"5\" ry=\"7\" fill=\"#ddd\" stroke=\"#999\" stroke-width=\".8\"/><ellipse cx=\"-8\" cy=\"-16\" rx=\"5\" ry=\"8\" fill=\"#c8c8c8\" stroke=\"#888\" stroke-width=\".7\" transform=\"rotate(-20,-8,-16)\"/><ellipse cx=\"8\" cy=\"-16\" rx=\"5\" ry=\"8\" fill=\"#c0c0c0\" stroke=\"#888\" stroke-width=\".7\" transform=\"rotate(20,8,-16)\"/><line x1=\"0\" y1=\"-8\" x2=\"0\" y2=\"-18\" stroke=\"#666\" stroke-width=\".8\"/></g></svg>",
  },
  {
    id: "daffodil",
    name: "Daffodil",
    tags: ["hope","joy"],
    meaning: "New beginnings, good fortune, and hope that something better is coming. In Welsh tradition the first person to spot a daffodil in spring will have more gold than silver that year. In Chinese New Year celebrations daffodils symbolize good luck and prosperity arriving. They are also one of the primary symbols of hope in cancer charities worldwide.",
    origin: "Welsh folk tradition; Chinese New Year symbolism",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(40,48)\"><path d=\"M0,0 Q-2,12 -1,28\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/><path d=\"M-1,18 Q-12,12 -12,6 Q-6,12 -1,18\" fill=\"#555\"/><ellipse cx=\"0\" cy=\"-18\" rx=\"5\" ry=\"12\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".8\"/><ellipse cx=\"8\" cy=\"-15\" rx=\"5\" ry=\"12\" fill=\"#ddd\" stroke=\"#aaa\" stroke-width=\".8\" transform=\"rotate(55,8,-15)\"/><ellipse cx=\"12\" cy=\"-7\" rx=\"5\" ry=\"12\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".8\" transform=\"rotate(100,12,-7)\"/><ellipse cx=\"-8\" cy=\"-15\" rx=\"5\" ry=\"12\" fill=\"#ddd\" stroke=\"#aaa\" stroke-width=\".8\" transform=\"rotate(-55,-8,-15)\"/><ellipse cx=\"-12\" cy=\"-7\" rx=\"5\" ry=\"12\" fill=\"#eee\" stroke=\"#aaa\" stroke-width=\".8\" transform=\"rotate(-100,-12,-7)\"/><ellipse cx=\"5\" cy=\"-22\" rx=\"5\" ry=\"12\" fill=\"#e8e8e8\" stroke=\"#aaa\" stroke-width=\".8\" transform=\"rotate(25,5,-22)\"/><ellipse cx=\"-5\" cy=\"-22\" rx=\"5\" ry=\"12\" fill=\"#e8e8e8\" stroke=\"#aaa\" stroke-width=\".8\" transform=\"rotate(-25,-5,-22)\"/><circle cx=\"0\" cy=\"-10\" r=\"7\" fill=\"none\" stroke=\"#999\" stroke-width=\"2\"/><circle cx=\"0\" cy=\"-10\" r=\"5\" fill=\"#bbb\"/><circle cx=\"0\" cy=\"-10\" r=\"3\" fill=\"#888\"/></g></svg>",
  }
];

const RIBBONS = [
  {
    id: "ribbon-red",
    name: "Red Ribbon",
    tags: ["love"],
    meaning: "Passion and love, tied together.",
    svg: "<svg viewBox=\"0 0 80 60\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M40,30 Q20,10 8,18 Q-2,28 22,32 Q40,36 40,30 Q40,36 58,32 Q82,28 72,18 Q60,10 40,30Z\" fill=\"#111\" stroke=\"#333\" stroke-width=\"1\"/>\n      <ellipse cx=\"40\" cy=\"30\" rx=\"6\" ry=\"6\" fill=\"#000\"/>\n      <path d=\"M40,30 L33,55 Q37,57 40,54 L43,54 Q47,57 47,55Z\" fill=\"#111\" stroke=\"#333\" stroke-width=\".8\"/>\n      <path d=\"M40,30 L33,55\" stroke=\"#444\" stroke-width=\".5\" fill=\"none\"/>\n      <path d=\"M40,30 L47,55\" stroke=\"#444\" stroke-width=\".5\" fill=\"none\"/>\n    </svg>",
  },
  {
    id: "ribbon-simple",
    name: "Simple Bow",
    tags: ["joy"],
    meaning: "A neat, thoughtful finish.",
    svg: "<svg viewBox=\"0 0 80 60\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M40,28 Q20,8 8,18 Q-2,28 22,32 Q40,36 40,28 Q40,36 58,32 Q82,28 72,18 Q60,8 40,28Z\" fill=\"#666\" stroke=\"#333\" stroke-width=\"1\"/>\n      <ellipse cx=\"40\" cy=\"28\" rx=\"5\" ry=\"5\" fill=\"#444\"/>\n      <path d=\"M40,28 L34,54 Q38,56 40,53 L42,53 Q46,56 46,54Z\" fill=\"#666\" stroke=\"#333\" stroke-width=\".8\"/>\n    </svg>",
  },
  {
    id: "ribbon-double",
    name: "Double Bow",
    tags: ["joy"],
    meaning: "Extra care and celebration.",
    svg: "<svg viewBox=\"0 0 80 70\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M40,25 Q22,6 10,14 Q0,24 24,28 Q40,32 40,25 Q40,32 56,28 Q80,24 70,14 Q58,6 40,25Z\" fill=\"#888\" stroke=\"#555\" stroke-width=\"1\"/>\n      <path d=\"M40,35 Q24,18 12,26 Q2,36 26,38 Q40,40 40,35 Q40,40 54,38 Q78,36 68,26 Q56,18 40,35Z\" fill=\"#555\" stroke=\"#333\" stroke-width=\"1\"/>\n      <ellipse cx=\"40\" cy=\"30\" rx=\"5\" ry=\"5\" fill=\"#333\"/>\n      <path d=\"M40,35 L34,58 Q38,60 40,57 L42,57 Q46,60 46,58Z\" fill=\"#555\" stroke=\"#333\" stroke-width=\".8\"/>\n    </svg>",
  },
  {
    id: "wrap-kraft",
    name: "Kraft Wrap",
    tags: ["loyalty"],
    meaning: "Rustic and handmade — the charm of something wrapped with care.",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M10,70 L30,30 L50,30 L70,70Z\" fill=\"#bbb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n      <path d=\"M10,70 L30,30 L50,30 L70,70Z\" fill=\"none\" stroke=\"#666\" stroke-width=\".5\" stroke-dasharray=\"3,3\"/>\n      <path d=\"M30,30 L40,10 L50,30\" fill=\"#999\" stroke=\"#333\" stroke-width=\"1\"/>\n      <line x1=\"30\" y1=\"30\" x2=\"10\" y2=\"70\" stroke=\"#888\" stroke-width=\".5\"/>\n      <line x1=\"50\" y1=\"30\" x2=\"70\" y2=\"70\" stroke=\"#888\" stroke-width=\".5\"/>\n    </svg>",
  },
  {
    id: "wrap-newsprint",
    name: "Newsprint Wrap",
    tags: ["memory"],
    meaning: "Old-fashioned, unpretentious, full of character.",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M10,70 L30,30 L50,30 L70,70Z\" fill=\"#e8e8e8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n      <line x1=\"14\" y1=\"62\" x2=\"42\" y2=\"36\" stroke=\"#aaa\" stroke-width=\".5\"/>\n      <line x1=\"18\" y1=\"68\" x2=\"46\" y2=\"34\" stroke=\"#aaa\" stroke-width=\".5\"/>\n      <line x1=\"24\" y1=\"70\" x2=\"50\" y2=\"30\" stroke=\"#aaa\" stroke-width=\".5\"/>\n      <line x1=\"32\" y1=\"70\" x2=\"56\" y2=\"34\" stroke=\"#aaa\" stroke-width=\".5\"/>\n      <line x1=\"40\" y1=\"70\" x2=\"62\" y2=\"40\" stroke=\"#aaa\" stroke-width=\".5\"/>\n      <path d=\"M30,30 L40,10 L50,30\" fill=\"#d0d0d0\" stroke=\"#333\" stroke-width=\"1\"/>\n    </svg>",
  },
  {
    id: "wrap-white",
    name: "White Wrap",
    tags: ["hope"],
    meaning: "Clean, minimal, and quietly elegant.",
    svg: "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M10,70 L30,30 L50,30 L70,70Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n      <path d=\"M30,30 L40,10 L50,30\" fill=\"#eee\" stroke=\"#333\" stroke-width=\"1\"/>\n      <line x1=\"30\" y1=\"30\" x2=\"10\" y2=\"70\" stroke=\"#ccc\" stroke-width=\".5\"/>\n      <line x1=\"50\" y1=\"30\" x2=\"70\" y2=\"70\" stroke=\"#ccc\" stroke-width=\".5\"/>\n    </svg>",
  }
];
