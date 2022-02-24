const contactPageLoad = () => {

    const mainChunk2 = document.createElement("div");
    mainChunk2.setAttribute("id", "mainChunk2")
    document.getElementById('content').appendChild(mainChunk2);

        const phoneNumber = document.createElement("div");
        phoneNumber.setAttribute("id", "phoneNumber");
        const phoneNumberText = document.createTextNode("Phone Number: +123456789");
        phoneNumber.appendChild(phoneNumberText);
        document.getElementById('mainChunk2').appendChild(phoneNumber);

        const email = document.createElement("div");
        email.setAttribute("id", "email");
        const emailText = document.createTextNode("E-mail: muyspicy@muchocaliente.co.uk");
        email.appendChild(emailText);
        document.getElementById('mainChunk2').appendChild(email);

        const address = document.createElement("div");
        address.setAttribute("id", "address");
        const addressText = document.createTextNode("Address: 45 Downtheroad Street, Treespace, ZX12 345");
        address.appendChild(addressText);
        document.getElementById('mainChunk2').appendChild(address);
}

export {contactPageLoad};