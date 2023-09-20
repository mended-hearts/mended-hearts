import create from "zustand";

const events = [{
    title: "Mended Hearts Educational Program", 
    datetime: "Thursday, May 18, 2023 at 7pm", 
    place: "Good Shepherd Hospital: Conf Rooms B & C", 
    description: "Under the Knife: Understanding the PsychologIcal Effects of Major Surgery"
  }, {
    title: "Mended Hearts Educational Program", 
    datetime: "Thursday, Oct XX, 2023 at 7pm", 
    place: "Good Shepherd Hospital: Conf Rooms B & C", 
    description: "XXX XXX"
  }]

const messages = [
    {
        title: "",
        date: "May 2023",
        body: [
            "I will start out by thanking the Good Shepherd Hospital administration for allowing us to return to the hospital, the support of the Medical staff, nursing managers and their staffs, and Volunteer Services.",
            "Also, I would like to express my appreciation to the leaders of Mended Hearts over the past several years: Randy Rayborn, the heart of our chapter, founder of our chapter and the person that restarted us after Covid; Denny Gleason, also a past president for many years and a great mentor, and Steve Lewis, visitor trainer, mentor and supporter. My goal is to continue on with their legacies.",
            "Lastly thank you to the men and women who now are volunteering as Mended Hearts visitors. Without them we would not exist. Last but not least, thanks to my wife Debbie for her support. Remember the goal of Mended Hearts is to support our members, patients, and caregivers."
        ]
    }, {
        title: "Happy 4th of July",
        date: "July 2023",
        body: [
            "I hope everyone is enjoying their summer so far. I would like to remind everyone that the purpose of Mended Hearts is to support heart patients and their families by creating an inclusive and compassionate community through meaningful connections so no one feels alone.",
            "It’s great to be alive and help others!"
        ]
    }
]

const articles = [{
    title: "Staying well: Meditation can improve memory, concentration and more",
    category: "Education",
    body: [
        "Everyone knows that meditation can reduce stress. But researchers at Massachusetts General Hospital say it directly affects the function and structure of the brain. It increases attention span, sharpens focus, and improves memory.",
        "With the aid of advanced brain scanning technology, one study showed that daily meditation thickens the parts of the brain's cerebral cortex responsible for decision-making, attention, and memory.",
        "The test subjects were Boston-area workers practicing Western-style meditation, called mindfulness or insight meditation. For 40 minutes a day, they focused on an image, a sound, or on their own breathing.",
        "The Insight Meditation Society recommends just sitting in a chair. Close your eyes and follow your breath. Feel the rise and fall of your chest or abdomen. If your mind wanders, that's all right. Watch what happens when your mind wanders. Notice it, observe it, then let it go and return to breathing. Be aware of what you're thinking, but don't get caught up in it.",
        "With practice, you can develop a state called mindfulness, which is being aware of what's going on as it arises without jumping to conclusions, judgments, hopes, fears, or plans.",
        "Meditation also improves productivity and reduces absenteeism at work, probably because it helps prevent stress-related illness. helps people get along better. It acts on emotional intelligence, which neuroscientists say is more important for life success than cognitive intelligence."
    ]
}, {
    title: "FDA proposes new salt substitute rule",
    category: "Education",
    img: "salt.png",
    body: [
        "The U.S. Food and Drug Administration is proposing a new rule to allow the use of salt substitutes in everyday foods, such as cheese or canned tuna, in an effort to reduce salt consumption among Americans, according to Kaiser Health News. Excessive salt consumption is linked to high blood pressure and a variety of cardiovascular complications."
    ]
}, {
    title: "Hydration: the water, salt, potassium connection",
    category: "Education",
    img: "ice-water.png",
    body: [
        "Keeping your body hydrated by taking in enough fluids is an important part of good health. But even if you don't drink the recommended eight glasses of water each day, you probably don't have to worry.",
        "Counting the food and beverages people consume each day, the Institute of Medicine (IOM) says Americans are usually getting enough water without purposely drinking more.",
        "Caffeinated beverages can be counted. IOM's Food and Nutrition board says there is little evidence that caffeinated beverages flush water and its benefits from the body. They do contribute to hydration, but are often full of sugar and phosphates, which can weaken bones and teeth.",
        "The real problem is sodium. The average man takes in two to three times the daily recommended sodium intake and women get twice as much as they need.",
        "The second problem is a lack of potassium, an essential nutrient found in spinach, potatoes, cantaloupe, bananas, almonds and mushrooms. IOM recommends that adults get at least 4.7 grams of potassium daily, but the average man gets between 2.8 and 3.3 grams. Women get between 2.2 and 2.4 grams.",
        "Doctors writing in HealthNews say getting too much salt and too little potassium increases the risk of high blood pressure. Balancing these two nutrients is very important.",
        "Before exercising or when you are outdoors in hot weather, drink extra water to make up for what you lose through sweating.",
        "By limiting salt, getting enough potassium, and drinking more on hot days, you should keep your body properly hydrated."
    ]
}]

const recipes = [{
    name: "Black Beans and Rice",
    ref: "Recipe borrowed from https://recipes.heart.org/en/recipes/blackbeans-and-rice",
    nutrition: [
        "Calories 363 Per Serving",
        "Protein 10g Per Serving",
        "Fiber 7g Per Serving"
    ],
    ingredients: [
        "2 cups uncooked instant brown rice",
        "1/4 cup fresh lime juice (about 2 medium limes)",
        "2 teaspoons olive oil (extra-virgin preferred) and 2 tablespoons olive oil (extra-virgin preferred), divided",
        "1/2 teaspoon salt",
        "1 medium onion, finely chopped",
        "2 medium garlic cloves, minced",
        "OR",
        "1 teaspoon jarred minced garlic",
        "2 teaspoons ground cumin",
        "1 teaspoon chili powder",
        "1 15-ounce can no-salt-added black beans, rinsed and drained",
        "2 tablespoons finely chopped fresh cilantro (optional)",
        "2 tablespoons finely chopped fresh oregano (optional)"
    ],
    directions: [
        "Prepare the rice using the package directions, omitting the salt and margarine.",
        "Meanwhile, in a small bowl, whisk together the lime juice, 2 teaspoons oil and salt. Set it aside.",
        "Heat the remaining 2 tablespoons oil in a large skillet over medium-high heat, swirling to coat the bottom.",
        "Cook the onion for 3 minutes, or until soft, stirring frequently. Stir in the garlic. Cook for 1 minute, stirring frequently.",
        "Stir in the cumin and chili powder. Cook for 1 minute, stirring frequently. Stir in the beans. Cook until warmed through.",
        "Remove from the heat. Transfer to a large serving bowl.",
        "Stir in the cooked rice, lime juice mixture, cilantro, and oregano."
    ]
}, {
    name: "Black-Eyed Pea, Corn and Rice Salad",
    ref: "Recipe borrowed from https://recipes.heart.org/en/recipes/blackbeans-and-rice",
    nutrition: [
        "Calories 231 Per serving",
        "Protein 10g Per serving",
        "Fiber 7g Per serving"
    ],
    ingredients: [
        "2 15-ounce cans no-salt-added black-eyed peas, rinsed and drained",
        "1 15.25 ounce can no-salt-added whole-kernel corn",
        "1 8.8 ounce pouch brown rice, cooked, or 1 cup instant brown rice, cooked without salt",
        "2 ribs of celery, chopped",
        "1 medium bell pepper, chopped",
        "1/4 cup chopped fresh parsley",
        "1 tablespoon dried parsley, crumbled",
        "2 tablespoons fresh lemon juice",
        "2 tablespoons any type vinegar",
        "1 tablespoon extra-virgin olive, canola, or corn oil",
        "1 tablespoon water",
        "1/8 teaspoon pepper"
    ],
    directions: [
        "In a large bowl, toss together the black-eyed peas, corn, rice, celery, and bell pepper.",
        "In a small bowl, whisk together the parsley, lemon juice, oil, water, and pepper.",
        "Pour the dressing over the salad, tossing to coat."
    ]
}]

const useStore = create((set) => ({
    articles: articles,
    events: events,
    messages: messages,
    recipes: recipes
}));

export default useStore;