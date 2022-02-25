function navbar() {
  return ` <div id="mainNav">
    <div id="logo">
      <img 
        src="https://blinkit.com/images/header/blinkit_logo-3898547.png"
        alt=""
      />
    </div>
    <div id="location">
      <img
        src="https://cdn.grofers.com/assets/ui/out_for_delivery_icon.png"
        alt=""
      />
      <div id="locName"></div>
    </div>
    <div id="searchbox">
      <button id="sbtn">
        <i class="material-icons">search</i>
      </button>
      <input type="text" id="search" />
    </div>
    <div id="cat1">
      <a href="./category.html">categories</a>
    </div>
    <div id="cat2">
      <p id="user">login</p>
    </div>
   

    <div id="mycart">
      <span class="material-icons carticon">shopping_cart</span>
      <span id="myCart">my cart</span>
    </div>
  </div>
  <div id="sugBox"></div>
  <!--         dropdown                  -->
  <div id="myDropdown" class="dropdown-content">
    <h2>my account</h2>
    <p id="localName"></p>
    <li>my orders</li>
    <li>saved address</li>
    <li>my wallet ₹0</li>
    <li>faq's</li>
    <li>log out</li>
    <div id="qr">
      <img
        src="https://blinkit.com/16d25a2a463302cf78682e3e3c694122.svg"
        alt=""
      />
      <p>
        <b> scan the qr code and download blinkit app</b>
      </p>
    </div>
  </div>
  

  
   
  </div>`;
}

export default navbar;
