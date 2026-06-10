const gifts = [
  {
    name: "Smart Water Bottle",
    price: "$35",
    category: "Tech Gift",
    description: "A smart bottle that reminds you to drink water throughout the day.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
  },
  {
    name: "Mini Projector",
    price: "$80",
    category: "Entertainment",
    description: "A portable projector perfect for movie nights at home or outdoors.",
    image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a"
  },
  {
    name: "Personalized Journal",
    price: "$22",
    category: "Creative Gift",
    description: "A stylish journal for writing goals, ideas, and daily reflections.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db"
  },
  {
    name: "Indoor Plant Kit",
    price: "$28",
    category: "Home Gift",
    description: "A beginner-friendly plant kit that brings nature into any room.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
  },
  {
    name: "Wireless Charging Stand",
    price: "$45",
    category: "Tech Gift",
    description: "A sleek charging stand for phones, earbuds, and smart watches.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07"
  }
]

const giftList = document.getElementById("gift-list")

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