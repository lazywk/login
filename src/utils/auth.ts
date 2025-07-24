export function getToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function revokeToken() {
  localStorage.removeItem("token")
}

export function setToken(token: string) {
  localStorage.setItem("token", token)
}
