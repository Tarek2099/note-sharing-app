const dummyNotes = {
  notes: [
    {
      id: "note1",
      title: "Getting Started with React",
      content: "React is a JavaScript library for building user interfaces. Key concepts include components, props, and state. Remember to practice hooks and lifecycle methods for better understanding.",
      tags: ["programming", "react", "web development"],
      date: "2025-06-08T10:30:00Z"
    },
    {
      id: "note2",
      title: "Weekly Shopping List",
      content: "1. Fruits: apples, bananas, oranges\n2. Vegetables: carrots, spinach, tomatoes\n3. Dairy: milk, cheese, yogurt\n4. Bread and cereals\n5. Snacks",
      tags: ["shopping", "groceries", "personal"],
      date: "2025-06-07T15:45:00Z"
    },
    {
      id: "note3",
      title: "Project Ideas",
      content: "1. Build a weather app using OpenWeather API\n2. Create a personal portfolio website\n3. Develop a recipe management system\n4. Design a task management application",
      tags: ["ideas", "projects", "development"],
      date: "2025-06-06T09:15:00Z"
    },
    {
      id: "note4",
      title: "Meeting Notes - Team Sync",
      content: "Discussion points:\n- Project timeline review\n- Resource allocation\n- Upcoming deadlines\n- New feature requests\nAction items: Follow up with design team, schedule next sprint planning",
      tags: ["work", "meetings", "team"],
      date: "2025-06-05T14:20:00Z"
    },
    {
      id: "note5",
      title: "Workout Routine",
      content: "Monday: Upper body\nTuesday: Lower body\nWednesday: Cardio\nThursday: Core workout\nFriday: Full body\nWeekend: Rest and recovery",
      tags: ["fitness", "health", "personal"],
      date: "2025-06-04T08:00:00Z"
    },
    {
      id: "note6",
      title: "Book Recommendations",
      content: "1. 'Atomic Habits' by James Clear\n2. 'The Pragmatic Programmer'\n3. 'Clean Code' by Robert Martin\n4. 'Deep Work' by Cal Newport\n5. 'Design Patterns' by Gang of Four",
      tags: ["books", "reading", "self-improvement"],
      date: "2025-06-03T17:30:00Z"
    },
    {
      id: "note7",
      title: "Travel Planning - Summer 2025",
      content: "Destinations to consider:\n- Barcelona, Spain\n- Tokyo, Japan\n- New York City, USA\nThings to prepare:\n- Passport renewal\n- Travel insurance\n- Accommodation booking",
      tags: ["travel", "planning", "vacation"],
      date: "2025-06-02T11:25:00Z"
    },
    {
      id: "note8",
      title: "Recipe - Chocolate Chip Cookies",
      content: "Ingredients:\n- 2 1/4 cups flour\n- 1 cup butter\n- 3/4 cup sugar\n- 2 eggs\n- 1 tsp vanilla\n- 2 cups chocolate chips\nBake at 375°F for 10-12 minutes",
      tags: ["recipe", "baking", "dessert"],
      date: "2025-06-01T16:40:00Z"
    },
    {
      id: "note9",
      title: "Learning Goals Q3 2025",
      content: "1. Master TypeScript\n2. Learn GraphQL\n3. Improve testing skills\n4. Study system design\n5. Contributing to open source projects",
      tags: ["learning", "goals", "career"],
      date: "2025-05-31T13:10:00Z"
    },
    {
      id: "note10",
      title: "Home Improvement Ideas",
      content: "1. Paint living room walls\n2. Organize home office\n3. Update bathroom fixtures\n4. Install smart lighting\n5. Create a reading nook\n6. Add plants for decoration",
      tags: ["home", "DIY", "improvement"],
      date: "2025-05-30T12:00:00Z"
    }
  ],
  activeNote: null,
  user: null,
  loading: true,
  isLoggedIn: false,
  isVarified: false,
}

export default dummyNotes;