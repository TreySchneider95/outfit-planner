import './App.css';
import { useState } from 'react';
import clothing from './clothing';

function App() {
  const [topURL, setTopURL] = useState('')
  const [bottomURL, setBottomURL] = useState('')
  const [shoesURL, setShoesURL] = useState('')

  const pickOutfit = (style) => {
    const styleTop = clothing.filter((ele)=>{
      return ele.type === 'top' && ele.dressCode === style
    })
    const styleBottom = clothing.filter((ele)=>{
      return ele.type === 'bottom' && ele.dressCode === style
    })
    const styleShoes = clothing.filter((ele)=>{
      return ele.type === 'shoes' && ele.dressCode === style
    })
    var top = styleTop[Math.floor(Math.random()*styleTop.length)]
    var bottom = styleBottom[Math.floor(Math.random()*styleBottom.length)]
    var shoes = styleShoes[Math.floor(Math.random()*styleShoes.length)]
    setTopURL(top.imageUrl)
    setBottomURL(bottom.imageUrl)
    setShoesURL(shoes.imageUrl)
  }
  
  return (
    <div className="App-header">
      <h3>Outfit Planner</h3>
      <p>Find what to wear</p>
      <h4>Outfit styles / Dress code</h4>
      <button onClick={()=>pickOutfit('casual')}>Casual</button>
      <button onClick={()=>pickOutfit('sport')}>Sport</button>
      <button onClick={()=>pickOutfit('formal')}>Formal</button>
      <p>Top</p>
      <img src={topURL}></img>
      <p>Bottom</p>
      <img src={bottomURL}></img>
      <p>Shoes</p>
      <img src={shoesURL}></img>
    </div>
  );
}

export default App;
