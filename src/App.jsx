import React, {useState, useEffect} from "react";
import NavBar from './Components/NavBar';
import CryptoCard from './Components/CryptoCard';
import Search from './Components/Search';
import "./Styles/app.css";
import Axios from 'axios';

function App() {
  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [searchFilter, setSearchFilter] = useState([])
  const [isSearch, setIsSearch] = useState(false);
  
  useEffect(()=>{
    Axios.get("https://api.coinstats.app/public/v1/coins").then(
      (response) => {
        setCryptoCoins(response.data.coins);
      }
    )
  },[])

  function handleSearch(a){
    if(a !== ""){
      return(
        setSearchFilter(()=>{
          return cryptoCoins.filter((coin) => {
            return Object.values(coin).join('').toLowerCase().includes(a.toLowerCase());
          })
        })
      )
    }
  }

  function isSearching(b){
    setIsSearch(() => {
      return b.length > 1 ? true : false;
    })
  }

  return (
    <div className="App">
      <NavBar />
      <Search 
        searchFunc={handleSearch}
        isSearchFunc={isSearching}
      />
      <div className="content-box">
      {isSearch ? (
        searchFilter.map((searchItems) => {
          return(
            <CryptoCard
              name={searchItems.name}
              icon={searchItems.icon}
              price={searchItems.price.toFixed(5)} 
              link={searchItems.websiteUrl}
            />
          )
        })
      ) : (
        cryptoCoins.map((coin, index)  => {
          return(        
            <CryptoCard
              key={index}
              name={coin.name}
              icon={coin.icon}
              price={coin.price.toFixed(5)} 
              link={coin.websiteUrl}
            />
          )
        })
      )}
      </div>
    </div>
  );
}

export default App;