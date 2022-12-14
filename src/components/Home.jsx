import React from "react"
import Banner from "./banner/Banner"
import Cart from "./cart/Cart"
import TestSlider from "./testSlider"

const Home =(props)=>{
    return(
        <>
        <TestSlider/>
        <Banner />

        <Cart
            item={props.item}
            overlayItems={props.overlayItems}
            setOverlayItems={props.setOverlayItems}
            setSearch={props.setSearch}
            search={props.search}
            favorites={props.favorites}
            setFavorites={props.setFavorites}
        />
      </>
    )
}
export default Home