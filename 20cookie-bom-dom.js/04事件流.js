//   事件冒泡 事件捕获
const divEle = document.createElement('div');
divEle.addEventListener('click', (event) => {
    event.type
    event.target
    event.currentTarget
    event.preventDefault  //    默认行为
    event.stopPropagation //阻止冒泡和捕获

})