const loadPhones = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // Fetching data
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => console.log(data));
}