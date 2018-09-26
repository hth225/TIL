# Get Started
## Install 
- [Installing Flutter](https://flutter.io/setup-macos/)
### SYSTEM REQUIRMENTS
- Operating Systems: macOS (64-bit)
- Disk Space: 700 MB (does not include disk space for IDE/tools).
- Tools: Flutter depends on these command-line tools being available in your environment.
    - bash, mkdir, rm, git, curl, unzip, which

### Get the SDK
[Flutter macOS_v0.8.2-beta.zip](https://storage.googleapis.com/flutter_infra/releases/beta/macos/flutter_macos_v0.8.2-beta.zip)


### Extract File (e.g.)
```cmd
$ cd ~/Documents/TIL/Flutter
$ unzip ~/Downloads/flutter_macos_v0.8.2-beta.zip
```

### Add to path
```cmd
$ export PATH=`pwd`/flutter/bin:$PATH
```

## Run flutter doctor
```cmd
$ flutter doctor
```
- 다음 명령을 통해서 개발 환경을 검토하고 결과를 터미널에 보여줍니다
