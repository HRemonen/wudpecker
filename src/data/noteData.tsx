import { Note } from '../types'

const currentDate = new Date()

const noteData: Note = {
  items: [
    {
      title: 'Grocery list / Stores',
      checklist: {
        title: '',
        items: [
          { text: 'Milk', completed: false },
          { text: 'Eggs', completed: false },
          { text: 'Bread', completed: false },
          { text: 'Apples', completed: false },
          { text: 'Toilet paper', completed: false },
        ],
      },
      location: {
        name: 'San Francisco, CA',
      },
      createdAt: new Date(currentDate.getTime() - 60000).toISOString(),
      updatedAt: new Date(currentDate.getTime() - 60000).toISOString(),
    },
    {
      title: 'Books to read 🌶️',
      content:
        "Cheers to the books we've been meaning to read all these years and should probably start at some point.",
      checklist: {
        title: '',
        items: [
          { text: 'The Great Gatsby', completed: false },
          { text: 'To Kill a Mockingbird', completed: false },
          { text: '1984', completed: false },
          { text: 'Brave New World', completed: false },
          { text: 'The Catcher in the Rye', completed: false },
        ],
      },
      createdAt: new Date(currentDate.getTime() - 300000).toISOString(),
      updatedAt: new Date(currentDate.getTime() - 300000).toISOString(),
    },
    {
      title: 'Write down your ideas 💡',
      tags: ['#ideas', "#to-do's", '#morning'],
      content:
        "Sometimes, on Mondays, when servers at A16 are announcing the special, you can almost feel the excitement at the table when the waiters say, 'And of course, since it's Monday ... we have mathballs.' says Shelley Lingren",
      checklist: {
        title: 'Morning',
        items: [
          { text: 'Setup meeting with Rachel', completed: false },
          { text: 'Check to-dos', completed: false },
          { text: 'Apply at Braintree', completed: false },
          { text: 'Check reservation', completed: false },
        ],
      },
      collaborators: [
        {
          name: 'Robert C. Martin',
          img: <img alt='headshot of a person' />,
        },
        {
          name: 'Martin Fowler',
          img: <img alt='headshot of a person' />,
        },
        {
          name: 'John Doe',
          img: <img alt='headshot of a person' />,
        },
      ],
      createdAt: new Date(currentDate.getTime() - 86400000).toISOString(),
      updatedAt: new Date(currentDate.getTime() - 86400000).toISOString(),
    },
    {
      title: 'Curried Carrot Soup 🥕',
      tags: ['#recipes/savory', '#recipes/soups', '#recipessavorymains'],
      content:
        "Curried Carrot and Fennel Soup with Turmeric and Orange. This soup is a great way to use up a bunch of carrots. It's also vegan, paleo and gluten-free! It's a great soup to make ahead and freeze for later.",
      checklist: {
        title: '',
        items: [
          { text: '1 tablespoon olive oil', completed: false },
          { text: '1 medium yellow onion, chopped', completed: false },
          { text: '1 fennel bulb, chopped', completed: false },
          { text: '1 pound carrots, peeled and chopped', completed: false },
          { text: '1 tablespoon curry powder', completed: false },
          { text: '1 teaspoon ground turmeric', completed: false },
          { text: '1/2 teaspoon ground ginger', completed: false },
          { text: '1/2 teaspoon ground cumin', completed: false },
          { text: '1/2 teaspoon ground coriander', completed: false },
          { text: '1/4 teaspoon ground cinnamon', completed: false },
          { text: '1/4 teaspoon ground cardamom', completed: false },
          { text: '1/4 teaspoon ground cloves', completed: false },
          { text: '1/4 teaspoon ground nutmeg', completed: false },
          { text: '1/4 teaspoon cayenne pepper', completed: false },
          { text: '1/4 teaspoon salt', completed: false },
          { text: '1/4 teaspoon black pepper', completed: false },
          { text: '4 cups vegetable broth', completed: false },
          { text: '1 cup orange juice', completed: false },
          { text: '1/2 cup coconut milk', completed: false },
          { text: '1 tablespoon orange zest', completed: false },
        ],
      },
      collaborators: [
        {
          name: 'Alan Turing',
          img: <img alt='headshot of a person' />,
        },
      ],
      createdAt: new Date(currentDate.getTime() - 604800000).toISOString(),
      updatedAt: new Date(currentDate.getTime() - 604800000).toISOString(),
    },
    {
      title: 'Mexican Tomatillo Scrambled Eggs 🍳',
      tags: ['#recipes/savory', '#recipes/breakfast', '#recipes/savorymains'],
      content:
        "Mexican Tomatillo Scrambled Eggs. This recipe is a great way to use up leftover tomatillos. It's also vegan, paleo and gluten-free! It's a great soup to make ahead and freeze for later.",
      checklist: {
        title: '',
        items: [],
      },
      createdAt: new Date(currentDate.getTime() - 5 * 604800000).toISOString(),
      updatedAt: new Date(currentDate.getTime() - 5 * 604800000).toISOString(),
    },
  ],
}

export default noteData
