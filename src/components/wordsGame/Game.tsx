import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useMemo } from 'react'
import { updateDictionary } from '@stores/dictionary/action'

const drop = keyframes`
  from {
    opacity: 0.6;
  } to {
    opacity: 1;
  }
`

const GameWord = styled.div<{ speed: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  .main {
    animation: ${drop} ${(props) => props.speed}s linear infinite;
    font-size: 40px;
  }
`

const Game: React.FC = () => {
  const dispatch = useDispatch()

  const { firstWord, secondWord } = useSelector(
    (state) => state.dictionary.dictionaryList[0]
  )

  const { speed, space } = useSelector((state) => state.filter.controllers)

  const margin = useMemo(
    () => ({
      margin: `0 ${space}px`
    }),
    [space]
  )

  useEffect(() => {
    dispatch(updateDictionary())
  }, [dispatch])

  return (
    <GameWord speed={speed}>
      <div className="main">
        <div>
          <span>{firstWord}</span>
          <span className="separator" style={margin}>
            <Image
              src="/assets/separator.svg"
              width={88}
              height={38}
              alt="separator"
            />
          </span>
          <span>{secondWord}</span>
        </div>
      </div>
    </GameWord>
  )
}

export default Game
