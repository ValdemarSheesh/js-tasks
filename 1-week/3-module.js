class Product {
    name = "";
    price = 0;
    quantity = 0;
    description = "";

    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    static filterProduct(str, products) {
        let result = products;

        for (const params of str.split("&")) {
            let args = params.split("-");
            switch (args[0]) {
                case "name":
                    if (args[1] === "contains") {
                        result = result.filter((product) =>
                            product.name.includes(args[2]));
                    } else if (args[1] === "starts") {
                        result = result.filter((product) =>
                            product.name.startsWith(args[2]));
                    } else if (args[1] === "ends") {
                        result = result.filter((product) =>
                            product.name.endsWith(args[2]));
                    }
                    break;
                case "price":
                    if (args[1][1] === '=') {
                        if (args[1][0] === ">") {
                            result = result.filter((product) =>
                                product.price >= args[1].slice(2));
                        } else if (args[1][0] === "<") {
                            result = result.filter((product) =>
                                product.price <= args[1].slice(2));
                        }
                    } else {
                        if (args[1][0] === ">") {
                            result = result.filter((product) =>
                                product.price > args[1].slice(1));
                        } else if (args[1][0] === "<") {
                            result = result.filter((product) =>
                                product.price < args[1].slice(1));
                        } else if (args[1][0] === "=") {
                            result = result.filter((product) =>
                                product.price == args[1].slice(1));
                        }
                    }
                    break;
                case "quantity":
                    if (args[1][1] === '=') {
                        if (args[1][0] === ">") {
                            result = result.filter((product) =>
                                product.quantity >= args[1].slice(2));
                        } else if (args[1][0] === "<") {
                            result = result.filter((product) =>
                                product.quantity <= args[1].slice(2));
                        }
                    } else {
                        if (args[1][0] === ">") {
                            result = result.filter((product) =>
                                product.quantity > args[1].slice(1));
                        } else if (args[1][0] === "<") {
                            result = result.filter((product) =>
                                product.quantity < args[1].slice(1));
                        } else if (args[1][0] === "=") {
                            result = result.filter((product) =>
                                product.quantity == args[1].slice(1));
                        }
                    }
                    break;
                case "description":
                    if (args[1] === "contains") {
                        result = result.filter((product) =>
                            product.description.includes(args[2]));
                    } else if (args[1] === "starts") {
                        result = result.filter((product) =>
                            product.description.startsWith(args[2]));
                    } else if (args[1] === "ends") {
                        result = result.filter((product) =>
                            product.description.endsWith(args[2]));
                    }
                    break;
            }
        }

        return result;
    }
}

let products = [];
products.push(new Product("Product 1", 100, 10, "Product 1 Description"));
products.push(new Product("Product 2", 200, 20, "Product 2 Description"));
products.push(new Product("Product 3", 300, 30, "Product 3 Description"));
products.push(new Product("Product 4", 400, 40, "Product 4 Description"));



console.log(Product.filterProduct("name-contains-Product&price-=100&quantity->5&description-ends-Description", products));