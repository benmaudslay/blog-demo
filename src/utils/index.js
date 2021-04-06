export const fetchUsers = async (setUsers) => {
  const response = await fetch("http://localhost:5000/user", {
    method: "GET",
  });
  const data = await response.json();
  setUsers(data);
};
