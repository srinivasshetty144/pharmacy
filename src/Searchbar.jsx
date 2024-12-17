import "./searchbar.css"





function Searchbar(){

    return <div className="container">
        <div className="header">
            <h2>Location</h2>
            <div className="profile_icon"></div>
        </div>
        <div className="search">
            <span>Where we headed?</span>
            <div className="search_icon">
                <img src="./search.png" alt="" />
                <input type="text"  placeholder="Enter destination"/>

            </div>


        </div>
        <div className="options">
                
            <div className="child child1">Police stations</div>
            <div className="child child2">Hospitals</div>
            <div className="child child3">Pharmacies</div>
        </div>


    </div>
}
export default Searchbar;