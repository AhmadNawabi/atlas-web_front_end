// Function to create a paragraph and append it to the document body
function createElement(data) {
  const paragraph = document.createElement('p');
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

// Function to query Wikipedia and call the callback with the extract
function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

  xhr.open('GET', url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const pages = response.query.pages;
      const pageId = Object.keys(pages)[0];
      const extract = pages[pageId].extract;
      callback(extract); // Call the provided callback function
    }
  };

  xhr.send();
}

// Call queryWikipedia with createElement as the callback
queryWikipedia(createElement);
