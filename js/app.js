// Load Phones
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
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('phone');
        div.classList.add('col-lg-4', 'my-3');
        div.innerHTML = `
            <div class="card mx-auto" style="width: 18rem;">
                <img src="${phone.image}" class="card-img-top img-fluid" alt="phone-image">
                <div class="card-body">
                    <h4 class="card-title my-3">${phone.phone_name}</h4>
                    <h5 class="my-3">${phone.brand}</h5>
                    <button onclick="loadDetails('${phone.slug}')" class="btn btn-primary px-4 py-2">Details</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    })
}

// Load Details
const loadDetails = phoneId => {
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
        .then(res => res.json())
        .then(data => displayDetails(data.data));
}

// Display Details
const displayDetails = phone => {
    const detailsContainer = document.getElementById('phone-details');
    console.log(phone.mainFeatures)
    detailsContainer.innerHTML = `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                    <img src="${phone.image}" class="img-fluid rounded-start w-50" alt="phone-image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">${phone.name}</h4>
                        <h5 class="card-text">${phone.releaseDate}</h5>
                        <p class="card-text">
                            <ul class="list-unstyled">
                                <li class="h5">Main Features</li>
                                <li><span class="h6">CPU:</span> ${phone.mainFeatures.chipSet}</li>
                                <li><span class="h6">Display:</span> ${phone.mainFeatures.displaySize}</li>
                                <li><span class="h6">Storage:</span> ${phone.mainFeatures.storage}</li>
                                <li><span class="h6">Memory:</span> ${phone.mainFeatures.memory}</li>
                                <li onclick="loadSensors(${phone.mainFeatures.sensors})">Sensors:
                                <ul id="sensors">
                                    
                                </ul>
                                </li>
                                <li>This may still come in handy in some situations.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}