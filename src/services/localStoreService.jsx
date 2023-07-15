export let localService = {
  setUser: (user) => {
    let dataJSON = JSON.stringify(user);
    localStorage.setItem("USER_LOGIN", dataJSON);
  },
  getUser: () => {
    let dataJSON = localStorage.getItem("USER_LOGIN");
    return JSON.parse(dataJSON);
  },
  removeUser: () => {
    localStorage.removeItem("USER_LOGIN");
  },
};
