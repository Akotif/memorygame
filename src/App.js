import { useState, useEffect } from 'react';
import './App.css';
import Board from './Board';
import images from "./images.js"

function App() {
  const [board, setBoard] = useState(Array(20).fill({ id: "", icon: "" }));
  const [icons, setIcons] = useState(images)
  const [iconStyle, setStyle] = useState("img")
  const [reversed, setReversed] = useState("")
  const [clicked, setClicked] = useState(".")
  const [isStarted, setStarted] = useState(0)
  const [point, setPoint] = useState(0)
  const [visibleLength, setVisibleLength] = useState(0)

  let shuffled = ([...icons])

  const shuffleArray = array => {
    for (let i = array.length - 1; i > -1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      array[i].id = i
      array[i].style = "visible"
    }
    return array
    console.log(array)
  }

  let visibleArray = ([...icons])

  const setVisible = (array) => {
    for (let i = 0; i < array.length; i++) {
      array[i].style = "invisible"
      array[i].id = i
      setIcons(array)
      setStarted(1)    
    }
  }

  const clickHandler = (cart) => {
    setClicked(cart)
    let delay;
    clearTimeout(delay)
    if (cart.style === "invisible" && reversed.id !== cart.id && isStarted === 1 && visibleLength < 2 && visibleLength < 2) {
      var deneme = new Audio("flipcard-91468.mp3")
      deneme.play()
      setVisibleLength(visibleLength + 1)
      if (reversed.icon !== cart.icon) {
        let newIcons = [...icons]
        newIcons[cart.id].style = "visible"
        setIcons(newIcons)

        const setInvisible = (array) => {
          console.log(reversed, cart)
          if (reversed !== "") {
            array[cart.id].style = "invisible"
            array[reversed.id].style = "invisible"
            setVisibleLength(0)
            setClicked(".")
            setReversed("")
          }
          setIcons(array)
          console.log("adhahdaı")
        }
        setReversed(cart)
        setClicked(".")
        delay = setTimeout(() => {
          setInvisible(newIcons)
        }, 700);
        console.log(cart.style)
      }
      else if (reversed.icon === cart.icon) {
        var deneme1 = new Audio("success.mp3")
        deneme1.play()
        let newIcons = [...icons]
        newIcons[cart.id].style = "alw_visible"
        newIcons[reversed.id].style = "alw_visible"
        setIcons(newIcons)
        setClicked(".")
        setReversed("")
        setVisibleLength(0)
      }
    }
  }

  useEffect(() => {
    setIcons(shuffleArray(shuffled))
    console.log(shuffled)
    setTimeout(() => setVisible(shuffled), 2000);
  }, [])

  return (
    <div className="App">
      <Board clickHandler={clickHandler}
        iconStyle={iconStyle} images={icons} board={board}></Board>
    </div>
  );
}

export default App;
