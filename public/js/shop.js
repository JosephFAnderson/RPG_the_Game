const filterShop = (event, itemType) =>{
    const tabContent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    };

    const tabLinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    };

    document.getElementById(itemType).style.display = "block";
    event.target.className += " active";
}