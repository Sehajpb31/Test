document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const searchForm = document.getElementById("search-form");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const searchTerm = searchBar.value;
        if (searchTerm) {
            const searchEngineId = 'YOUR_SEARCH_ENGINE_ID'; // Replace with your Search Engine ID
            const apiKey = 'YOUR_API_KEY'; // Replace with your API Key
            const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${searchTerm}&key=${apiKey}&cx=${searchEngineId}`;

            // Perform the Google Custom Search and redirect to the search results page.
            window.location.href = apiUrl;
        }
    });
});
