import { Container, Background, Widget } from '../components/styles';
import Footer from '../components/Footer';
import GithubCorner from '../components/GithubCorner';

import db from '../db.json';

export default function Home() {
  return (
    <Background backgroundImage={db.bg}>
      <Container>
        <Widget>
          <Widget.Header>
            <h1>Quiz Imersão React</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis odit fugiat quaerat.
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </Container>
      <GithubCorner projectUrl='https://github.com/Todomir/aluraquiz-imersao-react-v2' />
    </Background>
  );
}
