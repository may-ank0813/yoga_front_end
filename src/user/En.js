import { API } from "../backend";

export const En = (title) => {
    const formData = new FormData();

    formData.append("cat" ,title);
    formData.append("id" ,localStorage.getItem("id"));
    formData.append("email" ,localStorage.getItem("email"));

    // var temp = localStorage.getItem("jwt");
    // console.log(temp);
    // console.log(localStorage.getItem("id"));

    for (var key of formData.keys()) {
      console.log("MYKEY: ", key);
    }
  
    return fetch(`${API}enroll/`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log("SUCCESS", response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };