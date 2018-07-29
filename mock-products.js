import faker from 'faker';

const PRODUCTS = [];
for (let i = 0; i < 26; i+=1) {
	let product = {
		color: faker.commerce.color(),
		department: faker.commerce.department(),
		productName: faker.commerce.productName(),
		price: faker.commerce.price(),
		productAdjective: faker.commerce.productAdjective(),
		productMaterial: faker.commerce.productMaterial(),
		id: i,
		text: faker.lorem.paragraphs(),
		image: faker.random.image()
	}

	PRODUCTS.push(product);
}

export default PRODUCTS;