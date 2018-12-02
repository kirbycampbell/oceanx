martini = Drink.create(
    title: "Shaggy's Perfect Martini",
    description: "A cool refreshing cocktail that will remove the furrows from your brow. Use only the best quality gin. Note: Skewering the olive with a toothpick makes it easier to pick out when you're ready to eat it.",
    steps: "Fill a cocktail shaker with ice. Pour in the vermouth, followed closely by the gin. Shake while counting to 30. Divide into 2 cocktail glasses. Garnish with 1 olive each.",
    source: "https://www.allrecipes.com/recipe/20132/shaggys-perfect-martini/",
  )
  martini.ingredients.create(description: "1/2 fluid ounce dry vermouth")
  martini.ingredients.create(description: "4 fluid ounces gin")
  martini.save
  
  manhattan = Drink.create(
    title: "Manhattan Cocktail",
    description: "The Manhattan is a classic cocktail believed to date back to the late 1800s. It's made with a bracing mixture of bourbon or rye whiskey mixed with sweet vermouth and a dash of Angostura bitters.",
    steps: "Combine whiskey, vermouth, and bitters in a cocktail mixing class. Add ice and stir until chilled. Strain into a chilled cocktail glass.  Garnish with a maraschino cherry.",
    source: "https://www.allrecipes.com/recipe/222415/manhattan-cocktail/"
  )
  manhattan.ingredients.create(description: "1 cup ice cubes")
  manhattan.ingredients.create(description: "1 maraschino cherry")
manhattan.save

oldFashion = Drink.create(
  title: "Old Fashioned Cocktail",
  description: "The earliest version of this cocktail was simply water, sugar, bitters, and booze. Over time, the water became ice, the booze became whiskey, and the drink became an old fashioned.",
  steps: "Muddle sugar cube, water, and bitters in an old fashioned glass for 1 minute. Pour in whiskey and stir for an additional minute. Squeeze the lemon twist over the glass and drop it in. Add ice cubes. Garnish with a slice of orange and a maraschino cherry; serve with a swizzle stick.",
  source: "https://www.allrecipes.com/recipe/221320/old-fashioned-cocktail/"
  )
  oldFashion.ingredients.create(description: "Sugar cube")
  oldFashion.ingredients.create(description: "1 tspn Water")
  oldFashion.ingredients.create(description: "Dash of Bitters")
  oldFashion.ingredients.create(description: "2 oz Whiskey")
  oldFashion.ingredients.create(description: "1 Lemon Twist")
  oldFashion.ingredients.create(description: "Orange Slice")
  oldFashion.ingredients.create(description: "1 maraschino cherry, for garnish")
  oldFashion.save

  mojito = Drink.create(
    title: "The Real Mojito",
    description: "This is an authentic recipe for mojito. I sized the recipe for one serving, but you can adjust it accordingly and make a pitcher full. It's a very refreshing drink for hot summer days. Be careful when drinking it, however. If you make a pitcher you might be tempted to drink the whole thing yourself, and you just might find yourself talking Spanish in no time! Tonic water can be substituted instead of the soda water but the taste is different and somewhat bitter.",
    steps: "Place mint leaves and 1 lime wedge into a sturdy glass. Use a muddler to crush the mint and lime to release the mint oils and lime juice. Add 2 more lime wedges and the sugar, and muddle again to release the lime juice. Do not strain the mixture. Fill the glass almost to the top with ice. Pour the rum over the ice, and fill the glass with carbonated water. Stir, taste, and add more sugar if desired. Garnish with the remaining lime wedge.",
    source: "https://www.allrecipes.com/recipe/147363/the-real-mojito/"
  )
  mojito.ingredients.create(description: "10 Fresh mint leaves")
  mojito.ingredients.create(description: "1/2 Lime cut into 4 wedges")
  mojito.ingredients.create(description: "2 tblspns Sugar")
  mojito.ingredients.create(description: "2 oz White Rum")
  mojito.ingredients.create(description: "1/2 Cup Club Soda")
  mojito.save