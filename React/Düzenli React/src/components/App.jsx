import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://instagram.ftzx1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104395364_585959082288591_5184763084173334174_n.jpg?_nc_ht=instagram.ftzx1-1.fna.fbcdn.net&_nc_ohc=0g13Wj8gO0AAX_z8s1i&oh=8174e72266be78c01b8b6e1446394c85&oe=5F9D37E0" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
