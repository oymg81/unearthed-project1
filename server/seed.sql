TRUNCATE TABLE project2_items RESTART IDENTITY;

INSERT INTO project2_items (name, price, category, description, image)
VALUES
('Smart Water Bottle', '$35', 'Tech Gift', 'A smart bottle that reminds you to drink water throughout the day.', 'https://images.unsplash.com/photo-1602143407151-7111542de6e8'),
('Mini Projector', '$80', 'Entertainment', 'A portable projector perfect for movie nights at home or outdoors.', 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a'),
('Personalized Journal', '$22', 'Creative Gift', 'A stylish journal for writing goals, ideas, and daily reflections.', 'https://images.unsplash.com/photo-1517842645767-c639042777db'),
('Indoor Plant Kit', '$28', 'Home Gift', 'A beginner-friendly plant kit that brings nature into any room.', 'https://images.unsplash.com/photo-1485955900006-10f4d324d411'),
('Wireless Charging Stand', '$45', 'Tech Gift', 'A sleek charging stand for phones, earbuds, and smart watches.', 'https://images.unsplash.com/photo-1586953208448-b95a79798f07');
