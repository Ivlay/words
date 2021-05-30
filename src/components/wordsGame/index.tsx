import Image from 'next/image'
import styled from '@emotion/styled'
import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Game from './Game'

import MenuSettins from './MenuSettings'
import Button from '@components/UI/Button'

const CongratBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .text {
    font-size: 64px;
  }

  button {
    margin-top: 15px;
    font-size: 25px;
  }
`

const WordsGame: React.FC = () => {
  const isGameStarted = useSelector((state) => state.appState.isGameStarted)
  const isGameOver = useSelector((state) => state.appState.isGameOver)

  const dispatch = useDispatch()

  if (!isGameStarted && !isGameOver) {
    return <MenuSettins />
  }

  if (isGameStarted && !isGameOver) {
    return <Game />
  }

  return (
    <CongratBlock>
      <Image
        src="/assets/dog-space.svg"
        width={460}
        height={532}
        alt="Dog space"
      />
      <div className="text">Отличная работа!</div>
      <Button onClick={() => dispatch({ type: 'RESET' })}>
        <span>Сыграть ещё раз</span>
      </Button>
    </CongratBlock>
  )
}

export default memo(WordsGame)
