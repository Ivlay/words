import { css, Global } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700;900&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body,
      #__next {
        font-family: 'Roboto', sans-serif;
        color: #2B3172;
        height: 100vh;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }
    `}
  />
)
