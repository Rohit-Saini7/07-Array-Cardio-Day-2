const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

console.warn("people array: ");
console.table(people);

//! Some and Every Checks

console.warn(
  "is at least one person 19 or older?",
  "(hint: Array.prototype.some())"
);

let isSomeoneIsAdult = people.some((person) => {
  const now = new Date();
  personAge = now.getFullYear() - person.year;
  return personAge > 19;
});
console.log({ isSomeoneIsAdult });

console.warn("is everyone 19 or older?", "(hint: Array.prototype.every())");

let isEveryoneIsAdult = people.every((person) => {
  const now = new Date();
  personAge = now.getFullYear() - person.year;
  return personAge > 19;
});
console.log({ isEveryoneIsAdult });

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

console.warn("comments array: ");
console.table(comments);

//! Find just the one you are looking for.

console.warn(
  "find the comment with the ID of 823423",
  "(hint: Array.prototype.find())"
);

const commentYouAreLokingFor = comments.find(
  (comment) => comment.id === 823423
);
console.log(commentYouAreLokingFor);

//! Find index of just the one you are looking for.
console.warn(
  " Find the comment with the ID of 2039842",
  "(hint: Array.prototype.findIndex())"
);
//
const indexOfCommentYouAreLokingFor = comments.findIndex(
  (comment) => comment.id === 2039842
);

console.log(indexOfCommentYouAreLokingFor);

console.warn(
  "delete the comment with the ID of 2039842",
  "(hint: Array.prototype.slice())"
);

//! Delete just the one you are looking for.

const newComments = [
  ...comments.slice(0, indexOfCommentYouAreLokingFor),
  ...comments.slice(indexOfCommentYouAreLokingFor + 1),
];

console.warn("newComments array: ");
console.table(newComments);
