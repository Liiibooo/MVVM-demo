
let obj = {
    name: 'zs',
    hobby: {
        sport: "basketball",
        game: "Dota2"
    }
}

function observer(data) {
    if (!data || typeof data !== "object") return
    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key])
    })
}

function defineReactive(data, key, val) {
    observer(val)
    Object.defineProperty(data, key, {
        enumerable: true, //可枚举
        configurable: false, // 不可删除
        get() {
            return val;
        },
        set(newVal) {
            console.log(`监听到值的变化: ${val} --> ${newVal}`)
            val = newVal;
        }
    })
}

//example
observer(obj)
obj.hobby.game = 'LOL'