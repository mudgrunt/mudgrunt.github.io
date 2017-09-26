function readURL(input) {
            if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
            $('#blah')
            .attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});
//function update(jscolor) {
    // 'jscolor' instance can be used as a string
//    document.getElementById('target').style.backgroundColor = '#' + jscolor
//}
function changetoptitle() {
	$('#toptitleh1').text($('#toptitle').val());
}
function changetopcaption() {
	$('#topcaptionp').text($('#topcaption').val());
}
function changebottomtitle() {
	$('#bottomtitleh1').text($('#bottomtitle').val());
}
function changebottomcaption() {
	$('#bottomcaptionp').text($('#bottomcaption').val());
}