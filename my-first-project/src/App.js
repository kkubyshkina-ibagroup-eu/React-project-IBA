import Header from "./components/Header";
import Cards from "./components/Cards";
import "./components/Header.css";

function App() {
  const cards = [
    {
      title: "Info",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.",
      id: "c1",
    },
    {
      title: "Users",
      text: "There are many variations of passages of Lorem Ipsum available, \
      but the majority have suffered alteration in some form.",
      id: "c2",
    },
    {
      title: "Help",
      text: "But I must explain to you how all this mistaken idea of denouncing \
       pleasure and praising pain was born. ",
      id: "c3",
    },
    {
      title: "Product",
      text: "Ut ac nisi lorem. Vestibulum id neque lacinia felis gravida fringilla vel ac mi. Curabitur a tristique metus.\
       Nullam elementum convallis leo ac blandit. ",
      id: "c4",
    },
    {
      title: "New",
      text: "Sed ac odio justo. Nam tortor augue, maximus vitae metus quis, cursus gravida nibh.\
       Pellentesque varius metus ultricies, ultricies arcu quis, aliquam diam. ",
      id: "c5",
    },
    {
      title: "Example",
      text: "Mauris placerat auctor fringilla. Phasellus vulputate mi vel cursus accumsan.\
       Vestibulum interdum quis risus vel sodales. Curabitur sed arcu est. ",
      id: "c6",
    },
    {
      title: "Error",
      text: "It is a long established fact that a reader will be distracted by the readable\
       content of a page when looking at its layout.",
      id: "c7",
    },
    {
      title: "Delivery",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\
       nulla pariatur. ",
      id: "c8",
    },
    {
      title: "Price",
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam \
       nihil molestiae consequatur, vel illum qui dolorem eum fugiat?",
      id: "c9",
    },
  ];
  return (
    <div>
      <Header />
      <Cards items={cards} />
    </div>
  );
}

export default App;
