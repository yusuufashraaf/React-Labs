import "./Card.css";
import photo1 from "../Images/Group 46.png";
import photo2 from "../Images/cropped_image.png";
import photo3 from "../Images/WhatsApp Image 2025-04-01 at 7.26.37 AM (1)-Photoroom (1).png";
import photo4 from "../Images/yousse (1).jpeg";

function Card({ searchTerm }) {
  const users = [
    {
      imgPath: photo1,
      name: "Youssef",
      email: "yusuufAshraf@icloud.com",
      phone: "011443343",
    },
    {
      imgPath: photo2,
      name: "Zyad",
      email: "zyad@icloud.com",
      phone: "011443343",
    },
    {
      imgPath: photo3,
      name: "Raphy",
      email: "Raphy@icloud.com",
      phone: "011443343",
    },
    {
      imgPath: photo4,
      name: "Samy",
      email: "Samy@icloud.com",
      phone: "011443343",
    },
  ];

  const filteredUsers = users.filter((user) => user.name.includes(searchTerm));

  return (
    <div className="card-wrapper">
      {filteredUsers.map((user, index) => (
        <div className="Container" key={index}>
          <img src={user.imgPath} />
          <h1>{user.name}</h1>
          <h4>{user.email}</h4>
          <h4>{user.phone}</h4>
        </div>
      ))}
    </div>
  );
}

export default Card;
