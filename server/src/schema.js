const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		users: [User]
		posts: [Post]
		post(id: ID!): Post!
	}

	type Mutation {
		createUser(email: String!, first_name: String!, last_name: String): User!
		createPost(
			title: String
			description: String
			link: String
			price: String
			image_path: String
			userId: String
			vincode: String
		): Post!
		updatePost(
			id: ID!
			title: String
			link: String
			price: String
			description: String
			userId: String
			image_path: String
			vincode: String
		): Post!
		deletePost(id: ID!): Post!
	}

	type User {
		id: ID!
		email: String!
		first_name: String
		last_name: String
	}

	type Post {
		id: ID!
		vincode: String
		title: String
		description: String
		link: String
		price: String
		userId: String
		image_path: String
		createdAt: String
		updatedAt: String
	}
`;

module.exports = {
	typeDefs
};
