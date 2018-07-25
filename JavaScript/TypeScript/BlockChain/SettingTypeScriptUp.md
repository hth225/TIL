# Setting Typescript Up
- 프로젝트 기본 세팅
- typescript를 컴파일 하고 이를 node로 실행하기 위함

## configuring tsconfig.json
- tsconfig.json 파일을 프로젝트의 루트 디렉터리에 생성
- 다음과 같은 코드로 compilerOptions와 include할 파일, exclude 할 파일을 지정

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "ES2015",
        "sourceMap": true
    },
    "include": ["./Javascript/TypeScript/BlockChain/src/index.ts"],
    "exclude": ["node_modules"]
}
```
- exclude의 경우 위와같이 modules를 사용하지 않는 경우라도 node_modules를 디폴트로 설정하는것이 좋다

## 명령어 세팅
- yarn start 명령어를 통해서 간단하게 typescript를 컴파일 하고 컴파일된 js 파일을 실행

```json
"scripts": {
    "start": "node ./JavaScript/TypeScript/BlockChain/src/index.js",
    "prestart": "tsc"
}
```
- prestart를 통해 start 전의 명령 실행
- start를 통해 컴파일된 js 파일 실행