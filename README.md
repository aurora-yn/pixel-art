# Simple Pixel Art
Draw a mini painting by picking any colours at the palette.

---

## Structure
- **App** -> ColorPicker and Canvas
- **ColorPicker** -> *Colors* and Pixel as a palette
- **Colors** -> The list of colors able to pick
- **Pixel** -> props.background, props.current, props.onClick
- **Canvas** -> Pixel

## Control pixels in the Canvas
Repeat row and col to draw a canvas
```
const [matrix, setMatrix] = useState(
  Array(20).fill().map(() => 
    Array(20).fill(0)
  )
)
```

Change for each pixel's color when it is selected
```
const changeColor = (rowIndex, colIndex) => {
  const newMatrix = JSON.parse(JSON.stringify(matrix))
  newMatrix[rowIndex][colIndex] = props.currentColor
  setMatrix(newMatrix)
}
```
