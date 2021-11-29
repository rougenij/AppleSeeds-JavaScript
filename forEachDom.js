const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
const list = document.createElement("ol");

users.forEach((item) => {
  const listitem = document.createElement("li");
  listitem.textContent = `${item.firstName} ${item.lastName}`;
  list.style.listStyleType = "none";
  listitem.setAttribute("data-id", item.id);
  list.appendChild(listitem);
  document.body.appendChild(list);
});
