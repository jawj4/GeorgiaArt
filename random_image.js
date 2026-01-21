function setRandomPics() {
    const wide_pics = ["https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/IMG_6192.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/house2.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC01978.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/IMG_5061.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC03498.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC00622.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC02620.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC00490.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC00445.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC03044.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/IMG_4733.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/OUT12.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/ride2.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC04780.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC04465.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC01700.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC03773.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC04661.jpg"];
    let index_value1 = Math.floor(Math.random() * 18);
    let item1 = wide_pics[index_value1];

    let index_value2 = Math.floor(Math.random() * 18);
    while (index_value1 == index_value2) {
        index_value2 = Math.floor(Math.random() * 18);
    }
    let item2 = wide_pics[index_value2];

    let index_value3 = Math.floor(Math.random() * 18);
    while (index_value3 == index_value1 || index_value3 == index_value2) {
        index_value3 = Math.floor(Math.random() * 18);
    }
    let item3 = wide_pics[index_value3];

    let index_value4 = Math.floor(Math.random() * 18);
    while (index_value4 == index_value1 || index_value4 == index_value2 || index_value4 == index_value3) {
        index_value4 = Math.floor(Math.random() * 18);
    }
    let item4 = wide_pics[index_value4];

    const wide1 = document.getElementById("wide1");
    wide1.setAttribute("src", item1)
    const wide2 = document.getElementById("wide2");
    wide2.setAttribute("src", item2)
    const wide3 = document.getElementById("wide3");
    wide3.setAttribute("src", item3)
    const wide4 = document.getElementById("wide4");
    wide4.setAttribute("src", item4)

    //const port_pics = ["https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC03766.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/1.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC00715.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC03558.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC00196.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC01662.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC00268.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC00521.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/film/alma/Still%202026-01-20%20130908_1.1.5.T.jpg"];
    //let port_value = Math.random(8);
    //let port_item = port_pics[port_value];

    //const portrait = document.getElementById("portrait")
    //portrait.setAttribute("src", port_item)

    return;
}