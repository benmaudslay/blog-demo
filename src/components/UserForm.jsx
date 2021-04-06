export const UserForm = ({ getUsersPosts, users }) => {
  return (
    <form>
      <select
        name="user-options"
        onChange={(e) => getUsersPosts(e.target.value)}
      >
        <option value="" selected disabled>
          Select user...
        </option>
        {users &&
          users.map((item, index) => (
            <option value={index}>{item.name}</option>
          ))}
      </select>
    </form>
  );
};
