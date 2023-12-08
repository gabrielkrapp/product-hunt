export const GETPRODUCTS = "SELECT * FROM products";

export const GETPRODUCTBYID = "SELECT * FROM products WHERE id = $1";

export const VOTEPRODUCT = "UPDATE products SET upvotes = upvotes + 1 WHERE id = $1";

export const TOTALVOTES = "SELECT upvotes FROM products WHERE id = $1";