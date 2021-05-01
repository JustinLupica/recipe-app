Backend DB will store recipe IDs from the Spoonacular API, that the user will persist by clicking the
"Save Recipe" button on a specific recipe card.

When a user clicks on the "My Recipes" button in the apps navbar, a fetch request will pull the ids that user has saved and plug in the ids into another fetch request to get those specific recipes from the Spoonacular API.

Can then render a <RecipeCard> component to display that information to the user

Recipe model:
recipe_id: integer
