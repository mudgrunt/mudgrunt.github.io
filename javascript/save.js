//Saving image and displaying through html2canvas
window.takeScreenShot = function() {
    html2canvas(document.getElementById("target"), {
        onrendered: function (canvas) {
            document.body.appendChild(canvas);
        },
    });
}