import UIKit

var str = "Hello, playground"

// Basic Operator

// Assignment Operator
// 튜플을 이용해 한번에 여러 값 할당할 수 있음

let (x, y) = (1, 2)

// Tuple ?
// 여러 타입 한번에 묶어서 사용 가능
var tuple = (1, "This is tuple", true)

print("First : ", tuple.0, ", Second :",tuple.1)

// 튜플안에 튜플 가능
var anotherTuple = ("first", (tuple))

print(anotherTuple)

// Range Operator
// Closed Range Operator

for index in 1...5 {
    print("\(index) times 5 is \(index * 5)")
}

// Half-open Range Operator
// 배열을 다루는데 유용할듯

var names = ["James", "Nick", "Jason", "Bruce"]

for index in 0..<names.count{
    print("Person \(index + 1) is called \(names[index])")
}

// Strings & Characters
// 여러줄 문자 리터럴
// 줄바꿈은 역슬래시 (\) 로 함
let quatotaion = """
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
"""
print(quatotaion)
