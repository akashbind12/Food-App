
function navbar() {

    return ` <div id="navbar">
    <div id="search" >
        <input id="searchmeal"  type="text" placeholder="Find a recipe">
    </div>
    <div id="clickme">
        <div onclick="window.location.href='index.html'">latest recipe</div>
        <div onclick="window.location.href='recipeofday.html'">recipe of the day</div>
    </div>
</div>`;
}

export default navbar;