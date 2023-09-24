const baseurl = "http://loot.com";

export const URL_CONSTANTS = Object.freeze({
  signIn: baseurl + "/api/users/signin",
  signUp: baseurl + "/api/users/signup",
  signOut: baseurl + "/api/users/signout",

  currentUser: baseurl + "/api/users/currentuser",
});
