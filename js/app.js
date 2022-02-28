const loadPhones = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // Fetching data
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => displayPhones(data.data));
}

// Display Phones

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    const twentyPhones = phones.slice(0, 20);
    twentyPhones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('phone');
        div.classList.add('col-lg-4', 'my-3');
        div.innerHTML = `
            <div class="card mx-auto" style="width: 18rem;">
                <img src="${phone.image}" class="card-img-top img-fluid" alt="phone-image">
                <div class="card-body">
                    <h4 class="card-title my-3">${phone.phone_name}</h4>
                    <h5 class="my-3">${phone.brand}</h5>
                    <button class="btn btn-primary px-4 py-2">Details</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    })
}