// module pattern project

// delete from data structure, storage = use indexof and splice
// delete from UI => find id or use queryselector or if ,then delete

// sotrage controller
const StorageCtrl = (function(){


  // public
  return {
    storeItem:function(item){
      let items= [];
      // check if any items in LS

      if (localStorage.getItem('items')=== null) {
        let items=[];

        // push new item
        items.push(item);
        // set LS
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem('items'));
        // push new item
        items.push(item);

        // set again LS
        localStorage.setItem('items', JSON.stringify(items));

      }
    },

    getItemFromStorage:function(){
      let items=[];
      if (localStorage.getItem('items') === null){
        items=[];
      } else{
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
      
    },

    updateItemStorage: function(updatedItem){
       let items = JSON.parse(localStorage.getItem('items'));
       
       items.forEach(function(item,index){
        //  update storage
        if(updatedItem.id === items.id){
            items.splice(index,1,updatedItem);
        }
       });

       localStorage.setItem('items', JSON.stringify(items));


    },

    deleteItemFromStorage:function(id){
      let items = JSON.parse(localStorage.getItem('items'));
       
      items.forEach(function(item,index){
       //  update storage
       if(id === items.id){
           items.splice(index,1);
       }
      });

      localStorage.setItem('items', JSON.stringify(items));

    },

    clearItemsFromStorage:function(){
      localStorage.removeItem('items');
    },
  }

})();

const ItemCtrl = (function () {
  // item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // data structure / State
  const data = {
    // items: [
    //   // { id: 0, name: "Steak Dinner", calories: 1200 },
    //   // { id: 1, name: "Cookie", calories: 400 },
    //   // { id: 2, name: "Eggs", calories: 300 },

    // ],

    items: StorageCtrl.getItemFromStorage(),
    currentItem: null,
    totalCalories: 0,
  };

  return {
    //  return public
    logData: function () {
      return data;
    },

    getItems: function () {
      return data.items;
    },

    // Update data structure with new increment id and return back- part4
    addItem: function (name, calories) {
      let ID;

      // create id
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      // calories to number
      calories = parseInt(calories);

      //  create new item-call constructor
      newItem = new Item(ID, name, calories);

      // add to items array
      data.items.push(newItem);

      // return new item to below
      return newItem;
    },

    getItemById: function (id) {
      let found = null;
      // Loop through items
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },

    // PART 7- update item

    updateitem: function (name, calories) {
      // calories to number

      calories = parseInt(calories);

      let found = null;

      // find the match id with current item boh
      data.items.forEach(function (item) {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });

      return found;
    },

    // delete item -part 8
    deleteItem: function (id) {
      // got ids
      const ids = data.items.map(function (item) {
        return item.id;
      });

      // Get index
      const index = ids.indexOf(id);

      // Remove item
      data.items.splice(index, 1);
    },

    clearAllItems:function(){
      // delete from data structure
      data.items=[];
      // remove from ui
      UICtrl.removeItems();
    },

    setCurrentItem1: function (item) {
      data.currentItem = item;
    },

    // part-6  just return current Item

    getCurrentItem: function () {
      return data.currentItem;
    },

    // part-5
    getTotalCalories: function () {
      let total = 0;

      // loop through and get total calories
      data.items.forEach(function (item) {
        total += item.calories;
      });

      // set total cal in data structure
      data.totalCalories = total;

      return data.totalCalories;
    },
  };
})();

// ***********************************************************************//

// // Ui controller
const UICtrl = (function () {
  // set varible to become id -optional
  const UISelectors = {
    itemList: "#item-list",
    listItems: "#item-list li",
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories",
    clearBtn: ".clear-btn",

    // part 6
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
  };

  return {
    // insert method -part 3
    populateItem: function (items) {
      let html = "";

      items.forEach((item) => {
        html += ` <li class="collection-item" id="item-${item.id}">
        <strong>${item.name} :</strong><em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i></a> </li></li>`;
      });

      // insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    // part-3
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },

    getSelectors: function () {
      return UISelectors;
    },

    addListItem: function (item) {
      document.querySelector(UISelectors.itemList).style.display = "block";

      // add a single element to UI, because one time add one
      // create Li element
      const li = document.createElement("li");
      // add class
      li.className = "collection-item";
      li.id = `item-${item.id}`;
      // inenr HTML
      li.innerHTML = `<strong>${item.name} :</strong><em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil">`;

      // add html

      // insert item at before end
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },

    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },

    // part-6  set up with currentItem
    addItemToForm: function () {
      document.querySelector(
        UISelectors.itemNameInput
      ).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.itemCaloriesInput
      ).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditStates();
    },

    // part-4
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },

    // part-5
    showTotalCalories: function (totalCalories) {
      document.querySelector(
        UISelectors.totalCalories
      ).textContent = totalCalories;
    },

    clearEditStates: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },

    showEditStates: function () {
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },

    // item is object in found
    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // turn html node lsit into array

      listItems = Array.from(listItems);
      
      listItems.forEach(function (listItem) {
        // get id from the each list
        const itemID = listItem.getAttribute("id");

        // if match de, then display at below
        if (itemID === `item-${item.id}`) {
          document.querySelector(
            `#${itemID}`
          ).innerHTML = `<strong>${item.name} :</strong><em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil">`;
        }
      });
    },

    deleteListItem: function (id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },

    // remove item
    removeItems:function(){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // turn node list into array

      listItems = Array.from(listItems);

      listItems.forEach(function(item){
        item.remove();
      })

    }
  };
})();

// ***********************************************************************//

// App controller - main controller for both

const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
  // load event listeners-part3

  const loadEventListeners = function () {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);

    // disable submit oon enter
    document.addEventListener("keypress", function (e) {
      // 13 is enter ,keycode is latest
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemEditClick);

    // update item event

    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener("click", itemUpdateSubmit);

    // BACK BTN to remove inpuit -part 8
    document
      .querySelector(UISelectors.backBtn)
      .addEventListener("click", UICtrl.clearEditStates);

    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener("click", itemDeleteSubmit);

      document
      .querySelector(UISelectors.clearBtn)
      .addEventListener("click", clearAllItemsClick);
  };

  // Add item submit by event call funtion -part4
  const itemAddSubmit = function (e) {
    // console.log("ADD");

    // Get form input from UI controller

    const input = UICtrl.getItemInput();

    // check for name and calories input; if no then can proceed
    if (input.name !== "" && input.calories !== "") {
      // add new item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // add item to UI list
      UICtrl.addListItem(newItem);

      // get total calories-part 5

      const totalCalories = ItemCtrl.getTotalCalories();

      // add total calories in UI -part5
      UICtrl.showTotalCalories(totalCalories);


      // Store in LS -part 9

      StorageCtrl.storeItem(newItem);
      // clear field
      UICtrl.clearInput();
    }

    e.preventDefault();
  };

  // do it because tag is not initally run ; click edit item-part 6
  const itemEditClick = function (e) {
    if (e.target.classList.contains("edit-item")) {
      // get list item id
      const listId = e.target.parentNode.parentNode.id;

      // break it into array

      const listIdArr = listId.split("-");

      //  get the actual id

      const id = parseInt(listIdArr[1]);

      // get entire item
      const itemToEdit = ItemCtrl.getItemById(id);

      // set current item
      ItemCtrl.setCurrentItem1(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  };

  // update-part 7
  const itemUpdateSubmit = function (e) {
    // get item input

    const input = UICtrl.getItemInput();

    // update item
    const updatedItem = ItemCtrl.updateitem(input.name, input.calories);

    // update UI & add calories -part 7

    UICtrl.updateListItem(updatedItem);

    const totalCalories = ItemCtrl.getTotalCalories();

    // add total calories in UI -part5
    UICtrl.showTotalCalories(totalCalories);

    // update local storage-part 9

    StorageCtrl.updateItemStorage(updatedItem);

    UICtrl.clearEditStates();

    e.preventDefault();
  };

  // item delete submit -part 8
  const itemDeleteSubmit = function (e) {
    // get current item

    const currentItem = ItemCtrl.getCurrentItem();

    // delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

    // delete from UI
    UICtrl.deleteListItem(currentItem.id);

    const totalCalories = ItemCtrl.getTotalCalories();

    UICtrl.showTotalCalories(totalCalories);

    // delete from LS -part 9

    StorageCtrl.deleteItemFromStorage(currentItem.id);

    UICtrl.clearEditStates();

    e.preventDefault();


  };

  // clear all -part 8

  const clearAllItemsClick=function(){
      // delete all item from data structure

      ItemCtrl.clearAllItems();

      const totalCalories = ItemCtrl.getTotalCalories();

      UICtrl.showTotalCalories(totalCalories);

      // remove from UI
      UICtrl.removeItems();

      StorageCtrl.clearItemsFromStorage();
      // hide URL
      UICtrl.hideList();

    
  };

  return {
    // init -part 1
    init: function () {
      console.log("Initializing App...");

      // clear edit state- set init state;
      UICtrl.clearEditStates();

      // Fetch items from data structure-part 2
      const items = ItemCtrl.getItems();

      // check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items-part 2
        UICtrl.populateItem(items);
      }

      // Load event listener
      loadEventListeners();
    },
  };
})(ItemCtrl, StorageCtrl, UICtrl);

// initialize App
App.init();
