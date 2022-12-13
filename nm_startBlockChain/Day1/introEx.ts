let a = "hello"
let b : boolean = true
// 명시적으로 알려주는 방법. let b = true가 더 간결함
let c : number[] = []
// 명시적 표현은 최소한으로 사용하는게 좋다. ts가 추론하게 냅두자
c.push(1)

const player = {
    name: "nana"
}
console.log(player.name)