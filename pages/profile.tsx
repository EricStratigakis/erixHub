// Protecting a Client-Side Rendered (CSR) Page
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        {/* <Image src={user.picture} alt={user.name} width={300} height={300} /> */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default withPageAuthRequired(Profile);
