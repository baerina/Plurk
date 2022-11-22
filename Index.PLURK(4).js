(function() {
    'use strict';

javascript:(function() {
if(typeof(name99999) == 'undefined') name99999 = {};

let head = '&#x';
let chs = [];
let start = 127789;
let end = 127875;
for(let f=0; f<(end - start + 1); f++) chs.push(head + (start + f).toString(16));
start = 128000;
end = 128063;
for(let f=0; f<(end - start + 1); f++) chs.push(head + (start + f).toString(16));

function name99999_change() {
let names = $('.list .name[data-uid="99999"]');
for(let f=0; f<names.length; f++) {
if(names.eq(f).hasClass('eye')) continue;
names.eq(f).addClass('eye');
let raw_name = names.eq(f).html();
if(raw_name == "ಠ_ಠ") {
if($('.divplurk').length) {
raw_name = $('.divplurk').attr('data-pid') + raw_name;
}
else raw_name = $('.plurk.display').attr('data-pid') + raw_name;
}
if(!name99999[raw_name]) name99999[raw_name] = name_c(raw_name);
let html_name = raw_name;
if(html_name.substr(-3) == "ಠ_ಠ") html_name = "ಠ_ಠ";
if (names[f].getAttribute('style').indexOf('#0a9c17') != -1){
names.eq(f).attr('data-uid', GLOBAL.session_user.uid)
names.eq(f).html(name99999[raw_name].ch + ' ' + html_name);
names.eq(f).addClass('my-eye');
names.eq(f).css('color', '#9900FF');
names.eq(f).css('background-color', '#FFA');
names.eq(f).parents('.plurk_cnt').css('background-color', '#FFA');
names.eq(f).parents('.response').css('background-color', '#FFA');
names.eq(f).parents('.response').find(".text_holder").css('background-color', '#FFA');
}
else{
names.eq(f).html(name99999[raw_name].ch + ' ' + html_name);
names.eq(f).css('color', name99999[raw_name].cl);
}
}
}
var name99999_change_i = setInterval(name99999_change, 1000);

function paddingLeft(str, length){
if(str.length >= length) return str;
else return paddingLeft("0" + str, length);
}

function name_c(raw_name) {
let r = 0;
for(let c of raw_name) {
r += c.charCodeAt(0);
}
console.log(chs.length);
return {
ch: chs[r % chs.length],
cl: '#' + Math.floor(+("0." + Math.pow(r, 3)) * 16777216).toString(16)
};
}
})()
})();
