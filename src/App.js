/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import emotionReset from 'emotion-reset'
import { Work } from './work'

const globalStyles = css`
  ${emotionReset}
  *,*::after,*::before{
    box-sizeing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -weblit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;



const App = () => {
  return (
    <div>
      <Global styles={globalStyles} />
      <Work />
    </div>
  );
};

export default App;