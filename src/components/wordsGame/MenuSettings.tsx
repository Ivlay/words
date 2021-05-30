import { memo, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'

import Range from '@components/UI/InputRange'
import { inputConstants } from '@constants/inputConstants'
import SpeedFiled from '@components/UI/SpeedFiled'
import Button from '@components/UI/Button'
import { prepareDictionary } from '@stores/dictionary/action'

const MenuSettingsContainer = styled.div`
  text-align: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  .header {
    font-weight: 800;
    margin-top: 20px;
    font-size: 65px;
  }
  .filtersContainer {
    display: grid;
    grid-template-rows: repeat(3, minmax(100px, 1fr));
    grid-template-columns: repeat(2, minmax(100px, 770px));
    align-items: center;
    grid-gap: 40px;
    margin-top: 180px;

    @media (max-width: 1080px) {
      grid-template-columns: auto;
    }

    .filter {
      padding: 30px 0 13px;
      overflow: hidden;
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50px;

      .input {
        padding: 0 80px;
      }

      .title {
        display: inline-block;
        font-size: 48px;
        line-height: 1;
        margin-bottom: 15px;
      }
    }
    .start {
      border-radius: 80px;
    }
  }
  .error {
    margin-top: 30px;
    color: #ff1919;
  }
`

const MenuSettings: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const errorMessage = useSelector((state) => state.appState.error)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      setLoading((state) => !state)
    }
  }, [errorMessage])

  const handleStartGame = () => {
    setLoading((state) => !state)
    if (!loading && !errorMessage) {
      dispatch(prepareDictionary())
    }
  }

  return (
    <MenuSettingsContainer>
      <h1 className="header">Тренажер «Поле зрения»</h1>
      <div className="filtersContainer">
        {inputConstants.map((el) => (
          <article key={el.name} className="filter">
            <span className="title">{el.header}</span>
            <div className="input">
              <Range name={el.name} max={el.max} step={el.step} />
            </div>
          </article>
        ))}
        <article className="filter">
          <SpeedFiled />
        </article>
        <div>
          <Button
            className="start"
            onClick={handleStartGame}
            isLoading={loading}
          >
            <span>Старт</span>
          </Button>
        </div>
      </div>
      <div className="error">{errorMessage}</div>
    </MenuSettingsContainer>
  )
}

export default memo(MenuSettings)
