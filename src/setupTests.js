// add some helpful assertions
import 'jest-dom/extend-expect'
import 'jest-styled-components'

// this is basically: afterEach(cleanup)
import '@testing-library/react/cleanup-after-each'

// react-content-loader uses Math.random to generate the ids in the svgs
const mockMath = Object.create(global.Math)
mockMath.random = () => 0.5
global.Math = mockMath
