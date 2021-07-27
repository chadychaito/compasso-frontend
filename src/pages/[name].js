import { useRouter } from "next/dist/client/router";
import { Container } from "../components/Container";
import { Profile } from "../containers/Profile";
import { Results } from "../containers/Results";

export default function Home() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Container>
      <Profile name={name} />
      <Results name={name} />
    </Container>
  );
}
