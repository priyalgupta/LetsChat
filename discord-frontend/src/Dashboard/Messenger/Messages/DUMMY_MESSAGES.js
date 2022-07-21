const DUMMY_MESSAGES = [
  {
    _id: 1,
    content: "hello",
    sameAuthor: false,
    author: {
      username: "Tom",
    },
    date: "22/06/2022",
    sameDay: false,
  },
  {
    _id: 2,
    content: "hello once again",
    sameAuthor: true,
    author: {
      username: "Tom",
    },
    date: "22/06/2022",
    sameDay: true,
  },
  {
    _id: 3,
    content: "hello third time",
    sameAuthor: true,
    author: {
      username: "Tom",
    },
    date: "23/06/2022",
    sameDay: false,
  },
  {
    _id: 4,
    content: "hello response first time",
    sameAuthor: false,
    author: {
      username: "Hey",
    },
    date: "23/06/2022",
    sameDay: true,
  },
  {
    _id: 5,
    content: "hello response third time",
    sameAuthor: true,
    author: {
      username: "Hey",
    },
    date: "24/06/2022",
    sameDay: false,
  },
];

export default DUMMY_MESSAGES;
