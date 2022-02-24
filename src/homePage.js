const homePageLoad = () => {
  
    const mainChunk = document.createElement("div");
    mainChunk.setAttribute("id", "mainChunk")
    document.getElementById('content').appendChild(mainChunk);

        const description = document.createElement("div");
        description.setAttribute("id", "description");
        const descriptionText = document.createTextNode("Colorful, modest eatery offering a menu of traditional spicy dishes such as spicy & muy spicy.");
        description.appendChild(descriptionText);
        document.getElementById('mainChunk').appendChild(description);

        const openingHours = document.createElement("ul");
        openingHours.setAttribute("id", "openingHours");
        const openingHoursText = document.createTextNode("Opening Hours:");
        openingHours.appendChild(openingHoursText);
        document.getElementById('mainChunk').appendChild(openingHours);

            const monday = document.createElement("li");
            const mondayText = document.createTextNode("Monday: 12:00-23:00");
            monday.appendChild(mondayText);
            document.getElementById('openingHours').appendChild(monday);

            const tuesday = document.createElement("li");
            const tuesdayText = document.createTextNode("Tuesday: 12:00-23:00");
            tuesday.appendChild(tuesdayText);
            document.getElementById('openingHours').appendChild(tuesday);

            const wednesday = document.createElement("li");
            const wednesdayText = document.createTextNode("Wednesday: 12:00-23:00");
            wednesday.appendChild(wednesdayText);
            document.getElementById('openingHours').appendChild(wednesday);

            const thursday = document.createElement("li");
            const thursdayText = document.createTextNode("Thursday: 12:00-23:00");
            thursday.appendChild(thursdayText);
            document.getElementById('openingHours').appendChild(thursday);

            const friday = document.createElement("li");
            const fridayText = document.createTextNode("Friday: 12:00-23:00");
            friday.appendChild(fridayText);
            document.getElementById('openingHours').appendChild(friday);

            const saturday = document.createElement("li");
            const saturdayText = document.createTextNode("Saturday: 12:00-23:00");
            saturday.appendChild(saturdayText);
            document.getElementById('openingHours').appendChild(saturday);

            const sunday = document.createElement("li");
            const sundayText = document.createTextNode("Sunday: 12:00-23:00");
            sunday.appendChild(sundayText);
            document.getElementById('openingHours').appendChild(sunday);

        const location = document.createElement("div");
        location.setAttribute('id', 'location')
        const locationText = document.createTextNode("45 Downtheroad Street");
        location.appendChild(locationText);
        document.getElementById('mainChunk').appendChild(location);


    
    }



export {homePageLoad};