const users = ({ users }) => {
  return (
    <>
      <div>List of users</div>
      {users.map(({ id, name, email }) => {
        return (
          <div key={id}>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
