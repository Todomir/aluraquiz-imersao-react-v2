import { useRouter } from 'next/router'

import {
  Container,
  Background,
  Widget,
  Button,
  Input
} from '../components/styles'
import Footer from '../components/Footer'
import GithubCorner from '../components/GithubCorner'

import db from '../db.json'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()

  const [name, setName] = useState<string>('')

  return (
    <Background backgroundImage={db.bg}>
      <Container>
        <Widget>
          <Widget.Header>
            <h1>Quiz Imersão React</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={e => {
                e.preventDefault()
                router.push(`/quiz?name=${name}`)
              }}
            >
              <label htmlFor="name">Digite seu nome</label>
              <Input
                onChange={e => {
                  setName(e.target.value)
                }}
                name="name"
                id="name"
                type="text"
                placeholder="John Doe"
              />

              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </Container>
      <GithubCorner projectUrl="https://github.com/Todomir/aluraquiz-imersao-react-v2" />
    </Background>
  )
}
