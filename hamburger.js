  //this is simply a demo environment for following a pluralsight video by Jonathan Mills
import getSessions from './sessionRespository.js'
import sessionTemplate from './sessionRepository.js'
(function(){
    import {sessionRepository, sessionTemplate}
    function render() {
    var list = document.querySelector("#sessions");
    if (!list) return;
    list.innerHTML = sessionTemplate(data.listItems);
    }

    var data = {
        listItems: [],
    };

    getSessions()  
    .then((sessions) => {
        console.log("promises!");
        data.listItems = sessions;
        render();
    });
}())