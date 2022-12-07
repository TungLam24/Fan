class Fan {
    slow: number = 1
    medium: number = 2
    fast: number = 3
    private speed: number
    private on: boolean
    private radius: number
    private color: string
    constructor(speed = 1, on = false, radius = 5, color = "blue") {
        this.speed = speed
        this.on = on
        this.radius = radius
        this.color = color
    }
    toString() {
        if (this.on == true) {
            return `fan is on: speed = ${this.speed} color = ${this.color} radius = ${this.radius}`
        } else {
            return `fan is off: color = ${this.color} radius = ${this.radius}`
        }
    }
}
let fan1 = new Fan(3, true, 10, "yellow")
let fan2 = new Fan(2, false, 5)
console.log(fan1.toString())
console.log(fan2.toString())