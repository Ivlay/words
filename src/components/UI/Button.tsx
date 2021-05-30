import styled from '@emotion/styled'

const ButtonStyle = styled.button`
  position: relative;
  background-color: #fdd207;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: inherit;
  text-transform: uppercase;
  font-size: 49px;
  padding: 15px 0;
  border: none;
  cursor: pointer;
  max-width: 390px;
  width: 100%;
  border-radius: 10px;
  &.disabled {
    cursor: default;
    opacity: 0.5;
  }
  .label {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .loading {
    ::after {
      content: '';
      width: 50px;
      height: 50px;
      position: absolute;
      right: 30px;
      top: calc(50% - 25px);
      background-image: url('/assets/buttonLoader.svg');
      background-repeat: no-repeat;
    }
  }
`

interface IButton {
  disabled?: boolean
  isLoading?: boolean
  form?: string
  className?: string
  name?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void
}

const Button: React.FC<IButton> = ({
  disabled = false,
  isLoading = false,
  children,
  className = '',
  type = 'button',
  name,
  form,
  onClick
}) => {
  const handleButtonClick = (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    if (!disabled && onClick) onClick(event)
  }

  return (
    <ButtonStyle
      disabled={disabled}
      name={name}
      className={`${className} ${disabled ? 'disabled' : ''}`}
      type={type}
      form={form}
      onClick={handleButtonClick}
    >
      <span className={`label ${isLoading ? 'loading' : ''}`}>{children}</span>
    </ButtonStyle>
  )
}

export default Button
