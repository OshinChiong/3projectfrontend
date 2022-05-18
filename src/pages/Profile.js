import React from "react";
import { post } from "../authService/authService";

const Profile = () => {
  const [username, setUsername] = React.useState("");
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");

  function handleFileUpload(e) {
  
    const uploadData = new FormData();

    uploadData.append("imageUrl", e.target.files[0]);

    post("/image-upload", uploadData)
      .then((results) => {
        console.log("This is the image path", results.data);
        setImage(results.data);
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  }

  function create(e) {
    e.preventDefault();

    post("/new-post", {
      username: username,
      name: name,
      albumPic: image,
    })
      .then((results) => {
        console.log("Results", results.data);
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  }

  return (
    <div>
      <h2>Create a new Post</h2>
      <form onSubmit={create}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Username </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Album Pic</label>
        <input type="file" onChange={(e) => handleFileUpload(e)} />
        <button type="submit">Add Post </button>
      </form>
    </div>
  );
};

export default Profile;