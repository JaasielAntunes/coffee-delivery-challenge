import { MapPin } from 'phosphor-react'
import { Aside, Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src="src/assets/logo.svg" alt="Coffee Delivery" />

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>João Pessoa, PB</span>
        </div>
      </Aside>
    </Container>
  )
}
