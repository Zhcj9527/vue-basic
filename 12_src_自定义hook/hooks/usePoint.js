import {reactive, onMounted, onBeforeUnmount} from 'vue'

export default function() {
  // 实现鼠标“打点‘的数据
  let point = reactive({
    x:0,
    y:0
  })

  // 方法
  function savePoint(evevt){
    point.x = evevt.pageX;
    point.y = evevt.pageY;
    console.log(point.x);
  }

  // 钩子
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}