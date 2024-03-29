function Watcher(vm,exp,cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get()
}

Watcher.prototype = {
    update() {
        this.run()
    },
    run() {
        var value = this.get();
        var oldValue = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm,value,oldValue)
        }
    },
    get() {
        Dep.target = this;
        var value = this.vm[exp];
        Dep.target = null;
        return value;
    }
}