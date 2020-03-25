const apiKey = 'mRxkKTHegAJZAQrg0Fc4enp5Ye5TyYqGMGzSzJQi'
const baseEndpoint = 'https://api.nal.usda.gov/fdc/v1/search?api_key=';
const usdaEndpoint = `${baseEndpoint}${apiKey}&requireAllWords=true&includeDataTypeList=Survey%20(FNDDS)&generalSearchInput=raw+`;

const profileId = document.getElementById('profile-id').value;

const itemList = document.getElementById('items');
const searchFood = document.getElementById('search-food');
searchFood.addEventListener('click', getFood)

let foodItems;

let listItem = document.createElement('li');

let addItem = document.createElement('button');
addItem.textContent = 'Add';
addItem.addEventListener('click', addToProfile);

function getFood() {
    itemList.innerHTML = '';
    foodValue = document.getElementById('food-item').value;
    fetch(`${usdaEndpoint}${foodValue}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            foodItem = data.foods[0];
            // foodItems.forEach(function(foodItem) {
                listItem.textContent = foodItem.description;
                listItem.setAttribute('data-fdcId', foodItem.fdcId);
                itemList.appendChild(listItem);
                itemList.appendChild(addItem);
            // });
        });
}
function addToProfile() {

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/whole_food', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        name: listItem.textContent,
        fdcid: listItem.dataset.fdcid,
        profile_id: profileId,
    }));
    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            location.reload();
        }
    }
}