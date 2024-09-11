export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: "p1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
          title: "Book Collection",
          description:
            "A collection of must-read books. All-time classics by your favorite authors included!",
          price: 99.99,
        },
        {
          id: "p2",
          image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Throne_of_Glass_series.jpg/330px-Throne_of_Glass_series.jpg",
          title: "Throne of Glass Box Set",
          description: "The complete seven books in the Throne of Glass series by critically aclaimed author, Sarah. J. Maas.",
          price: 129.99,
        },
        {
          id: "p3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
          title: "Food Box",
          description:
            "May be partially expired when it arrives but at least it is cheap!",
          price: 6.99,
        },
        {
          id: "p4",
          image: "https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png",
          title: "Harry Potter and the Goblet of Fire",
          description: "The fourth book in the critically acclaimed Harry Potter series by J.K Rowling",
          price: 24.99
        },
        {
          id: 'p5',
          image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
          title: "Harry Potter and the Philosopher's Stone",
          description: "The one that started it all, the first book in the critically acclaimed Harry Potter series by J.K Rowling",
          price: 24.99
        }
      ],
    };
  },

  getters: {
    products(state) {
      return state.products;
    },
  },
};
