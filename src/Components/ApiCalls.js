export function getUser(username) {
  return fetch("https://api.github.com/users/"+username).then((data) =>
    data.json()
  );
}

export function getRepos(username) {
  return fetch("https://api.github.com/users/"+username+'/repos').then((data) =>
    data.json()
  );
}

export function getGists(username) {
  return fetch("https://api.github.com/users/"+username+'/gists').then((data) =>
    data.json()
  );
}
