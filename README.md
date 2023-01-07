# recipe-app-api

# RECIPES

# Get all recepies with queries
domainName/recipes/?queryValue
# Get recepies by author id
domainName/recipes/author/id
# Get one recepie by id
domainName/recipes/id
# Delete one recepie by id
domainName/recipes/id
# Change one recepie by id
domainName/recipes/id

payload = {
	rate: 0,
	title: ``,
	steps: [``,``],
	description: ``,
	ingredients: [``,``],
	image: ``,
}
# Create one recepie by id
domainName/recipes/

payload = {
	type: ``,
	steps: [``,``],
	title: ``,
	authorId: ``,
	authorLogin: ``,
	description: ``,
	ingredients: [``,``],
	image: ``,
}




# Users

# Get user by id
domainName/users/id
# Delete one user by id
domainName/users/id
# Change one user by id
domainName/users/id

payload = {
	login: ``,
	email: ``,
	avatar: ``,
	password: ``
}
# Sign In user
domainName/users/sign-in

payload = {
	login: ``,
	email: ``
}
# Sign Up user
domainName/users/sign-up

payload = {
	email: req.body.email,
	password: req.body.password,
	login: req.body.login
}# recipe-app-api
