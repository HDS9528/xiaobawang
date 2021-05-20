$(document).ready(function(e){
    $('.framework-into').html('本站已运行<SPAN id=span_dt_dt style="color: #fff;"></SPAN>');
})

function show_date_time()

{
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("4/10/2021 0:0:0");
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt.innerHTML='<font style=color:#2d85f0>'+daysold+'</font> 天 <font style=color:#f4433c>'+hrsold+'</font> 时 <font style=color:#ffbc32>'+minsold+'</font> 分 <font style=color:#0aa858>'+seconds+'</font> 秒';
}
show_date_time();




/*手机客户端导航栏默认隐藏 */
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName("menus_item_child");
var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " closed";
}



//! 可爱的小霸王
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(つェ⊂) 我藏好了哦~~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});



// 气泡
function qipao() {
  $('#page-header').circleMagic({
      radius: 10,
      density: .2,
      color: 'rgba(255,255,255,.4)',
      clearOffset: 0.99
  });
}! function(p) {
  p.fn.circleMagic = function(t) {
      var o, a, n, r, e = !0,
          i = [],
          d = p.extend({ color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2 }, t),
          l = this[0];

      function c() { e = !(document.body.scrollTop > a) }

      function s() { o = l.clientWidth, a = l.clientHeight, l.height = a + "px", n.width = o, n.height = a }

      function h() {
          if (e)
              for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
          requestAnimationFrame(h)
      }

      function f() {
          var t = this;

          function e() { t.pos.x = Math.random() * o, t.pos.y = a + 100 * Math.random(), t.alpha = .1 + Math.random() * d.clearOffset, t.scale = .1 + .3 * Math.random(), t.speed = Math.random(), "random" === d.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = d.color }
          t.pos = {}, e(), this.draw = function() { t.alpha <= 0 && e(), t.pos.y -= t.speed, t.alpha -= 5e-4, r.beginPath(), r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1), r.fillStyle = t.color, r.fill(), r.closePath() }
      }! function() {
          o = l.offsetWidth, a = l.offsetHeight,
              function() {
                  var t = document.createElement("canvas");
                  t.id = "canvas", t.style.top = 0, t.style.zIndex = 0, t.style.position = "absolute", l.appendChild(t), t.parentElement.style.overflow = "hidden"
              }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
          for (var t = 0; t < o * d.density; t++) {
              var e = new f;
              i.push(e)
          }
          h()
      }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
  }
}(jQuery);

// 调用气泡方法
qipao();


/*页脚博主
/*$(document).ready(function(e) {
    $('.copyright').html('©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> 小霸王');
});*/

