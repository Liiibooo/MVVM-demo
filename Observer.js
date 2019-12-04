
let obj = {
    name: 'zs',
    hobby: {
        sport: "basketball",
        game: "Dota2"
    }
}

function observer(data) {
    if (!data || Object.prototype.toString.call(data) !== '[object Object]') return
    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key])
    })
}

function defineReactive(data, key, val) {
    var dep = new Dep()
    observer(val)
    Object.defineProperty(data, key, {
        enumerable: true, //可枚举
        configurable: false, // 不可删除
        get() {
            return val;
        },
        set(newVal) {
            if (val === newVal) return
            val = newVal;
            console.log(`监听到值的变化: ${val} --> ${newVal}`)
            dep.notify() //数据改变，通知订阅者
        }
    })
}

//添加订阅器
function Dep() {
    this.subs = []
}
Dep.prototype = {
    addSub(sub) {
        this.subs.push(sub)
    },
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}



//example
observer(obj)
obj.hobby.game = 'LOL'