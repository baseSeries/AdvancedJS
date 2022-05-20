//  浏览器对象模型 BOM Browser Object Model
// window
// location
// history
// document
/*
1.window 对象身份一 作为JS的全局对象
            身份二 作为浏览器窗口对象
        window.screenX 浏览器offsetX
        window.screenY

        window.addEventListener('scroll', function(){
            console.log(window.scrollX,window.scrollY);
        })

        window.outerHeight
        window.innerHeight


        派发事件
        window.addEventListener('dangEvent'()=>{})
        window.dispatchEvent(new Event('dangEvent'))
*/
/*
location.
        href完整URL地址
        protocol  协议
        hash
        host
        hostname
        pathname
        origin
        search


        location.assign("http://baidu.com")
        location.href="http://baidu.com"
        location.replace("http://baidu.com")
        location.reload(true/false)

*/
/*
history
       history.pushState({name:"dang","title",URL})
       replaceState
       back
       go
       forward

*/

/*
事件监听
 1
<div onclick="console.log('点击')"></div>
2
<div onclick="divClick"></div>
function divClick(){
    console.log('点击')
}
3
const divEle = document.querySelector(".box")
divEle.onclick = divClick(){
    console.log('点击')
}
divEle.addEventListener('click',divClick)
divEle.removeEventListener('click',divClick)

*/
