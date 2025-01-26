const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut style: story of boy and Magic School, give me 5 chapter. With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"storyTitle\": \"The Whispering Walls of Willow Creek\",\n  \"storyCover\": {\n     \"imagePrompt\": \"Paper cut style illustration for a children's book cover. A young boy with bright, curious eyes and tousled brown hair stands in front of a whimsical school building made of winding tree branches and glowing windows. The school is nestled amongst rolling green hills and colorful papercut flowers. The sky is a gentle gradient of blues and pinks. The title \\\"The Whispering Walls of Willow Creek\\\" is written in a playful, slightly curved font at the top.\",\n      \"imageText\": \"A book cover with a charming school of willow branches and a curious boy standing in front of it\"\n  },\n  \"chapters\": [\n    {\n      \"chapterNumber\": 1,\n      \"chapterTitle\": \"The Letter That Flew\",\n      \"storyText\": \"Toby loved to collect shiny buttons. One sunny afternoon, while he was sorting his collection, a letter fluttered in through his open window! It wasn't like any letter he’d ever seen. It was made of shimmering green paper and had a tiny, sparkling feather tied to it. It read: 'Dear Toby, You're invited to Willow Creek School!'. Toby's eyes widened, a magic school?\",\n      \"imagePrompt\": \"Paper cut style illustration of a cozy bedroom. A young boy with tousled brown hair, named Toby, is sitting on the floor surrounded by colorful buttons. A shimmering green letter with a tiny feather is floating towards him through an open window. The room has simple furniture and toys in the papercut style. Sunlight streams through the window.\",\n       \"imageText\": \"Toby, a young boy, is sitting on the floor surrounded by buttons. A green letter is floating in through the open window.\"\n    },\n   {\n      \"chapterNumber\": 2,\n      \"chapterTitle\": \"The Winding Path\",\n      \"storyText\": \"Following the letter, Toby found a path he had never noticed before. It twisted and turned through the forest, its path made of smooth, colorful stones. Butterflies with paper wings fluttered all around him, and friendly papercut squirrels chattered from the trees. Finally, the path opened up to reveal the most unusual school he’d ever seen – Willow Creek School, it looked like it grown out of trees!\",\n      \"imagePrompt\": \"Paper cut style illustration of a winding path through a forest. The path is made of smooth colorful stones. Toby is following the path. There are papercut trees, papercut flowers, butterflies and squirrels made of paper cut style surrounding Toby. In the distance, Willow Creek School can be seen. It is a whimsical building made of twisted tree branches and glowing windows.\",\n      \"imageText\": \"Toby is following a winding path through the forest. The school, made of twisted tree branches, is in the distance.\"\n    },\n    {\n      \"chapterNumber\": 3,\n      \"chapterTitle\": \"Lessons of the Whispering Walls\",\n      \"storyText\": \"Inside Willow Creek, everything was alive! The walls seemed to whisper secrets, the bookshelves were made of sturdy branches, and the desks were giant lily pads. Toby learned how to make paper flowers that bloomed instantly, and how to mix paints from berries! The teacher, a kind owl with spectacles made of dandelion seeds, smiled and said, 'Here, everything is magical, even the learning!'\",\n       \"imagePrompt\": \"Paper cut style illustration of the inside of Willow Creek School. The walls are made of textured bark, bookshelves are made of branches, and desks are lily pads. Toby is making paper flowers with the owl teacher. The teacher is an owl with dandelion seed spectacles. The scene is filled with soft light and whimsical details in the papercut style.\",\n      \"imageText\": \"Inside the school, Toby is learning with an owl teacher. The school is full of branch bookshelves and lily pad desks.\"\n    },\n     {\n       \"chapterNumber\": 4,\n       \"chapterTitle\": \"The Missing Moonbeam\",\n       \"storyText\": \"One day, the school was very quiet. A moonbeam, which always lit up the main hall, was gone! 'Oh dear', said the Owl Teacher, 'without the moonbeam, our magical books cannot shine!' Toby decided to help. Using his new knowledge, he painted the prettiest picture of the moon, and then, with a sprinkle of fairy dust (a gift from papercut butterflies), the picture started to glow and became the new moonbeam!\",\n      \"imagePrompt\": \"Paper cut style illustration of the main hall of Willow Creek School. The hall is dimly lit. Toby is painting a picture of the moon with berry paints on a large leaf. Fairy dust is sparkling around him. The Owl teacher is looking on with concern.  Everything is in the paper cut style, with shadows and highlights created through layers of paper.\",\n       \"imageText\": \"The main hall is dark. Toby is painting a moon picture and sprinkles fairy dust on it.\"\n    },\n   {\n      \"chapterNumber\": 5,\n      \"chapterTitle\": \"Magic Grows from Kindness\",\n       \"storyText\": \"The school cheered as the new moonbeam filled the hall with soft light! Toby learned that magic wasn’t just about spells and potions, it was also about kindness and helping others. As he walked home, the path seemed brighter, and he knew he'd return to Willow Creek soon for more amazing adventures. He even found a new shiny button under the doormat!\",\n       \"imagePrompt\": \"Paper cut style illustration of the main hall of Willow Creek School with a bright moonbeam shining down. Toby is waving goodbye to the owl teacher at the door. Papercut flowers, butterflies, and other students of the school are cheering. The scene is very bright and cheerful. The winding stone path leads out from the school in the paper cut style.\",\n      \"imageText\": \"The moonbeam is shining bright and Toby waves goodbye to his owl teacher. The path back home looks brighter.\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });

