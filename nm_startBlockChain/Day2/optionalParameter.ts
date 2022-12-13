// Alias 타입 사용 예제
type Age = number;
type Name = String;
type User = {
    name: Name,
    age?: number
}

const nana : User = {
    name: "nana"
}

const kiki : User = {
    name: "kiki",
    age:3
}

// 함수의 return 값의 타입을 지정하는 방법
// function UserMaker(name: string) : User {
//     return {
//         name
//     }
// }
const UserMaker = (name:string) : User => ({name})
const nyung = UserMaker("nyung")
nyung.age = 12