import { memo, SyntheticEvent, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'

import { initialFilterState } from '@stores/filter/reducer'
import { handleFilters } from '@stores/filter/action'

const InputContainer = styled.div`
  .list {
    display: flex;
    justify-content: space-between;
    height: auto;
    overflow: hidden;
    margin-bottom: 10px;

    option {
      padding-left: 4px;
      cursor: pointer;
    }
  }
`

const RangeStyles = styled.input`
  width: 100%;
  appearance: none;
  background-color: transparent;
  overflow: hidden;
  border-radius: 10px;
  :focus {
    outline: none;
  }
  ::-webkit-slider-runnable-track {
    height: 23px;
    appearance: none;
    background-color: #fdd207;
    border-radius: 10px;
  }
  ::-webkit-slider-container {
    min-block-size: 43px;
  }
  ::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 40px;
    width: 40px;
    background-color: #0e0c0b;
    border-radius: 100%;
    border: 10px solid#FDD207;
    top: 50%;
    box-shadow: 100vw 0 43px 100vw #fff;
    transform: translateY(-50%);
  }
`

export interface IRange {
  max: number
  step: number
  name: keyof typeof initialFilterState.controllers
}

const Range: React.FC<IRange> = ({ step, max, name }) => {
  const value = useSelector((state) => state.filter.controllers[name])

  const dispatch = useDispatch()

  const valueListNumber = new Array(max / step).fill(null)

  const hanldeChangeInput = useCallback(
    (event: SyntheticEvent<HTMLInputElement | HTMLOptionElement>) => {
      dispatch(
        handleFilters({
          filterName: name,
          value: Number(event.currentTarget.value)
        })
      )
    },
    [dispatch, name]
  )

  const renderOption = useCallback(
    (_el: null, idx: number) => (
      <option
        key={idx}
        value={step * (idx + 1)}
        onClick={hanldeChangeInput}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        name={name}
      >
        {step * (idx + 1)}
      </option>
    ),
    [step, name, hanldeChangeInput]
  )

  return (
    <InputContainer>
      <datalist className="list" id="number">
        {valueListNumber.map(renderOption)}
      </datalist>
      <RangeStyles
        type="range"
        min={step}
        max={max}
        name={name}
        onChange={hanldeChangeInput}
        value={value}
        step={step}
        list="number"
      />
    </InputContainer>
  )
}

export default memo(Range)
