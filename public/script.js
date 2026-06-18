const giftList = document.getElementById("gift-list")

function displayItems(gifts) {
  giftList.innerHTML = ""

  gifts.forEach((gift) => {
    const article = document.createElement("article")

    article.innerHTML = `
      <img src="${gift.image}" alt="${gift.name}" />
      <h2>${gift.name}</h2>
      <p><strong>Category:</strong> ${gift.category}</p>
      <p><strong>Price:</strong> ${gift.price}</p>
      <p>${gift.description}</p>
    `

    giftList.appendChild(article)
  })
}

async function fetchItems() {
  try {
    const response = await fetch('/api/items')

    if (!response.ok) {
      throw new Error('Failed to fetch items')
    }

    const items = await response.json()
    displayItems(items)
  } catch (error) {
    console.error('Error loading items:', error)
  }
}

fetchItems()