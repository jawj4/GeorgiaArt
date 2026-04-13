function setRandomPics() {
    const wide_pics = ["https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/film/fortune%20favours/01.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC06309.jpg",  "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC03498.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC03044.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC04780.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC04465.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC04983.jpg"];
    const wide_index = 7
    const port_pics = ["https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC03766.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/1.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC00715.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC03558.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC00196.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC01662.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC00268.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC00521.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC05452-2(1).jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC05534.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC05763.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC05831.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC05617.jpg"];
    const port_index = 11
    


    let index_value = Math.floor(Math.random() * wide_index);
    let item = wide_pics[index_value];

    document.getElementById("large").style.backgroundImage = "url('" + item + "')"
    //const wide = document.getElementById("large");
    //wide.setAttribute("style", "background-image: url(${item})")
    
    let small_port_value = Math.floor(Math.random() * port_index);
    let small_port_item = port_pics[small_port_value];

    document.getElementById("small").style.backgroundImage = "url('" +small_port_item + "')"

    return;
}
