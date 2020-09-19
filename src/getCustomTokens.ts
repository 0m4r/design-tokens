import getSpacers from './getSpacers'
import getSizes from './getSizes'
import getBorders from './getBorders'
import getRadii from './getRadii'

// the node types that can be used for tokens
const tokenNodeTypes = [
  'COMPONENT',
  'RECTANGLE'
]
// the name that token frames have
const tokenFrameName = '_tokens'

// check if a frame is a _token frame
const isTokenFrame = node => node.type === "FRAME" && node.name.trim().toLowerCase().substr(0,tokenFrameName.length) === tokenFrameName

// check if a node is a valid token node
const isTokenNode = node => tokenNodeTypes.includes(node.type)

// get the tokens from the token frames and return custom tokens
const getCustomTokens = () => {
  // get token frames
  const tokenFrames = figma.root.children.map(page => page.findChildren(node => isTokenFrame(node))).reduce((flatten, arr) => [...flatten, ...arr])
  // get all children of token frames
  const tokens = tokenFrames.map(frame => frame.findChildren(node => isTokenNode(node))).reduce((flatten, arr) => [...flatten, ...arr])
  // return tokens
  return ({
    ...getSpacers(tokens),
    ...getSizes(tokens),
    ...getBorders(tokens),
    ...getRadii(tokens)
  })
}

export default getCustomTokens