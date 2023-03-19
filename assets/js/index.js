function onLoad() {
    var iconsDiv = document.getElementById("welcomeIconsDiv");
    iconsDiv.innerHTML = "";//clear all contents
    var welcomeInformationDiv = document.getElementById("welcomeInformation");
    welcomeInformationDiv.innerHTML = "";
    var infoAfterWelcomeDiv = document.getElementById("infoAfterWelcomeDiv");
    infoAfterWelcomeDiv.innerHTML = "";
    var servicesDiv = document.getElementById("servicesDiv");
    servicesDiv.innerHTML = "";

    fetch("https://excelapis-bootstrap.onrender.com/getWelcomePageIconsInfo")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((element) =>
            {
                var iconContainerDiv = document.createElement("div");
                iconContainerDiv.setAttribute("class", "col-xl-2 col-md-4");

                var iconContainer = document.createElement("div");
                iconContainer.setAttribute("class", "icon-box");

                var containerContent = document.createElement("i");
                containerContent.setAttribute("class", element[2]);//css class from excel

                var textContainer = document.createElement("h3");
                var text = document.createElement("a");
                text.href = "";
                text.innerHTML = element[1];//text from excel

                textContainer.appendChild(text);
                iconContainer.appendChild(containerContent);
                iconContainer.appendChild(textContainer);
                iconContainerDiv.appendChild(iconContainer);

                iconsDiv.appendChild(iconContainerDiv);
            });
        });

    fetch("https://excelapis-bootstrap.onrender.com/getWelcomeParagraph")
        .then((response) => response.json())
        .then((data) => {
            var title = document.createElement("h3");
            var paragraphOne = document.createElement("p");
            paragraphOne.setAttribute("class", "fst-italic");
            var unorderedList = document.createElement("ul");
            var paragraphTwo = document.createElement("p");

            data.forEach((element) =>
            {
                title.innerHTML = element[1];
                welcomeInformationDiv.appendChild(title);
                paragraphOne.innerHTML = element[2];
                welcomeInformationDiv.appendChild(paragraphOne);

                var listItem = document.createElement("li");
                listItem.innerHTML = "<i class='ri-check-double-line'></i>" + element[3];
                unorderedList.appendChild(listItem);

                listItem = document.createElement("li");
                listItem.innerHTML = "<i class='ri-check-double-line'></i>" + element[4];
                unorderedList.appendChild(listItem);

                listItem = document.createElement("li");
                listItem.innerHTML = "<i class='ri-check-double-line'></i>" + element[5];
                unorderedList.appendChild(listItem);
                welcomeInformationDiv.appendChild(unorderedList);

                paragraphTwo.innerHTML = element[6];
                welcomeInformationDiv.appendChild(paragraphTwo);
            });
        });

    fetch("https://excelapis-bootstrap.onrender.com/getInformationAfterWelcome")
        .then((response) => response.json())
        .then((data) => 
        {
            var div = document.createElement("div");
            div.setAttribute("data-aos", "zoom-in");
            div.setAttribute("data-aos-delay", "150");

            data.forEach((element, i) =>
            {
                if(i == 0)
                {
                    var it = document.createElement("i");
                    var h4 = document.createElement("h4");
                    var p = document.createElement("p");

                    div.setAttribute("class", "icon-box mt-5 mt-lg-0");
                    it.setAttribute("class", "bx bx-receipt");
                    h4.innerHTML = element[1];
                    p.innerHTML = element[2];

                    div.appendChild(it);
                    div.appendChild(h4);
                    div.appendChild(p);
                }
                else if(i == 1)
                {
                    var it = document.createElement("i");
                    var h4 = document.createElement("h4");
                    var p = document.createElement("p");

                    div.setAttribute("class", "icon-box mt-5");
                    it.setAttribute("class", "bx bx-cube-alt");
                    h4.innerHTML = element[1];
                    p.innerHTML = element[2];

                    div.appendChild(it);
                    div.appendChild(h4);
                    div.appendChild(p);
                }
                else if(i == 2)
                {
                    var it = document.createElement("i");
                    var h4 = document.createElement("h4");
                    var p = document.createElement("p");

                    div.setAttribute("class", "icon-box mt-5");
                    it.setAttribute("class", "bx bx-images");
                    h4.innerHTML = element[1];
                    p.innerHTML = element[2];

                    div.appendChild(it);
                    div.appendChild(h4);
                    div.appendChild(p);
                }
                else if(i == 3)
                {
                    var it = document.createElement("i");
                    var h4 = document.createElement("h4");
                    var p = document.createElement("p");

                    div.setAttribute("class", "icon-box mt-5");
                    it.setAttribute("class", "bx bx-shield");
                    h4.innerHTML = element[1];
                    p.innerHTML = element[2];

                    div.appendChild(it);
                    div.appendChild(h4);
                    div.appendChild(p);
                }
            });
            infoAfterWelcomeDiv.appendChild(div);
        });

    fetch("https://excelapis-bootstrap.onrender.com/getServices")
        .then((response) => response.json())
        .then((data) => 
        {
            data.forEach((element, i) =>
            {
                if(i == 0)
                {
                    var div = document.createElement("div");
                    var iconBox = document.createElement("div");
                    var iconDiv = document.createElement("div");
                    var h4 = document.createElement("h4");
                    var p = document.createElement("p");

                    p.innerHTML = element[2];
                    h4.innerHTML = "<a href=''>" + element[1] + "</a>";
                    iconDiv.setAttribute("class", "icon");
                    iconDiv.innerHTML = "<i class='bx bxl-dribbble'></i>";
                    iconBox.setAttribute("class", "icon-box");
                    iconBox.appendChild(iconDiv);
                    iconBox.appendChild(h4);
                    iconBox.appendChild(p);
                    div.setAttribute("data-aos", "zoom-in");
                    div.setAttribute("class", "col-lg-4 col-md-6 d-flex align-items-stretch");
                    div.setAttribute("data-aos-delay", "100");
                    div.appendChild(iconBox);
                    servicesDiv.appendChild(div);
                }
                else if(i == 1)
                {
                    var div = document.createElement("div");
                    var iconBox = document.createElement("div");
                    var iconDiv = document.createElement("div");
                    var h4 = document.createElement("h4");
                    var p = document.createElement("p");

                    p.innerHTML = element[2];
                    h4.innerHTML = "<a href=''>" + element[1] + "</a>";
                    iconDiv.setAttribute("class", "icon");
                    iconDiv.innerHTML = "<i class='bx bx-file'></i>";
                    iconBox.setAttribute("class", "icon-box");
                    iconBox.appendChild(iconDiv);
                    iconBox.appendChild(h4);
                    iconBox.appendChild(p);
                    div.setAttribute("data-aos", "zoom-in");
                    div.appendChild(iconBox);
                    div.setAttribute("class", "col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0");
                    div.setAttribute("data-aos-delay", "200");
                    servicesDiv.appendChild(div);
                }
                else if(i == 2)
                {
                    var div = document.createElement("div");
                    var iconBox = document.createElement("div");
                    var iconDiv = document.createElement("div");
                    var h4 = document.createElement("h4");
                    var p = document.createElement("p");

                    p.innerHTML = element[2];
                    h4.innerHTML = "<a href=''>" + element[1] + "</a>";
                    iconDiv.setAttribute("class", "icon");
                    iconDiv.innerHTML = "<i class='bx bx-tachometer'></i>";
                    iconBox.setAttribute("class", "icon-box");
                    iconBox.appendChild(iconDiv);
                    iconBox.appendChild(h4);
                    iconBox.appendChild(p);
                    div.setAttribute("data-aos", "zoom-in");
                    div.appendChild(iconBox);
                    div.setAttribute("class", "col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0");
                    div.setAttribute("data-aos-delay", "300");
                    servicesDiv.appendChild(div);
                }
                else if(i == 3)
                {
                    var div = document.createElement("div");
                    var iconBox = document.createElement("div");
                    var iconDiv = document.createElement("div");
                    var h4 = document.createElement("h4");
                    var p = document.createElement("p");

                    p.innerHTML = element[2];
                    h4.innerHTML = "<a href=''>" + element[1] + "</a>";
                    iconDiv.setAttribute("class", "icon");
                    iconDiv.innerHTML = "<i class='bx bx-world'></i>";
                    iconBox.setAttribute("class", "icon-box");
                    iconBox.appendChild(iconDiv);
                    iconBox.appendChild(h4);
                    iconBox.appendChild(p);
                    div.setAttribute("data-aos", "zoom-in");
                    div.appendChild(iconBox);
                    div.setAttribute("class", "col-lg-4 col-md-6 d-flex align-items-stretch mt-4");
                    div.setAttribute("data-aos-delay", "100");
                    servicesDiv.appendChild(div);
                }
                else if(i == 4)
                {
                    var div = document.createElement("div");
                    var iconBox = document.createElement("div");
                    var iconDiv = document.createElement("div");
                    var h4 = document.createElement("h4");
                    var p = document.createElement("p");

                    p.innerHTML = element[2];
                    h4.innerHTML = "<a href=''>" + element[1] + "</a>";
                    iconDiv.setAttribute("class", "icon");
                    iconDiv.innerHTML = "<i class='bx bx-slideshow'></i>";
                    iconBox.setAttribute("class", "icon-box");
                    iconBox.appendChild(iconDiv);
                    iconBox.appendChild(h4);
                    iconBox.appendChild(p);
                    div.setAttribute("data-aos", "zoom-in");
                    div.appendChild(iconBox);
                    div.setAttribute("class", "col-lg-4 col-md-6 d-flex align-items-stretch mt-4");
                    div.setAttribute("data-aos-delay", "200");
                    servicesDiv.appendChild(div);
                }
                else if(i == 5)
                {
                    var div = document.createElement("div");
                    var iconBox = document.createElement("div");
                    var iconDiv = document.createElement("div");
                    var h4 = document.createElement("h4");
                    var p = document.createElement("p");

                    p.innerHTML = element[2];
                    h4.innerHTML = "<a href=''>" + element[1] + "</a>";
                    iconDiv.setAttribute("class", "icon");
                    iconDiv.innerHTML = "<i class='bx bx-arch'></i>";
                    iconBox.setAttribute("class", "icon-box");
                    iconBox.appendChild(iconDiv);
                    iconBox.appendChild(h4);
                    iconBox.appendChild(p);
                    div.setAttribute("data-aos", "zoom-in");
                    div.appendChild(iconBox);
                    div.setAttribute("class", "col-lg-4 col-md-6 d-flex align-items-stretch mt-4");
                    div.setAttribute("data-aos-delay", "300");
                    servicesDiv.appendChild(div);
                }
            });
        });

    fetch("https://excelapis-bootstrap.onrender.com/getTestimonials")
        .then((response) => response.json())
        .then((data) => console.log("getTestimonials", data));

    fetch("https://excelapis-bootstrap.onrender.com/getMembers")
        .then((response) => response.json())
        .then((data) => console.log("getMembers", data));
}