import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 1460px;
  box-sizing: content-box;
  height: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  & main {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Main = styled.div`
  height: 100%;
  padding: 0 15px;
  background-color: #F6F9FF;
`

const MainLayout: React.FC = ({ children }) => {
  return (
    <Main>
      <Container>
        <main>{children}</main>
      </Container>
    </Main>
  )
}

export default MainLayout
