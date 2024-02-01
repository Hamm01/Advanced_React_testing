## How to Css in js file

we use one library called npm i styled-components

we need to import this
import styled from 'styled-components'

and then we can created tags inside our components so we can write the css for that

const RedHone = styled.h1`    color: red;
 `
return (
<>
<RedHone>App Div </RedHone>
<Child />
</>
)
