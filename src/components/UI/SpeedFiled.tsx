import { memo } from 'react'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'
import { handleFilters } from '@stores/filter/action'

const SpeedStyle = styled.div`
  .speedValue {
    padding: 0 50px;
    color: #000;
    border: 1px solid;
    border-radius: 20px;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
    padding-bottom: 13px;
    .button {
      max-width: 80px;
      color: #000;
      font-weight: 900;
      font-size: 45px;
      .minus {
        width: 20px;
        height: 8px;
        background-color: #000;
        display: inline-block;
      }
      .plus {
        display: inline-block;
        line-height: 1;
      }
    }
    button + button {
      margin-left: 20px;
    }
  }
`

const MIN_VALUE = 1
const MAX_VALUE = 5

const Speed: React.FC = () => {
  const value = useSelector((state) => state.filter.controllers.speed)
  const dispatch = useDispatch()

  const handleSpeedClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    dispatch(
      handleFilters({
        filterName: 'speed',
        value: e.currentTarget.name === 'plus' ? value + 0.5 : value - 0.5
      })
    )
  }

  return (
    <SpeedStyle>
      <span className="title">
        Скорость <span className="speedValue">{value}</span> сек.
      </span>
      <div className="buttonContainer">
        <Button
          className="button"
          name="minus"
          onClick={handleSpeedClick}
          disabled={value === MIN_VALUE}
        >
          <span className="minus" />
        </Button>
        <Button
          className="button"
          name="plus"
          onClick={handleSpeedClick}
          disabled={value === MAX_VALUE}
        >
          <span className="plus">+</span>
        </Button>
      </div>
    </SpeedStyle>
  )
}

export default memo(Speed)
