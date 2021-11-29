// Upper Container + H1
const uppercontainer = document.createElement("div");
uppercontainer.style.backgroundColor = "cyan";
uppercontainer.style.display = "flex";
uppercontainer.style.justifyContent = "center";
uppercontainer.style.padding = "1rem";
uppercontainer.style.margin = "0.5rem";
const h1 = document.createElement("h1");
h1.textContent = "Hello and welcome to my pure JS built Website";
h1.style.color = "white";
h1.style.fontSize = "5rem";
uppercontainer.appendChild(h1);
document.body.appendChild(uppercontainer);
// List with Array
const contact = [
  {
    id: 0,
    name: "John Wick",
    phonenumber: "05432163",
  },
  {
    id: 1,
    name: "Adam NoIdeaLastName",
    phonenumber: "04831218",
  },
  {
    id: 2,
    name: "Madone Si'Loca",
    phonenumber: "0198521",
  },
  {
    id: 3,
    name: "Popo Raymos",
    phonenumber: "0629481",
  },
  {
    id: 4,
    name: "Askr Lpolo",
    phonenumber: "0896515",
  },
  {
    id: 5,
    name: "Jonathon Socool",
    phonenumber: "021881",
  },
];
const list = document.createElement("ol");

contact.forEach((item) => {
  const listitem = document.createElement("li");
  listitem.textContent = `${item.name} and his phone number is: ${item.phonenumber}`;
  list.style.listStyleType = "none";
  listitem.setAttribute("data-id", item.id);
  list.appendChild(listitem);
  document.body.appendChild(list);
});
