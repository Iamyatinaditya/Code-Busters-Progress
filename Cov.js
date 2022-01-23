function refresh() {
    var iframe= "https://www.covidvisualizer.com/";
    iframe.reload(true);
}

setTimeout('refresh'());


iframe = documennt.getElementById('covis');

iframe.src = iframe.src;

document.getElementById('covis').contentwindow.location.reload(true);

iframe.contentWindow.location.reload;
document.getElementById('covis').contentDocument.location.reload(true);

function reloadFrame(iFrame) {
    
    iFrame.parentNode.replaceChild(iFrame.colneNode(), iFrame);
    var f = document.getElementById('covis');
    f.src = f.src;
    iframe.src = iframe.src;
    iframe.src = iframe.src.split("?")[0] + "?_+" + new Date().getTime();
    var wasSrc = iframe.src

    iframe.onload = function() {
        iframe.onload = undefined
        iframe.src = wasSrc;
    }
    iframe.contentWindow.location.reload()

        window.onhaschange = function () {
            window.setTimeout(function () {
                let frame = document.getElementById('myFrame')
                if (frame !== null) {frame.replaceWith(frame)}
            }, 1000);
        }


} 