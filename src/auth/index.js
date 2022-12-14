import { API } from "../backend";

export const signup = (user) => {
  return fetch(`${API}user/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (user) => {
    const formData = new FormData();
  
    for (const name in user) {
      console.log(user[name]);
      formData.append(name, user[name]);
    }
  
    for (var key of formData.keys()) {
      console.log("MYKEY: ", key);
    }
  
    return fetch(`${API}user/login/`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log("SUCCESS", response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };


  export const authenticate = (data, next) => {
    if (typeof window !== undefined) {
      localStorage.setItem("jwt", JSON.stringify(data.token));
      localStorage.setItem("id", JSON.stringify(data.user.id));
      localStorage.setItem("email", JSON.stringify(data.user.email) );
      next();
    }
  };

export const isAuthenticated = () => {
    if (typeof window == undefined) {
        return false;
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("id"));
    } else {
        return false;
    }
};
  
  export const signout = (next) => {
    const userId = isAuthenticated() && isAuthenticated();
  
    console.log("USERID: ", userId);
  
    if (typeof window !== undefined) {
      localStorage.removeItem("jwt");
      localStorage.removeItem("id");
      localStorage.removeItem("email");

      return fetch(`${API}user/logout/${userId}`, {
        method: "GET",
      })
        .then((response) => {
          console.log("Signout success");  
          next();
        })
        .catch((err) => console.log(err));
    }
  };