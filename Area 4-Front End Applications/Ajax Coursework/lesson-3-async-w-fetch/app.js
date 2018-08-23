(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
        , {
            headers: {
                Authorization: 'Client-ID 0da39c79eabda0814212a0b1f6666f54eaf306c028b1be94ecfb2b5e6125831c'
            }
        }).then(response => response.json())
        .then(addImage)
        .catch(e => requestError(e, 'image'));

        function addImage(data) {
            let htmlContent = '';
            const firstImage = data.results[0];

            if (firstImage) {
                htmlContent = `<figure>
                    <img src="${firstImage.urls.small}" alt="${searchedForText}">
                    <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                    </figure>`;
            } else {
                htmlContent = 'Unfortunately, no image was returned for your search.'
            }

            responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
        }
    });
})();
