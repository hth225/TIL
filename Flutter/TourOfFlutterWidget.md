# A Tour of the Flutter Widget Framework
## Intro
- 플루터 위젯은 모던 react-style 프레임 워크를 사용해 빌드되었습니다
- 중심 아이디어는 UI를 빌드할 때 위젯 바깥에서 빌드하는 것 입니다
- 위젯은 현재 주어진 설정과 state를 통해서 view가 어떻게 보여질지 describe합니다

### Hello World
```dart
import 'package:flutter/materials.dart';

void main() {
    runApp(
        Center(
            child: Text(
                'Hello World!',
                textDirection: TextDirection.ltr,
            ),
        ),
    );
}
```
- ```runApp``` 함수는 주어진 Widget을 갖고 이것을 위젯트리의 루트로 만듭니다
- 위 예제에서 볼 수 있듯, 위젯 트리는 두개의 위젯으로 구성되어 있습니다
    1. Center
    2. Center의 자식, Text
- 프레임워크는 루트위젯이 화면을 덮도록 하는데, 이것은 'Hello World!' 가 화면 중앙에 오게 함을 의미합니다