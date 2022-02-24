const menuPageLoad = () => {

    const mainChunk1 = document.createElement("div");
    mainChunk1.setAttribute("id", "mainChunk1")
    document.getElementById('content').appendChild(mainChunk1);

        const menuHeader = document.createElement('h1');
        menuHeader.setAttribute("id", "menuHeader");
        const menuHeaderText = document.createTextNode('Menu');
        menuHeader.appendChild(menuHeaderText);
        document.getElementById('mainChunk1').appendChild(menuHeader);

        const starters = document.createElement('div');
        starters.setAttribute("id", "starters");
        const startersText = document.createTextNode('Starters');
        starters.appendChild(startersText);
        document.getElementById('mainChunk1').appendChild(starters);
        
        const startersBox = document.createElement('div');
        startersBox.setAttribute("id", "startersBox");
        document.getElementById('mainChunk1').appendChild(startersBox);
        
        const listOfStarters = document.createElement('ul');
        listOfStarters.setAttribute("id", "listOfStarters");
        document.getElementById('startersBox').appendChild(listOfStarters);

            const risotto = document.createElement("li");
            const risottoText = document.createTextNode("Risotto");
            risotto.appendChild(risottoText);
            document.getElementById('listOfStarters').appendChild(risotto);

            const chickenWings = document.createElement("li");
            const chickenWingsText = document.createTextNode("Chicken Wings");
            chickenWings.appendChild(chickenWingsText);
            document.getElementById('listOfStarters').appendChild(chickenWings);

            const salmonSashimi = document.createElement("li");
            const salmonSashimiText = document.createTextNode("Salmon Sashimi");
            salmonSashimi.appendChild(salmonSashimiText);
            document.getElementById('listOfStarters').appendChild(salmonSashimi);

            const garlicDoughbBalls = document.createElement("li");
            const garlicDoughbBallsText = document.createTextNode("Garlic Dough Balls");
            garlicDoughbBalls.appendChild(garlicDoughbBallsText);
            document.getElementById('listOfStarters').appendChild(garlicDoughbBalls);

        const listOfStarterPrices = document.createElement('ul');
        listOfStarterPrices.setAttribute("id", "listOfStarterPrices");
        document.getElementById('startersBox').appendChild(listOfStarterPrices);

            const risottoPrice = document.createElement("li");
            const risottoPriceText = document.createTextNode("£4.99");
            risottoPrice.appendChild(risottoPriceText);
            document.getElementById('listOfStarterPrices').appendChild(risottoPrice);

            const chickenWingsPrice = document.createElement("li");
            const chickenWingsPriceText = document.createTextNode("£5.25");
            chickenWingsPrice.appendChild(chickenWingsPriceText);
            document.getElementById('listOfStarterPrices').appendChild(chickenWingsPrice);

            const salmonSashimiPrice = document.createElement("li");
            const salmonSashimiPriceText = document.createTextNode("£6.99");
            salmonSashimiPrice.appendChild(salmonSashimiPriceText);
            document.getElementById('listOfStarterPrices').appendChild(salmonSashimiPrice);

            const garlicDoughBallsPrice = document.createElement("li");
            const garlicDoughBallsPriceText = document.createTextNode("£6.99");
            garlicDoughBallsPrice.appendChild(garlicDoughBallsPriceText);
            document.getElementById('listOfStarterPrices').appendChild(garlicDoughBallsPrice);

        const mainCourses = document.createElement('div');
        mainCourses.setAttribute("id", "mainCourses");
        const mainCourseText = document.createTextNode('Main Courses');
        mainCourses.appendChild(mainCourseText);
        document.getElementById('mainChunk1').appendChild(mainCourses);
                
            const mainCourseBox = document.createElement('div');
            mainCourseBox.setAttribute("id", "mainCourseBox");
            document.getElementById('mainChunk1').appendChild(mainCourseBox);
                
            const listOfMainCourses = document.createElement('ul');
            listOfMainCourses.setAttribute("id", "listOfMainCourses");
            document.getElementById('mainCourseBox').appendChild(listOfMainCourses);
        
            const beefRibs = document.createElement("li");
            const beefRibsText = document.createTextNode("Beef Ribs");
            beefRibs.appendChild(beefRibsText);
            document.getElementById('listOfMainCourses').appendChild(beefRibs);
        
            const ribeyeSteak = document.createElement("li");
            const ribeyeSteakText = document.createTextNode("Ribeye Steak");
            ribeyeSteak.appendChild(ribeyeSteakText);
            document.getElementById('listOfMainCourses').appendChild(ribeyeSteak);
        
            const jambalaya = document.createElement("li");
            const jambalayaText = document.createTextNode("Chicken and Chorizo Jambalaya");
            jambalaya.appendChild(jambalayaText);
            document.getElementById('listOfMainCourses').appendChild(jambalaya);
        
            const chilli = document.createElement("li");
            const chilliText = document.createTextNode("Beef Brisket Chilli");
            chilli.appendChild(chilliText);
            document.getElementById('listOfMainCourses').appendChild(chilli);
        
            const fajitas = document.createElement("li");
            const fajitasText = document.createTextNode("Chicken Fajitas");
            fajitas.appendChild(fajitasText);
            document.getElementById('listOfMainCourses').appendChild(fajitas);
        
        const listOfMainCoursePrices = document.createElement('ul');
        listOfMainCoursePrices.setAttribute("id", "listOfMainCoursePrices");
        document.getElementById('mainCourseBox').appendChild(listOfMainCoursePrices);
        
            const beefRibsPrice = document.createElement("li");
            const beefRibsTextPrice = document.createTextNode("£11.99");
            beefRibsPrice.appendChild(beefRibsTextPrice);
            document.getElementById('listOfMainCoursePrices').appendChild(beefRibsPrice);
        
            const ribeyeSteakPrice = document.createElement("li");
            const ribeyeSteakPriceText = document.createTextNode("£15.99");
            ribeyeSteakPrice.appendChild(ribeyeSteakPriceText);
            document.getElementById('listOfMainCoursePrices').appendChild(ribeyeSteakPrice);
        
            const jambalayaPrice = document.createElement("li");
            const jambalayaPriceText = document.createTextNode("£8.99");
            jambalayaPrice.appendChild(jambalayaPriceText);
            document.getElementById('listOfMainCoursePrices').appendChild(jambalayaPrice);
        
            const chilliPrice = document.createElement("li");
            const chilliPriceText = document.createTextNode("£9.99");
            chilliPrice.appendChild(chilliPriceText);
            document.getElementById('listOfMainCoursePrices').appendChild(chilliPrice);
        
            const fajitasPrice = document.createElement("li");
            const fajitasTextPrice = document.createTextNode("£9.50");
            fajitasPrice.appendChild(fajitasTextPrice);
            document.getElementById('listOfMainCoursePrices').appendChild(fajitasPrice);

            const dessert = document.createElement('div');
            dessert.setAttribute("id", "dessert");
            const dessertText = document.createTextNode('Dessert');
            dessert.appendChild(dessertText);
            document.getElementById('mainChunk1').appendChild(dessert);
            
            const dessertBox = document.createElement('div');
            dessertBox.setAttribute("id", "dessertBox");
            document.getElementById('mainChunk1').appendChild(dessertBox);
            
        const listOfDessert = document.createElement('ul');
        listOfDessert.setAttribute("id", "listOfDessert");
        document.getElementById('dessertBox').appendChild(listOfDessert);
    
            const fondant = document.createElement("li");
            const fondantText = document.createTextNode("Chocolate Fondant");
            fondant.appendChild(fondantText);
            document.getElementById('listOfDessert').appendChild(fondant);
    
            const toffee = document.createElement("li");
            const toffeeText = document.createTextNode("Sticky Toffee Pudding");
            toffee.appendChild(toffeeText);
            document.getElementById('listOfDessert').appendChild(toffee);
    
            const appleCrumble = document.createElement("li");
            const appleCrumbleText = document.createTextNode("Apple Crumble");
            appleCrumble.appendChild(appleCrumbleText);
            document.getElementById('listOfDessert').appendChild(appleCrumble);
    
            const brownie = document.createElement("li");
            const brownieText = document.createTextNode("Chocolate and Caramel Brownie");
            brownie.appendChild(brownieText);
            document.getElementById('listOfDessert').appendChild(brownie);
    
            const bread = document.createElement("li");
            const breadText = document.createTextNode("Bread and Butter Pudding");
            bread.appendChild(breadText);
            document.getElementById('listOfDessert').appendChild(bread);
    
        const listOfDessertPrices = document.createElement('ul');
        listOfDessertPrices.setAttribute("id", "listOfDessertPrices");
        document.getElementById('dessertBox').appendChild(listOfDessertPrices);
    
            const fondantPrice = document.createElement("li");
            const fondantPriceText = document.createTextNode("£7.99");
            fondantPrice.appendChild(fondantPriceText);
            document.getElementById('listOfDessertPrices').appendChild(fondantPrice);
    
            const toffeePrice = document.createElement("li");
            const toffeePriceText = document.createTextNode("£6.99");
            toffeePrice.appendChild(toffeePriceText);
            document.getElementById('listOfDessertPrices').appendChild(toffeePrice);
    
            const appleCrumblePrice = document.createElement("li");
            const appleCrumblePriceText = document.createTextNode("£5.99");
            appleCrumblePrice.appendChild(appleCrumblePriceText);
            document.getElementById('listOfDessertPrices').appendChild(appleCrumblePrice);
    
            const browniePrice = document.createElement("li");
            const browniePriceText = document.createTextNode("£5.99");
            browniePrice.appendChild(browniePriceText);
            document.getElementById('listOfDessertPrices').appendChild(browniePrice);
    
            const breadPrice = document.createElement("li");
            const breadTextPrice = document.createTextNode("£5.99");
            breadPrice.appendChild(breadTextPrice);
            document.getElementById('listOfDessertPrices').appendChild(breadPrice);
           
}

export {menuPageLoad};

