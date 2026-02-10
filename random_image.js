function setRandomPics() {
    const wide_pics = ["https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/IMG_6192.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/house2.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC01978.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/IMG_5061.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC03498.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC00622.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC02620.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC00490.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC00445.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC03044.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/IMG_4733.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/OUT12.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/ride2.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC04780.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC04465.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC01700.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC03773.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC04661.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/film/island%20of%20strangers/Still%202026-02-10%20140420_1.1.28.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/film/bobbing%20for%20glory/Still%202026-02-10%20135423_1.1.22.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC04983.jpg"];
    const wide_index = 21
    const port_pics = ["https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC03766.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/1.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC00715.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC03558.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC00196.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC01662.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC00268.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC00521.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC05452-2(1).jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/events/DSC05534.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC05763.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/figure/DSC05831.jpg", "https://file.garden/aOtmp_Be6gwrFnBa/website%20resources/personal/DSC05617.jpg"];
    const port_index = 11
    

    let wide_or_port = Math.floor(Math.random() * 2)


    if (wide_or_port == 1) {
        let index_value1 = Math.floor(Math.random() * wide_index);
        let item1 = wide_pics[index_value1];

        let index_value2 = Math.floor(Math.random() * wide_index);
        while (index_value1 == index_value2) {
            index_value2 = Math.floor(Math.random() * wide_index);
        }
        let item2 = wide_pics[index_value2];

        let index_value3 = Math.floor(Math.random() * wide_index);
        while (index_value3 == index_value1 || index_value3 == index_value2) {
            index_value3 = Math.floor(Math.random() * wide_index);
        }
        let item3 = wide_pics[index_value3];

        let index_value4 = Math.floor(Math.random() * wide_index);
        while (index_value4 == index_value1 || index_value4 == index_value2 || index_value4 == index_value3) {
            index_value4 = Math.floor(Math.random() * wide_index);
        }
        let item4 = wide_pics[index_value4];

        const wide1 = document.getElementById("frame1");
        wide1.setAttribute("src", item1)
        const wide2 = document.getElementById("frame2");
        wide2.setAttribute("src", item2)
        const wide3 = document.getElementById("frame3");
        wide3.setAttribute("src", item3)
        const wide4 = document.getElementById("frame4");
        wide4.setAttribute("src", item4)
    } else {
        let index_value1 = Math.floor(Math.random() * port_index);
        let item1 = port_pics[index_value1];

        let index_value2 = Math.floor(Math.random() * port_index);
        while (index_value1 == index_value2) {
            index_value2 = Math.floor(Math.random() * port_index);
        }
        let item2 = port_pics[index_value2];

        const port1 = document.getElementById("frame1");
        port1.setAttribute("src", item1)
        const port2 = document.getElementById("frame2");
        port2.setAttribute("src", item2)
    }

    

    
    let small_port_value = Math.floor(Math.random() * port_index);
    let small_port_item = port_pics[small_port_value];

    const portrait = document.getElementById("smallport")
    portrait.setAttribute("src", small_port_item)

    return;
}
